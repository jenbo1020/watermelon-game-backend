import { ApiCall } from "tsrpc";
import { ReqTaskUserReceive, ResTaskUserReceive } from "../../../shared/protocols/m/task/PtlTaskUserReceive";
import { Global } from "../../../model/Global";
import { TaskUtil } from "./model/TaskUtil";
import { ETaskRefreshType } from "../../../shared/constant/task/TaskRefreshType";
import moment from "moment";

export default async function (call: ApiCall<ReqTaskUserReceive, ResTaskUserReceive>) {
    const { activityId,taskId } = call.req;
    const taskInfo = await Global.collection('TaskInfo').findOne({ _id: taskId });
    if (!taskInfo) {
        return call.error('任务不存在');
    }
    const checkResult = await TaskUtil.checkTask(activityId, taskId, taskInfo);
    if (!checkResult.status) {
        return call.error(checkResult.msg);
    }
    // 处理周期性的问题
    let startTime = 0;
    if (taskInfo.refreshType == ETaskRefreshType.always) {
        // startTime = moment().utcOffset(8).startOf('day').valueOf();
    } else if (taskInfo.refreshType == ETaskRefreshType.daily) {
        startTime = moment().utcOffset(8).startOf('day').valueOf();
    } else if (taskInfo.refreshType == ETaskRefreshType.weekly) {
        startTime = moment().utcOffset(8).startOf('week').valueOf();
    } else if (taskInfo.refreshType == ETaskRefreshType.monthly) {
        startTime = moment().utcOffset(8).startOf('month').valueOf();
    } else if (taskInfo.refreshType == ETaskRefreshType.yearly) {
        startTime = moment().utcOffset(8).startOf('year').valueOf();
    }
    const userReceive=await Global.collection('TaskUserReceive').findOne({uid:call.userInfo.uid,taskId},{sort:{_id:-1}});
    if (userReceive){
        if (taskInfo.refreshType != ETaskRefreshType.always && userReceive.createTime >= startTime){
            return call.error('任务已领取');
        }
    }
    await Global.collection('TaskUserReceive').insertOne({
        activityId,taskId,uid:call.userInfo.uid,createTime:Date.now()
    });
    const detailList = await Global.collection('TaskDetail').find({ taskId }, { sort: { updateTime: 1 }}).toArray();
    if (!detailList.length) {
        return call.error('任务详情异常');
    }
    const taskProgress = await TaskUtil.checkTaskState(call.userInfo.uid, taskInfo, detailList);
    call.succ({ token: call.userInfo.token, taskProgress });
}