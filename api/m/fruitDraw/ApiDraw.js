"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Global_1 = require("../../../model/Global");
const moment_1 = __importDefault(require("moment"));
const mongodb_1 = require("mongodb");
async function default_1(call) {
    // 从数据库中获取奖品列表
    const { drawInfoId } = call.req;
    const info = await Global_1.Global.collection('FruitDrawInfo').findOne({ _id: drawInfoId });
    if (!info) {
        call.error('抽奖活动不存在');
        return;
    }
    const now = new Date().getTime();
    if (now < info.startDate) {
        call.error('抽奖活动未开始');
        return;
    }
    if (now > info.endDate) {
        call.error('抽奖活动已结束');
        return;
    }
    const userId = call.userInfo.uid;
    const prizes = await Global_1.Global.collection('FruitDrawPrize').find({ drawInfoId }, { sort: { moduleType: 1, _id: -1 } }).toArray();
    // 验证是否有可用奖品
    const availablePrizes = prizes.filter(prize => prize.stock > 0);
    if (availablePrizes.length === 0) {
        call.error('没有可用奖品');
        return;
    }
    // 产生随机数并确定中奖项
    const rand = Math.random() * 100;
    let currentChance = 0;
    let selectedPrize = null;
    for (const prize of availablePrizes) {
        currentChance += prize.drawChance;
        if (rand < currentChance) {
            selectedPrize = prize;
            break;
        }
    }
    // 减少奖品库存
    if (selectedPrize) {
        const result = await Global_1.Global.collection('FruitDrawPrize').findOneAndUpdate({ _id: selectedPrize._id, stock: { $gte: 1 } }, { $inc: { sent: 1, stock: -1 } });
        // 检查是否成功更新了奖品
        if (!result.value) {
            console.error('not stock');
            selectedPrize = null;
        }
        // TODO 是否要做单人限制？
    }
    const today = (0, moment_1.default)().format('YYY-MM-DD');
    let drawNum = 1, todayDrawNum = 0;
    const todayDrawLogs = await Global_1.Global.collection('FruitDrawLog').find({ drawInfoId, userId, day: today }, { sort: { _id: -1 } }).toArray();
    if (!todayDrawLogs.length) {
        const lastLog = await Global_1.Global.collection('FruitDrawLog').findOne({ drawInfoId, userId }, { sort: { _id: -1 } });
        if (lastLog) {
            drawNum = lastLog.drawNum + 1;
        }
    }
    else {
        drawNum = todayDrawLogs[0].drawNum + 1;
        todayDrawNum = todayDrawLogs.length + 1;
    }
    const prizeList = selectedPrize ? [{
            moduleType: selectedPrize.moduleType,
            prize: selectedPrize.prize
        }] : [];
    // 记录抽奖日志
    await Global_1.Global.collection('FruitDrawLog').insertOne({
        _id: new mongodb_1.ObjectId().toHexString(),
        drawInfoId,
        userId,
        drawNum: drawNum,
        isDraw: selectedPrize !== null,
        prizeList,
        createDate: now,
        day: today
    });
    // 记录抽中的奖品
    for (const item of prizeList) {
        Global_1.Global.collection('FruitDrawUserPrize').insertOne({
            _id: new mongodb_1.ObjectId().toHexString(),
            drawInfoId, userId, drawNum,
            moduleType: item.moduleType, prize: item.prize,
            createDate: now, day: today
        });
        // TODO 奖品发放
    }
    call.succ({
        drawNum,
        todayDrawNum,
        prizeList
    });
}
exports.default = default_1;
