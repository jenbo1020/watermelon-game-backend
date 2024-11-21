"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Global_1 = require("../../../model/Global");
async function default_1(call) {
    const { activityId, accountType, pageNumber, pageSize } = call.req;
    const uid = call.userInfo.uid;
    const match = {
        activityId, userId: uid, accountType
    };
    const total = await Global_1.Global.collection('UserAccountHistory').count(match);
    if (total == 0) {
        return call.succ({
            total: 0,
            totalPage: 0,
            pageNumber,
            list: [],
            token: call.userInfo.token
        });
    }
    const totalPage = Math.ceil(total / pageSize);
    const skip = (pageNumber - 1) * pageSize;
    const list = await Global_1.Global.collection('UserAccountHistory').find(match, {
        sort: { _id: -1 },
        skip,
        limit: pageSize,
        projection: { _id: 0, amount: 1, createTime: 1, tips: 1 }
    }).toArray();
    call.succ({
        total,
        totalPage,
        pageNumber,
        list,
        token: call.userInfo.token
    });
}
exports.default = default_1;
