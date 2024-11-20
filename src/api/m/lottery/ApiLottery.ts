import { ApiCall } from "tsrpc";
import { ReqLottery, ResLottery, } from "../../../shared/protocols/m/lottery/PtlLottery";
import { Global } from "../../../model/Global";
import { DbLotteryPrize } from "../../../shared/dbItems/lottery/DbLotteryPrize";
import { ObjectID } from "bson";
import { DbLotteryLog } from "../../../shared/dbItems/lottery/DbLotteryLog";
import moment from "moment";

export default async function (call: ApiCall<ReqLottery, ResLottery>) {
    let { lotteryInfoId } = call.req;
    const now = new Date().getTime();
    const uid = call.userInfo.uid;
    let match: any
    if (lotteryInfoId) {
        match = { _id: lotteryInfoId }
    } else {
        match = { startDate: { $lte: now }, endDate: { $gte: now } }
    }
    const drawInfo = await Global.collection('LotteryInfo').findOne(match);
    if (!drawInfo) {
        call.error('暂无抽奖信息');
        return;
    }
    lotteryInfoId = drawInfo._id;
    const prizeList = await Global.collection('LotteryPrize').find().toArray();
    if (!prizeList.length) {
        call.error('暂无抽奖奖品信息');
        return;
    }
    // 验证是否有可用奖品
    const availablePrizes = prizeList.filter(prize => prize.stock > 0);
    if (availablePrizes.length === 0) {
        call.error('没有可用奖品')
        return;
    }
    /// 产生随机数并确定中奖项
    const rand = Math.random() * 100;
    console.log("rand:", rand);
    let currentChance = 0;
    let selectedPrize: DbLotteryPrize | null = null;
    for (const prize of availablePrizes) {
        currentChance += prize.chance;
        if (rand < currentChance) {
            selectedPrize = prize;
            break;
        }
    }

    // 减少奖品库存
    if (selectedPrize) {
        const result = await Global.collection('LotteryPrize').findOneAndUpdate(
            { _id: selectedPrize._id, stock: { $gte: 1 } },
            { $inc: { sent: 1, stock: -1 } }
        );
        // 检查是否成功更新了奖品
        if (!result.value) {
            console.error('not stock')
        }
    }
    const todayStart = moment().utcOffset(8).startOf('d')
        .valueOf()
    let drawNum = 1, todayDrawNum = 0;
    const todayDrawLogs = await Global.collection('LotteryLog').find({ lotteryInfoId, uid, 'lotteryDate': { $gte: todayStart } }, { sort: { _id: -1 } }).toArray()
    if (!todayDrawLogs.length) {
        const lastLog = await Global.collection('LotteryLog').findOne({ lotteryInfoId, uid: uid }, { sort: { _id: -1 } });
        if (lastLog) {
            drawNum = lastLog.drawNum + 1;
        }
    } else {
        drawNum = todayDrawLogs[0].drawNum + 1;
        todayDrawNum = todayDrawLogs.length + 1;
    }
    // 创建抽奖记录
    const lotteryLog: DbLotteryLog = {
        _id: new ObjectID().toHexString(),
        lotteryInfoId,
        uid: call.userInfo.uid, // 当前用户的 id
        drawNum: drawNum, // 这是用户的第几次抽奖
        isWin: selectedPrize !== null, // 是否中奖
        prizeInfo: selectedPrize?.prizeInfo,
        lotteryDate: now
    };
    await Global.collection('LotteryLog').insertOne(lotteryLog)
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