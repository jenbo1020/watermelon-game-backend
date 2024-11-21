"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Global_1 = require("../../../model/Global");
const TaskUtil_1 = require("./model/TaskUtil");
const TaskType_1 = require("../../../shared/constant/task/TaskType");
async function default_1(call) {
    const { activityId, taskId } = call.req;
    const task = await Global_1.Global.collection('TaskInfo').findOne({ _id: taskId });
    if (!task) {
        return call.error('任务不存在');
    }
    const checkResult = await TaskUtil_1.TaskUtil.checkTask(activityId, taskId, task);
    if (!checkResult.status) {
        return call.error(checkResult.msg);
    }
    const detailList = await Global_1.Global.collection('TaskDetail').find({ taskId }, { sort: { updateTime: 1 } }).toArray();
    if (!detailList.length) {
        return call.error('任务详情异常');
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
    };
    call.succ({ data, token: call.userInfo.token });
}
exports.default = default_1;
