import { ApiCall } from "tsrpc";
import { ReqGetTaskList, ResGetTaskList } from "../../../shared/protocols/m/task/PtlGetTaskList";
import { Global } from "../../../model/Global";
import { TaskUtil } from "./model/TaskUtil";
import { ETaskType } from "../../../shared/constant/task/TaskType";

export default async function (call: ApiCall<ReqGetTaskList, ResGetTaskList>) {
    const { activityId } = call.req;
    const taskList = await Global.collection('TaskInfo').find({ activityId }, { sort: { sortIndex: 1, _id: -1 } }).toArray();
    let list: any = [];
    for (const task of taskList) {
        if (task.status == 'online') {
            const detailList = await Global.collection('TaskDetail').find({ taskId: task._id }, { sort: { updateTime: 1 } }).toArray();
            if (!detailList.length) {
                console.log('任务详情异常', task._id);
                continue;
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
            let data = {
                taskId: task._id,
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
            list.push(data);
        }
    };
    call.succ({ list, token: call.userInfo.token })
}