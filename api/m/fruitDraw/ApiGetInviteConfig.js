"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Global_1 = require("../../../model/Global");
const UserUtil_1 = require("../../../model/UserUtil");
async function default_1(call) {
    const { drawInfoId } = call.req;
    const info = await Global_1.Global.collection('FruitDrawInfo').findOne({ _id: drawInfoId });
    if (!info) {
        call.error('信息异常');
        return;
    }
    const userId = call.userInfo.uid;
    const configList = await Global_1.Global.collection('FruitInviteConfig').find({ drawInfoId }, {
        sort: { inviteNum: -1 },
        projection: { stock: -1, sent: -1, update: -1, create: -1 }
    }).toArray();
    // 统计邀请的用户数量
    const inviteSum = await UserUtil_1.UserUtil.getInviteSum({ userId, startDate: info.startDate, endDate: info.endDate });
    const mustLog = await Global_1.Global.collection('FruitInviteMustLog').find({ drawInfoId, userId }).toArray();
    const list = [];
    for (const item of configList) {
        const isGetMust = mustLog.find(a => a.inviteNum == item.inviteNum);
        const value = {
            inviteSum: item.inviteNum,
            isFinish: inviteSum >= item.inviteNum,
            rewardType: item.rewardType,
        };
        if (item.rewardType == 'must') {
            if (!isGetMust && item.stock <= 0) {
                continue;
            }
            value.mustPrize = item.mustPrize;
        }
        else {
            value.chancePrize = item.chanceMultiple;
            value.chancePrize = item.chancePrize;
        }
        list.push(value);
    }
    call.succ({ list });
}
exports.default = default_1;
