"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Global_1 = require("../../../model/Global");
const TaskUtil_1 = require("./model/TaskUtil");
const TaskType_1 = require("../../../shared/constant/task/TaskType");
async function default_1(call) {
    const { activityId } = call.req;
    const taskList = await Global_1.Global.collection('TaskInfo').find({ activityId }, { sort: { sortIndex: 1, _id: -1 } }).toArray();
    let list = [];
    for (const task of taskList) {
        if (task.status == 'online') {
            const detailList = await Global_1.Global.collection('TaskDetail').find({ taskId: task._id }, { sort: { updateTime: 1 } }).toArray();
            if (!detailList.length) {
                console.log('任务详情异常', task._id);
                continue;
            }
            const detailInfo = detailList.map(detail => {
                if (detail.hasDialog) {
                    return {
                        triggerType: detail.triggerType,
                        triggerId: detail.triggerId,
                        taskType: TaskType_1.ETaskType.dialog,
                        dialogList: detail.dialogList.map(dialog => {
                            return {
                                targetType: dialog.targetType,
                                targetId: dialog.targetId,
                                text: dialog.text,
                            };
                        }),
                    };
                }
                return {
                    triggerType: detail.triggerType,
                    triggerId: detail.triggerId,
                    taskType: TaskType_1.ETaskType.operate,
                    ...detail.operateInfo
                };
            });
            const taskProgress = await TaskUtil_1.TaskUtil.checkTaskState(call.userInfo.uid, task, detailList);
            const showTime = [task.showTime, task.enableTime[1]];
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
            };
            list.push(data);
        }
    }
    ;
    call.succ({ list, token: call.userInfo.token });
}
exports.default = default_1;
