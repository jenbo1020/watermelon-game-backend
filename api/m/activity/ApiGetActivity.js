"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Global_1 = require("../../../model/Global");
const ActivityStatus_1 = require("../../../shared/constant/ActivityStatus");
async function default_1(call) {
    const { activityId } = call.req;
    const activity = await Global_1.Global.collection('ActivityInfo').findOne({ _id: activityId });
    if (!activity) {
        call.error('活动不存在');
        return;
    }
    const now = Date.now();
    const { activityDateStartDate, activityDateEndDate } = activity;
    let status = ActivityStatus_1.ActivityStatus.NOT_STARTED;
    let statusText = ActivityStatus_1.ActivityStatusName.NOT_STARTED;
    if (now > activityDateEndDate) {
        status = ActivityStatus_1.ActivityStatus.FINISHED;
        statusText = ActivityStatus_1.ActivityStatusName.FINISHED;
    }
    else if (now >= activityDateStartDate) {
        status = ActivityStatus_1.ActivityStatus.OPENING;
        statusText = ActivityStatus_1.ActivityStatusName.OPENING;
    }
    call.succ({
        ...activity,
        status,
        statusText,
        token: call.userInfo.token
    });
}
exports.default = default_1;
