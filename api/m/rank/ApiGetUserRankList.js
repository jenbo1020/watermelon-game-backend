"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Global_1 = require("../../../model/Global");
async function default_1(call) {
    let { rankInfoId, current, pageSize } = call.req;
    let match;
    if (rankInfoId) {
        match = { _id: rankInfoId };
    }
    else {
        const now = new Date().getTime();
        match = { startDate: { $lte: now }, endDate: { $gte: now } };
    }
    const rankInfo = await Global_1.Global.collection('RankInfo').findOne(match);
    if (!rankInfo) {
        call.error('暂无排行榜记录');
        return;
    }
    rankInfoId = rankInfo._id;
    const skip = (current - 1) * pageSize;
    const recordList = await Global_1.Global.collection('RankUserRecord').find({ rankInfoId }, { sort: { amount: -1, updateDate: 1 }, skip, limit: pageSize }).toArray();
    const uids = recordList.map(item => { return item._id; });
    const userList = await Global_1.Global.collection('UserInfo').find({ _id: { $in: uids } }).toArray();
    const prizeList = await Global_1.Global.collection('RankPrize').find({ rankInfoId }).toArray();
    const list = recordList.map((item, index) => {
        var _a, _b;
        const rankNo = skip + index + 1;
        const user = userList.find(a => { return a._id == item.uid; });
        const prize = prizeList.find(a => { return a.minRank <= rankNo && a.maxRank >= rankNo; });
        return {
            uid: item.uid,
            nickname: user ? ((_a = user === null || user === void 0 ? void 0 : user.nickname) !== null && _a !== void 0 ? _a : '') : '',
            avatar: user ? ((_b = user === null || user === void 0 ? void 0 : user.avatar) !== null && _b !== void 0 ? _b : '') : '',
            rankNo,
            value: item.value,
            prize: prize ? prize.prizeInfo : undefined,
            received: item.received,
            receivedDate: item.receivedDate
        };
    });
    call.succ({ list });
}
exports.default = default_1;
