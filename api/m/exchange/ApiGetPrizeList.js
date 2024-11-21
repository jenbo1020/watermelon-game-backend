"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiGetPrizeList = void 0;
const Global_1 = require("../../../model/Global");
const ExchangeType_1 = require("../../../shared/constant/ExchangeType");
const ExchangeEnableTimeType_1 = require("../../../shared/constant/ExchangeEnableTimeType");
const Tools_1 = require("../../../utils/Tools");
async function ApiGetPrizeList(call) {
    var _a, _b;
    const uid = call.userInfo.uid;
    const { accountType, activityId } = call.req;
    const userAccount = await Global_1.Global.collection('UserAccount').findOne({ activityId, userId: uid, accountType });
    const exchangeConfig = await Global_1.Global.collection('ExchangeConfig').findOne({}, { projection: { _id: 0 } });
    if (!exchangeConfig) {
        return call.error('兑换配置异常');
    }
    const list = await Global_1.Global.collection('ExchangePrize').find({ activityId }, { sort: { sort: -1 } }).toArray();
    if (!list.length) {
        call.succ({
            config: exchangeConfig,
            amount: (_a = userAccount === null || userAccount === void 0 ? void 0 : userAccount.amount) !== null && _a !== void 0 ? _a : 0,
            prizeList: [],
            token: call.userInfo.token
        });
        return;
    }
    const now = new Date().getTime();
    let prizeList = [];
    for (const item of list) {
        if (item.isRemoved == true && item.isEnabled != true) {
            // 删除或者没上架
            console.log('删除或者没上架');
            continue;
        }
        if (item.accountType != accountType) {
            // 帐号类型异常
            console.log('帐号类型异常');
            continue;
        }
        let prize = {
            ...item.prize,
            exchangeId: item._id,
            prizeStock: item.prizeStock,
            exchangePrizeStatus: ExchangeType_1.EExchangePrizeStatus.default,
            needAmount: item.needAmount
        };
        // 总库存没有了
        if (item.prizeStock <= 0) {
            prize.exchangePrizeStatus = ExchangeType_1.EExchangePrizeStatus.outOfStock;
        }
        else {
            // 定时上架
            if (item.enableTime.enableTimeType == ExchangeEnableTimeType_1.ExchangeEnableTimeType.SPECIFY_TIME
                && item.enableTime.specifyTime > now) {
                prize.enableTime = item.enableTime.specifyTime;
                prizeList.push(prize);
                continue;
            }
            // 定时更新库存
            if (item.updateStockConfig.isRegularUpdateStock == true) {
                const timeInterval = Tools_1.Tools.getTimeInterval(item.enableTime.specifyTime, item.updateStockConfig.updateStockCycle);
                console.log(timeInterval);
                // 取出时间区间内发放的库存
                const logList = await Global_1.Global.collection('ExchangeLog').find({ activityId, exchangeId: item._id, uid, createDate: { $gte: timeInterval.startTime, $lt: timeInterval.endTime } }).toArray();
                if (logList.length >= item.updateStockConfig.cycleStock) {
                    prize.exchangePrizeStatus = ExchangeType_1.EExchangePrizeStatus.outOfStock;
                    prize.updateStockTime = timeInterval.endTime;
                }
                else {
                    const userLogSum = logList.filter(v => v.uid == uid).length;
                    if (userLogSum >= item.updateStockConfig.cycleUserLimit) {
                        prize.exchangePrizeStatus = ExchangeType_1.EExchangePrizeStatus.exchanged;
                        prize.updateStockTime = timeInterval.endTime;
                    }
                }
            }
            else {
                const logList = await Global_1.Global.collection('ExchangeLog').find({ activityId, exchangeId: item._id, uid }).toArray();
                if (logList.length >= item.updateStockConfig.userLimit) {
                    prize.exchangePrizeStatus = ExchangeType_1.EExchangePrizeStatus.exchanged;
                }
            }
        }
        prizeList.push(prize);
    }
    call.succ({
        config: exchangeConfig,
        amount: (_b = userAccount === null || userAccount === void 0 ? void 0 : userAccount.amount) !== null && _b !== void 0 ? _b : 0,
        prizeList,
        token: call.userInfo.token
    });
}
exports.ApiGetPrizeList = ApiGetPrizeList;
