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
    const { activityId } = call.req;
    const uid = call.userInfo.uid;
    const prizes = await Global_1.Global.collection('FruitDrawPrize').find({ activityId, isEnabled: true }, { sort: { moduleType: 1, _id: -1 } }).toArray();
    // 验证是否有可用奖品
    const availablePrizes = prizes.filter(prize => prize.prizeStock > 0 && prize.isEnabled !== false && prize.isRemoved !== true);
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
        const success = await updatePrizeStock(selectedPrize._id, 1);
        if (!success) {
            call.error('库存不足');
            return;
        }
    }
    const todayStart = (0, moment_1.default)().utcOffset(8).startOf('d')
        .valueOf();
    let drawNum = 1, todayDrawNum = 0;
    const todayDrawLogs = await Global_1.Global.collection('FruitDrawLog').find({ activityId, userOpenId: uid, 'create.time': { $gte: todayStart } }, { sort: { _id: -1 } }).toArray();
    if (!todayDrawLogs.length) {
        const lastLog = await Global_1.Global.collection('FruitDrawLog').findOne({ activityId, userOpenId: uid }, { sort: { _id: -1 } });
        if (lastLog) {
            drawNum = lastLog.drawNum + 1;
        }
    }
    else {
        drawNum = todayDrawLogs[0].drawNum + 1;
        todayDrawNum = todayDrawLogs.length + 1;
    }
    // 创建抽奖记录
    const drawLog = {
        _id: new mongodb_1.ObjectId().toHexString(),
        userOpenId: uid,
        drawNum: drawNum,
        isDraw: selectedPrize !== null,
        isRemoved: false,
        isEnabled: true,
        create: {
            time: new Date().valueOf(),
            admin: {
                adminId: call.userInfo.uid,
                nickname: call.userInfo.nickname
            }
        }
    };
    // TODO 解决并发问题
    await createDrawLog(drawLog);
    call.succ({
        token: call.userInfo.token,
        drawNum,
        todayDrawNum,
        prizeList: selectedPrize ? [{
                moduleType: selectedPrize.moduleType,
                prizeId: selectedPrize._id,
                prizeName: selectedPrize.prize.prizeName,
                prizePic: selectedPrize.prize.prizePicture,
                prizeType: selectedPrize.prize.prizeType,
                prizePrice: selectedPrize.prize.prizePrice.toString()
            }] : []
    });
}
exports.default = default_1;
// 原子更新操作：选择具有足够库存的奖品并减少库存
async function updatePrizeStock(prizeId, decrementBy) {
    const result = await Global_1.Global.collection('FruitDrawPrize').findOneAndUpdate({ _id: prizeId, prizeStock: { $gte: decrementBy }, isRemoved: { $ne: true }, isEnabled: { $ne: false } }, { $inc: { prizeStock: -decrementBy } });
    // 检查是否成功更新了奖品
    return result.value !== null;
}
// 创建抽奖记录的函数
async function createDrawLog(log) {
    await Global_1.Global.collection('FruitDrawLog').findOneAndUpdate({ _id: log._id }, { $set: log }, { upsert: true });
}
