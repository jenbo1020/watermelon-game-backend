"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Global_1 = require("../../../model/Global");
const AccountType_1 = require("../../../shared/constant/AccountType");
const CostType_1 = require("../../../shared/constant/CostType");
const bson_1 = require("bson");
async function default_1(call) {
    // 查询用户是否够次数，扣次数
    const account = await Global_1.Global.collection('UserAccount').findOne({ uid: call.userInfo.uid, accountType: AccountType_1.AccountType.TIMES });
    if (!account || account.amount <= 0) {
        call.error('Insufficient number of games played');
        return;
    }
    const update = await Global_1.Global.collection('UserAccount').updateOne({ _id: account._id }, { $inc: { amount: -1 } });
    if (!update || !update.modifiedCount) {
        call.error('game error,please try later!');
        return;
    }
    const now = new Date().valueOf();
    await Global_1.Global.collection('UserAccountHistory').insertOne({
        uid: call.userInfo.uid,
        accountType: AccountType_1.AccountType.TIMES,
        beforeAmount: account.amount,
        afterAmount: account.amount - 1,
        amount: -1,
        costType: CostType_1.CostType.GAME,
        createTime: now
    });
    // 生成新的游戏记录
    const record = {
        _id: new bson_1.ObjectID().toHexString(),
        uid: call.userInfo.uid,
        startDate: now,
        endDate: 0,
        value: 0,
        gameDuration: 0
    };
    const result = await Global_1.Global.collection('GameUserRecord').insertOne(record);
    if (!result || !result.insertedId) {
        call.error('game error');
        return;
    }
    call.succ({
        recordId: record._id
    });
}
exports.default = default_1;
