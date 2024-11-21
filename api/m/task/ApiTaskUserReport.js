"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Global_1 = require("../../../model/Global");
const TaskUtil_1 = require("./model/TaskUtil");
const TaskRefreshType_1 = require("../../../shared/constant/task/TaskRefreshType");
const moment_1 = __importDefault(require("moment"));
async function default_1(call) {
    const { activityId, taskId, data } = call.req;
    const taskInfo = await Global_1.Global.collection('TaskInfo').findOne({ _id: taskId });
    if (!taskInfo) {
        return call.error('任务不存在');
    }
    const checkResult = await TaskUtil_1.TaskUtil.checkTask(activityId, taskId, taskInfo);
    if (!checkResult.status) {
        return call.error(checkResult.msg);
    }
    // 处理周期性的问题
    let startTime = 0;
    if (taskInfo.refreshType == TaskRefreshType_1.ETaskRefreshType.always) {
        // startTime = moment().utcOffset(8).startOf('day').valueOf();
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
    const userReceive = await Global_1.Global.collection('TaskUserReceive').findOne({ uid: call.userInfo.uid, taskId }, { sort: { _id: -1 } });
    if (!userReceive || userReceive.createTime < startTime) {
        return call.error('任务未领取');
    }
    await Global_1.Global.collection('TaskUserReport').insertOne({ activityId, taskId, uid: call.userInfo.uid, data, createTime: Date.now() });
    const detailList = await Global_1.Global.collection('TaskDetail').find({ taskId }, { sort: { updateTime: 1 } }).toArray();
    if (!detailList.length) {
        return call.error('任务详情异常');
    }
    const taskProgress = await TaskUtil_1.TaskUtil.checkTaskState(call.userInfo.uid, taskInfo, detailList);
    call.succ({ token: call.userInfo.token, taskProgress });
}
exports.default = default_1;
