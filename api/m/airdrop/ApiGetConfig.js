"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Global_1 = require("../../../model/Global");
async function default_1(call) {
    const now = new Date().valueOf();
    const match = {
        startDate: { $lte: now },
        endDate: { $gte: now }
    };
    const config = await Global_1.Global.collection('AirdropConfig').findOne(match);
    if (!config) {
        return call.succ({ data: null });
    }
    // 游戏次数  合成大西瓜次数
    const gameMatch = {
        startDate: { $gte: config.startDate, $lte: config.endDate }
    };
    console.log('startDate:', gameMatch);
    const gameRecords = await Global_1.Global.collection('GameUserRecord').find(gameMatch).toArray();
    let gameTimes = 0;
    let compositedTimes = 0;
    for (const record of gameRecords) {
        if (record.endDate > 0) {
            gameTimes += 1;
            compositedTimes += record.compositedTimes;
        }
    }
    // 拉新人数
    const inviteMatch = {
        createDate: { $lte: config.startDate, $gte: config.startDate },
        inviteUid: call.userInfo.uid
    };
    const inviteTimes = await Global_1.Global.collection('UserInfo').count(inviteMatch);
    // 是否购买
    const buyMatch = {
        userId: call.userInfo.uid,
        createTime: { $gte: config.startDate, $lte: config.endDate },
        status: 'finish'
    };
    const buyTimes = await Global_1.Global.collection('OrderInfo').count(buyMatch);
    // 积分排行
    let myRankPer = 0;
    const rankMatch = { startDate: { $lte: now }, endDate: { $gte: now } };
    const rankInfo = await Global_1.Global.collection('RankInfo').findOne(rankMatch);
    if (rankInfo) {
        // 取出总游戏人数
        const totalRankUsers = await Global_1.Global.collection('RankUserRecord').count({ rankInfoId: rankInfo._id });
        // 取自己的分值
        let myScore = 0;
        const userRecord = await Global_1.Global.collection('RankUserRecord').findOne({ rankInfoId: rankInfo._id });
        if (userRecord) {
            myScore = userRecord.value;
        }
        // 算出比自己高分的人数
        const topUsers = await Global_1.Global.collection('RankUserRecord').count({ rankInfoId: rankInfo._id, value: { $gte: myScore } });
        myRankPer = ((topUsers + 1) / totalRankUsers * 100);
    }
    let data = {};
    for (const key in config) {
        let value = config[key];
        if (key == 'game') {
            config[key]['finish'] = gameTimes >= value.times;
        }
        else if (key == 'composited') {
            config[key]['finish'] = compositedTimes >= value.times;
        }
        else if (key == 'invite') {
            config[key]['finish'] = inviteTimes >= value.times;
        }
        else if (key == 'buy') {
            config[key]['finish'] = buyTimes >= value.times;
        }
        else if (key == 'rank') {
            config[key]['finish'] = (value.min <= myRankPer && myRankPer <= value.max);
        }
        data[key] = config[key];
    }
    console.log(`gameTimes:${gameTimes},compositedTimes=${compositedTimes},buyTimes:${buyTimes},myRankPer:${myRankPer}`);
    call.succ({ data });
}
exports.default = default_1;
