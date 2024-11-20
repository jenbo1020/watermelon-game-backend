import { ApiCall } from "tsrpc";
import { ReqGetTask, ResGetTask } from "../../../shared/protocols/m/task/PtlGetTask";
import { Global } from "../../../model/Global";
import { TaskUtil } from "./model/TaskUtil";
import { ETaskType } from "../../../shared/constant/task/TaskType";

export default async function (call: ApiCall<ReqGetTask, ResGetTask>) {
    const { activityId, taskId } = call.req;
    const task = await Global.collection('TaskInfo').findOne({ _id: taskId });
    if (!task) {
        return call.error('任务不存在');
    }
    const checkResult = await TaskUtil.checkTask(activityId, taskId, task);
    if (!checkResult.status) {
        return call.error(checkResult.msg);
    }
    const detailList = await Global.collection('TaskDetail').find({ taskId }, { sort: { updateTime: 1 } }).toArray();
    if (!detailList.length) {
        return call.error('任务详情异常');
    }
    const detailInfo = detailList.map(detail => {
        if (detail.hasDialog) {
            return {
                triggerType: detail.triggerType,
                triggerId: detail.triggerId,
                taskType: ETaskType.dialog,
                dialogList: detail.dialogList.map(dialog => {
                    return {
                        targetType: dialog.targetType,
                        targetId: dialog.targetId,
                        text: dialog.text,
                    }
                }),
            }
        }
        return {
            triggerType: detail.triggerType,
            triggerId: detail.triggerId,
            taskType: ETaskType.operate,
            ...detail.operateInfo
        }
    })

    const taskProgress = await TaskUtil.checkTaskState(call.userInfo.uid, task, detailList);
    const showTime: [number, number] = [task.showTime, task.enableTime[1]];
    let data:any = {
        taskId,
        autoReceive: task.autoReceive,
        autoActive: task.autoActive,
        taskProgress,
        basicInfo: {
            title: task.title,
            describe: task.describe,
            icon: task.icon,
            reward: task.reward,
        },
        detailInfo,
        taskLife: {
            refreshType: task.refreshType,
            showTime,
            enableTime: task.enableTime,
        }
    }
    call.succ({ data, token: call.userInfo.token })

}