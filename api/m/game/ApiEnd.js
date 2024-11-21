"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Global_1 = require("../../../model/Global");
const AccountType_1 = require("../../../shared/constant/AccountType");
const CostType_1 = require("../../../shared/constant/CostType");
const UserUtil_1 = require("../../../model/UserUtil");
const RankUtil_1 = require("../../../model/RankUtil");
async function default_1(call) {
    const { recordId, value, extData } = call.req;
    const record = await Global_1.Global.collection('GameUserRecord').findOne({ _id: recordId });
    if (!record || record.uid != call.userInfo.uid) {
        call.error('report error');
        return;
    }
    const now = new Date().valueOf();
    const update = await Global_1.Global.collection('GameUserRecord').updateOne({ _id: record._id }, {
        $set: {
            value, endDate: now, gameDuration: now - record.startDate, extData
        }
    });
    if (!update || !update.modifiedCount) {
        call.error('report error');
        return;
    }
    // 入账
    const result = await UserUtil_1.UserUtil.addAmount({ uid: call.userInfo.uid, accountType: AccountType_1.AccountType.POINT, amount: value, costType: CostType_1.CostType.GAME });
    if (!result) {
        call.error('addAmount error');
        return;
    }
    // 入排行榜
    const match = { startDate: { $lte: now }, endDate: { $gte: now } };
    const rankInfo = await Global_1.Global.collection('RankInfo').findOne(match);
    if (rankInfo) {
        await RankUtil_1.RankUtil.updateUserRecord({ rankInfoId: rankInfo._id, uid: call.userInfo.uid, value });
    }
    call.succ({ totalValue: result.afterAmount });
}
exports.default = default_1;
