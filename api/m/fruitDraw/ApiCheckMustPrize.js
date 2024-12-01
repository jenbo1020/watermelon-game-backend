"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FruitUtil_1 = require("../../../model/FruitUtil");
const UserUtil_1 = require("../../../model/UserUtil");
const Global_1 = require("../../../model/Global");
async function default_1(call) {
    const { drawInfoId } = call.req;
    const info = await Global_1.Global.collection('FruitDrawInfo').findOne({ _id: drawInfoId });
    if (!info) {
        call.error('信息异常');
        return;
    }
    const userId = call.userInfo.uid;
    const inviteSum = await UserUtil_1.UserUtil.getInviteSum({ userId, startDate: info.startDate, endDate: info.endDate });
    const rs = await FruitUtil_1.FruitUtil.checkInviteMustPrize({ drawInfoId, userId, inviteNum: inviteSum });
    if (rs.code == 0) {
        call.succ({ list: rs.prizeList });
        return;
    }
    call.succ({ list: [] });
}
exports.default = default_1;
