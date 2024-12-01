"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Global_1 = require("../../../model/Global");
const bson_1 = require("bson");
async function default_1(call) {
    const { drawInfoId } = call.req;
    const userId = call.userInfo.uid;
    const composeLog = await Global_1.Global.collection('FruitComposePrize').findOne({ drawInfoId, userId });
    if (composeLog) {
        return { code: 1, msg: '你已合成，不可重复合成' };
    }
    const [collectPrizeList, collectLogList, composePrize] = await Promise.all([
        Global_1.Global.collection('FruitDrawPrize').find({ drawInfoId, moduleType: 'collect' }).toArray(),
        Global_1.Global.collection('FruitDrawUserPrize').aggregate([
            { $match: { drawInfoId, userId, moduleType: 'collect' } },
            { $group: { Id: '$prize.prizeId', sum: { $sum: 1 } } }
        ]).toArray(),
        Global_1.Global.collection('FruitComposePrize').findOne({ drawInfoId })
    ]);
    if (!composePrize) {
        return { code: 1, msg: '商家未配置合成奖励' };
    }
    if (collectPrizeList.length !== collectLogList.length) {
        return { code: 1, msg: '你未收集完，合成失败' };
    }
    if (composePrize.prizeStock <= 0) {
        return { code: 1, msg: '库存不足，合成失败' };
    }
    // 减少库存
    const composeRs = await Global_1.Global.collection('FruitComposePrize').findOneAndUpdate({ _id: composePrize._id, prizeStock: { $gt: 0 } }, { $inc: { prizeStock: -1, sent: 1 } });
    if (!composeRs.ok) {
        return { code: 1, msg: '奖品被抢完了，合成失败' };
    }
    const now = new Date().getTime();
    const id = new bson_1.ObjectId().toHexString();
    await Global_1.Global.collection('FruitComposeLog').insertOne({
        _id: id,
        drawInfoId, userId, prize: composePrize.prize,
        createDate: now
    });
    // TODO 发放奖品
    call.succ({});
}
exports.default = default_1;
