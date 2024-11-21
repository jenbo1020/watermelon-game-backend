"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Global_1 = require("../../../model/Global");
async function default_1(call) {
    const { lotteryInfoId } = call.req;
    const prizeList = await Global_1.Global.collection('LotteryPrize').find({ lotteryInfoId }, { sort: { minRank: 1 } }).toArray();
    const list = prizeList.map(item => {
        return {
            ...item.prizeInfo
        };
    });
    call.succ({
        list
    });
}
exports.default = default_1;
