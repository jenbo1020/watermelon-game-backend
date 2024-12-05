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
    let myRank = {
        uid: call.userInfo.uid,
        nickname: call.userInfo.nickname,
        avatar: call.userInfo.avatar,
        rankNo: 0,
        value: 0,
        received: false,
    };
    const uids = recordList.map(item => { return item._id; });
    const userList = await Global_1.Global.collection('UserInfo').find({ _id: { $in: uids } }).toArray();
    const prizeList = await Global_1.Global.collection('RankPrize').find({ rankInfoId }).toArray();
    const list = recordList.map((item, index) => {
        var _a, _b, _c, _d;
        const rankNo = skip + index + 1;
        const user = userList.find(a => { return a._id == item.uid; });
        const prize = prizeList.find(a => { return a.minRank <= rankNo && a.maxRank >= rankNo; });
        if (item.uid == call.userInfo.uid) {
            myRank = {
                uid: item.uid,
                nickname: user ? ((_a = user === null || user === void 0 ? void 0 : user.nickname) !== null && _a !== void 0 ? _a : '') : '',
                avatar: user ? ((_b = user === null || user === void 0 ? void 0 : user.avatar) !== null && _b !== void 0 ? _b : '') : '',
                rankNo,
                value: item.value,
                prize: prize ? prize.prizeList : [],
                received: item.received,
                receivedDate: item.receivedDate
            };
        }
        return {
            uid: item.uid,
            nickname: user ? ((_c = user === null || user === void 0 ? void 0 : user.nickname) !== null && _c !== void 0 ? _c : '') : '',
            avatar: user ? ((_d = user === null || user === void 0 ? void 0 : user.avatar) !== null && _d !== void 0 ? _d : '') : '',
            rankNo,
            value: item.value,
            prize: prize ? prize.prizeList : [],
            received: item.received,
            receivedDate: item.receivedDate
        };
    });
    if (!myRank) {
        const myInfo = await Global_1.Global.collection('RankUserRecord').findOne({ rankInfoId, uid: call.userInfo.uid });
        if (myInfo) {
            myRank.value = myInfo.value;
        }
    }
    call.succ({ list, myRank });
}
exports.default = default_1;
