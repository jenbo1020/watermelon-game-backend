"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Global_1 = require("../../../model/Global");
const moment_1 = __importDefault(require("moment"));
async function default_1(call) {
    let { rankInfoId } = call.req;
    const now = new Date().getTime();
    let match;
    if (rankInfoId) {
        match = { _id: rankInfoId };
    }
    else {
        match = { startDate: { $lte: now }, endDate: { $gte: now } };
    }
    console.log('match:', match);
    const info = await Global_1.Global.collection('RankInfo').findOne(match);
    if (!info) {
        call.error('信息错误');
        return;
    }
    rankInfoId = info._id;
    let statusName = "进行中";
    if (now > info.endDate) {
        statusName = "已结束";
    }
    else if (now < info.startDate) {
        statusName = "未开始";
    }
    const prizeList = await Global_1.Global.collection('RankPrize').find({ rankInfoId }, { sort: { minRank: 1 } }).toArray();
    call.succ({
        data: {
            rankInfo: {
                rankInfoId: info._id,
                startDateStr: (0, moment_1.default)(info.startDate).format('YYYY-MM-DD HH:mm:ss'),
                endDateStr: (0, moment_1.default)(info.endDate).format('YYYY-MM-DD HH:mm:ss'),
                statusName
            },
            prizeList
        }
    });
}
exports.default = default_1;
