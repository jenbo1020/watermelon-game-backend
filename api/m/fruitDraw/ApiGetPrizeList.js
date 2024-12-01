"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Global_1 = require("../../../model/Global");
async function default_1(call) {
    var _a, _b;
    const now = new Date().getTime();
    const match = { startDate: { $lte: now }, endDate: { $gte: now } };
    const info = await Global_1.Global.collection('FruitDrawInfo').findOne({ match });
    if (!info) {
        call.error('未配置抽奖活动');
        return;
    }
    const matchDraw = { drawInfoId: info._id };
    const prizeList = await Global_1.Global.collection('FruitDrawPrize').find(matchDraw, { sort: { moduleType: 1, _id: -1 } }).toArray();
    const composePrize = await Global_1.Global.collection('FruitComposePrize').findOne(matchDraw);
    if (!prizeList)
        return call.error('奖品列表异常');
    if (!composePrize)
        return call.error('合成奖品未配置');
    const matchUser = { ...matchDraw, userId: call.userInfo.uid };
    const userCollectPrizes = await Global_1.Global.collection('FruitDrawUserPrize').aggregate([
        { $match: { ...matchUser, moduleType: 'collect' } },
        { $group: { Id: '$prize.prizeId', sum: { $sum: 1 } } }
    ]).toArray();
    const composeLog = await Global_1.Global.collection('FruitComposePrize').findOne(matchUser);
    let basicPrize = [], collectPrize = [];
    for (const item of prizeList) {
        if (item.moduleType == 'basic') {
            basicPrize.push(item.prize);
        }
        else if (item.moduleType == 'collect') {
            const sum = (_b = (_a = userCollectPrizes.find(a => a.Id == item.prize.prizeId)) === null || _a === void 0 ? void 0 : _a.sum) !== null && _b !== void 0 ? _b : 0;
            collectPrize.push({ ...item.prize, sum });
        }
    }
    call.succ({
        basicPrize,
        collectPrize,
        composePrize: {
            ...collectPrize.prize,
            isCompose: !!composeLog
        }
    });
}
exports.default = default_1;
