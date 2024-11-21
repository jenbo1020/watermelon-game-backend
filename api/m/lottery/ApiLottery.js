"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Global_1 = require("../../../model/Global");
const bson_1 = require("bson");
const moment_1 = __importDefault(require("moment"));
async function default_1(call) {
    let { lotteryInfoId } = call.req;
    const now = new Date().getTime();
    const uid = call.userInfo.uid;
    let match;
    if (lotteryInfoId) {
        match = { _id: lotteryInfoId };
    }
    else {
        match = { startDate: { $lte: now }, endDate: { $gte: now } };
    }
    const drawInfo = await Global_1.Global.collection('LotteryInfo').findOne(match);
    if (!drawInfo) {
        call.error('暂无抽奖信息');
        return;
    }
    lotteryInfoId = drawInfo._id;
    const prizeList = await Global_1.Global.collection('LotteryPrize').find().toArray();
    if (!prizeList.length) {
        call.error('暂无抽奖奖品信息');
        return;
    }
    // 验证是否有可用奖品
    const availablePrizes = prizeList.filter(prize => prize.stock > 0);
    if (availablePrizes.length === 0) {
        call.error('没有可用奖品');
        return;
    }
    /// 产生随机数并确定中奖项
    const rand = Math.random() * 100;
    console.log("rand:", rand);
    let currentChance = 0;
    let selectedPrize = null;
    for (const prize of availablePrizes) {
        currentChance += prize.chance;
        if (rand < currentChance) {
            selectedPrize = prize;
            break;
        }
    }
    // 减少奖品库存
    if (selectedPrize) {
        const result = await Global_1.Global.collection('LotteryPrize').findOneAndUpdate({ _id: selectedPrize._id, stock: { $gte: 1 } }, { $inc: { sent: 1, stock: -1 } });
        // 检查是否成功更新了奖品
        if (!result.value) {
            console.error('not stock');
        }
    }
    const todayStart = (0, moment_1.default)().utcOffset(8).startOf('d')
        .valueOf();
    let drawNum = 1, todayDrawNum = 0;
    const todayDrawLogs = await Global_1.Global.collection('LotteryLog').find({ lotteryInfoId, uid, 'lotteryDate': { $gte: todayStart } }, { sort: { _id: -1 } }).toArray();
    if (!todayDrawLogs.length) {
        const lastLog = await Global_1.Global.collection('LotteryLog').findOne({ lotteryInfoId, uid: uid }, { sort: { _id: -1 } });
        if (lastLog) {
            drawNum = lastLog.drawNum + 1;
        }
    }
    else {
        drawNum = todayDrawLogs[0].drawNum + 1;
        todayDrawNum = todayDrawLogs.length + 1;
    }
    // 创建抽奖记录
    const lotteryLog = {
        _id: new bson_1.ObjectID().toHexString(),
        lotteryInfoId,
        uid: call.userInfo.uid,
        drawNum: drawNum,
        isWin: selectedPrize !== null,
        prizeInfo: selectedPrize === null || selectedPrize === void 0 ? void 0 : selectedPrize.prizeInfo,
        lotteryDate: now
    };
    await Global_1.Global.collection('LotteryLog').insertOne(lotteryLog);
    call.succ({
        token: call.userInfo.token,
        drawNum,
        todayDrawNum,
        prizeInfo: selectedPrize ? {
            prizeId: selectedPrize._id,
            prizeName: selectedPrize.prizeInfo.prizeName,
            prizePic: selectedPrize.prizeInfo.prizePicture,
            prizeType: selectedPrize.prizeInfo.prizeType,
            prizePrice: selectedPrize.prizeInfo.prizePrice
        } : undefined
    });
}
exports.default = default_1;
