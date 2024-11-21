"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Global_1 = require("../../../model/Global");
async function default_1(call) {
    const { rankInfoId } = call.req;
    const prizeList = await Global_1.Global.collection('RankPrize').find({ rankInfoId }, { sort: { minRank: 1 } }).toArray();
    call.succ({
        list: prizeList
    });
}
exports.default = default_1;
