"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Global_1 = require("../../../model/Global");
const TaskUtil_1 = require("./model/TaskUtil");
const TaskType_1 = require("../../../shared/constant/task/TaskType");
const TaskRefreshType_1 = require("../../../shared/constant/task/TaskRefreshType");
const moment_1 = __importDefault(require("moment"));
async function default_1(call) {
    const { activityId, taskId } = call.req;
    const taskInfo = await Global_1.Global.collection('TaskInfo').findOne({ _id: taskId });
    if (!taskInfo) {
        return call.error('任务不存在');
    }
    const checkResult = await TaskUtil_1.TaskUtil.checkTask(activityId, taskId, taskInfo);
    if (!checkResult.status) {
        return call.error(checkResult.msg);
    }
    const userReceive = await Global_1.Global.collection('TaskUserReceive').findOne({ uid: call.userInfo.uid, taskId }, { sort: { _id: -1 } });
    if (!userReceive) {
        return call.error('任务未领取');
    }
    // 处理周期性的问题
    let startTime = 0;
    if (taskInfo.refreshType == TaskRefreshType_1.ETaskRefreshType.always) {
        startTime = userReceive.createTime;
    }
    else if (taskInfo.refreshType == TaskRefreshType_1.ETaskRefreshType.daily) {
        startTime = (0, moment_1.default)().utcOffset(8).startOf('day').valueOf();
    }
    else if (taskInfo.refreshType == TaskRefreshType_1.ETaskRefreshType.weekly) {
        startTime = (0, moment_1.default)().utcOffset(8).startOf('week').valueOf();
    }
    else if (taskInfo.refreshType == TaskRefreshType_1.ETaskRefreshType.monthly) {
        startTime = (0, moment_1.default)().utcOffset(8).startOf('month').valueOf();
    }
    else if (taskInfo.refreshType == TaskRefreshType_1.ETaskRefreshType.yearly) {
        startTime = (0, moment_1.default)().utcOffset(8).startOf('year').valueOf();
    }
    if (userReceive.createTime < startTime) {
        return {
            taskState: TaskType_1.ETaskState.unStart,
            progressIndex: 0,
            completeValue: 0,
        };
    }
    const detailList = await Global_1.Global.collection('TaskDetail').find({ taskId }, { sort: { updateTime: 1 } }).toArray();
    if (!detailList.length) {
        return call.error('任务详情异常');
    }
    let taskProgress = await TaskUtil_1.TaskUtil.checkTaskState(call.userInfo.uid, taskInfo, detailList);
    if (taskProgress.taskState != TaskType_1.ETaskState.receiveAward) {
        return call.error('任务未完成，无法领取奖励');
    }
    await Global_1.Global.collection('TaskUserReward').insertOne({
        activityId, taskId, taskDetailId: taskId, uid: call.userInfo.uid, reward: taskInfo.reward, createTime: Date.now()
    });
    taskProgress = await TaskUtil_1.TaskUtil.checkTaskState(call.userInfo.uid, taskInfo, detailList);
    call.succ({ token: call.userInfo.token, taskProgress, reward: taskInfo.reward });
}
exports.default = default_1;
