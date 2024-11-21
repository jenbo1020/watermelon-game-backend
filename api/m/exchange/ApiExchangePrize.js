"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiExchangePrize = void 0;
const Global_1 = require("../../../model/Global");
const ExchangeEnableTimeType_1 = require("../../../shared/constant/ExchangeEnableTimeType");
const Tools_1 = require("../../../utils/Tools");
const CostType_1 = require("../../../shared/constant/CostType");
const BagUtil_1 = require("../../../model/BagUtil");
const UserPrizeSourceType_1 = require("../../../shared/constant/UserPrizeSourceType");
async function ApiExchangePrize(call) {
    const { accountType, exchangeId, activityId } = call.req;
    const uid = call.userInfo.uid;
    const exchangeConfig = await Global_1.Global.collection('ExchangeConfig').findOne({}, { projection: { _id: 0 } });
    if (!exchangeConfig) {
        return call.error('兑换配置异常');
    }
    const exchangeInfo = await Global_1.Global.collection('ExchangePrize').findOne({ _id: exchangeId });
    if (!exchangeInfo) {
        return call.error('兑换信息异常');
    }
    if (exchangeInfo.accountType != accountType) {
        return call.error('兑换类型异常');
    }
    // 删除或者没上架
    if (exchangeInfo.isRemoved == true && exchangeInfo.isEnabled != true) {
        return call.error('兑换信息异常');
    }
    // 是否上架，是否定时上架且到上架时间
    const now = new Date().getTime();
    if (exchangeInfo.enableTime.enableTimeType == ExchangeEnableTimeType_1.ExchangeEnableTimeType.SPECIFY_TIME
        && exchangeInfo.enableTime.specifyTime > now) {
        return call.error('商品未上架');
    }
    if (exchangeInfo.prizeStock <= 0) {
        return call.error('库存不足');
    }
    // 0.帐号是否有余额
    const userAccount = await Global_1.Global.collection('UserAccount').findOne({
        activityId, userId: uid, accountType
    });
    if (!userAccount || userAccount.amount < exchangeInfo.needAmount) {
        console.log('111111');
        return call.error(`${exchangeConfig.pointName}不足`);
    }
    if (exchangeInfo.updateStockConfig.isRegularUpdateStock == true) {
        const timeInterval = Tools_1.Tools.getTimeInterval(exchangeInfo.enableTime.specifyTime, exchangeInfo.updateStockConfig.updateStockCycle);
        console.log(timeInterval);
        // 取出时间区间内发放的库存
        const logList = await Global_1.Global.collection('ExchangeLog').find({ activityId, exchangeId, uid, createDate: { $gte: timeInterval.startTime, $lt: timeInterval.endTime } }).toArray();
        if (logList.length >= exchangeInfo.updateStockConfig.cycleStock) {
            return call.error('当期库存不足');
        }
        const userLogSum = logList.filter(v => v.uid == uid).length;
        if (userLogSum >= exchangeInfo.updateStockConfig.cycleUserLimit) {
            return call.error('超出当期兑换限制');
        }
    }
    else {
        const logList = await Global_1.Global.collection('ExchangeLog').find({ activityId, exchangeId, uid }).toArray();
        if (logList.length >= exchangeInfo.updateStockConfig.userLimit) {
            return call.error('超出每人兑换限制');
        }
    }
    // 2.是否有库存
    const upSet = await Global_1.Global.collection('ExchangePrize').findOneAndUpdate({
        _id: exchangeInfo._id,
        prizeStock: { $gt: 0 }
    }, {
        $inc: {
            prizeStock: -1,
            sendTotal: 1
        }
    });
    if (upSet.ok && upSet.value) {
        // 3.扣余额
        const afterAmount = userAccount.amount - exchangeInfo.needAmount;
        const updateRs = await Global_1.Global.collection('UserAccount').updateOne({ _id: userAccount._id }, {
            $inc: { amount: -exchangeInfo.needAmount }
        });
        if (!updateRs.modifiedCount) {
            return call.error(`${exchangeConfig.pointName}不足`);
        }
        const now = new Date().valueOf();
        // 4.记录帐号流水
        await Global_1.Global.collection('UserAccountHistory').insertOne({
            uid, accountType, costType: CostType_1.CostType.EXCHANGE,
            beforeAmount: userAccount.amount, afterAmount, amount: -exchangeInfo.needAmount, createTime: now, tips: `兑换商品 ${exchangeInfo.prize.prizeName} *${exchangeInfo.prize.rewardCount}`
        });
        // 5.记录兑换流水
        await Global_1.Global.collection('ExchangeLog').insertOne({
            activityId, exchangeId, uid, prize: exchangeInfo.prize, createDate: now
        });
        // 6.发奖到背包
        const bagData = { activityId, uid, prize: exchangeInfo.prize, source: UserPrizeSourceType_1.UserPrizeSourceType.POINT_EXCHANGE };
        await BagUtil_1.BagUtil.addBagInfo(bagData);
        return call.succ({ amount: afterAmount, token: call.userInfo.token });
    }
    call.error('商品库存不足');
}
exports.ApiExchangePrize = ApiExchangePrize;
