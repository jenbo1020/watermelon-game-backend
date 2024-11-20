import { ApiCall } from "tsrpc";
import { ReqTaskUserReward, ResTaskUserReward } from "../../../shared/protocols/m/task/PtlTaskUserReward";
import { Global } from "../../../model/Global";
import { TaskUtil } from "./model/TaskUtil";
import { ETaskState } from "../../../shared/constant/task/TaskType";
import { ETaskRefreshType } from "../../../shared/constant/task/TaskRefreshType";
import moment from "moment";

export default async function (call: ApiCall<ReqTaskUserReward, ResTaskUserReward>) {
    const { activityId, taskId } = call.req;
    const taskInfo = await Global.collection('TaskInfo').findOne({ _id: taskId });
    if (!taskInfo) {
        return call.error('任务不存在');
    }
    const checkResult = await TaskUtil.checkTask(activityId, taskId, taskInfo);
    if (!checkResult.status) {
        return call.error(checkResult.msg);
    }

    const userReceive = await Global.collection('TaskUserReceive').findOne({ uid: call.userInfo.uid, taskId }, { sort: { _id: -1 } });
    if (!userReceive) {
        return call.error('任务未领取');
    }
    // 处理周期性的问题
    let startTime = 0;
    if (taskInfo.refreshType == ETaskRefreshType.always) {
        startTime = userReceive.createTime;
    } else if (taskInfo.refreshType == ETaskRefreshType.daily) {
        startTime = moment().utcOffset(8).startOf('day').valueOf();
    } else if (taskInfo.refreshType == ETaskRefreshType.weekly) {
        startTime = moment().utcOffset(8).startOf('week').valueOf();
    } else if (taskInfo.refreshType == ETaskRefreshType.monthly) {
        startTime = moment().utcOffset(8).startOf('month').valueOf();
    } else if (taskInfo.refreshType == ETaskRefreshType.yearly) {
        startTime = moment().utcOffset(8).startOf('year').valueOf();
    }
    if (userReceive.createTime < startTime) {
        return {
            taskState: ETaskState.unStart,
            progressIndex: 0,
            completeValue: 0,
        }
    }

    const detailList = await Global.collection('TaskDetail').find({ taskId }, { sort: { updateTime: 1 } }).toArray();
    if (!detailList.length) {
        return call.error('任务详情异常');
    }
    let taskProgress = await TaskUtil.checkTaskState(call.userInfo.uid, taskInfo, detailList);
    if (taskProgress.taskState != ETaskState.receiveAward) {
        return call.error('任务未完成，无法领取奖励');
    }
    await Global.collection('TaskUserReward').insertOne({
        activityId, taskId, taskDetailId: taskId, uid: call.userInfo.uid, reward: taskInfo.reward, createTime: Date.now()
    });
    taskProgress = await TaskUtil.checkTaskState(call.userInfo.uid, taskInfo, detailList);
    call.succ({ token: call.userInfo.token, taskProgress, reward: taskInfo.reward });
}