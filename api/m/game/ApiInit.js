"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Global_1 = require("../../../model/Global");
async function default_1(call) {
    const now = new Date().valueOf();
    // 取出本时间段内的活动配置
    const filter = {
        activityDateStartDate: { $lte: now },
        activityDateEndDate: { $gte: now }
    };
    const list = await Global_1.Global.collection('ActivityInfo').find(filter).toArray();
    const activity = list.map(item => {
        return {
            cover: item.activityCover,
            name: item.activityName,
            content: item.activityContent
        };
    });
    call.succ({
        loading: "",
        activity
    });
}
exports.default = default_1;
