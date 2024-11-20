import { ApiCall } from "tsrpc";
import { ReqGetPrizeList, ResGetPrizeList } from "../../../shared/protocols/m/exchange/PtlGetPrizeList";
import { Global } from '../../../model/Global';
import { EExchangePrizeStatus } from '../../../shared/constant/ExchangeType';
import { ExchangeEnableTimeType } from '../../../shared/constant/ExchangeEnableTimeType';
import { Tools } from '../../../utils/Tools';

export async function ApiGetPrizeList(call: ApiCall<ReqGetPrizeList, ResGetPrizeList>) {
  const uid = call.userInfo.uid;

  const { accountType, activityId } = call.req;
  const userAccount = await Global.collection('UserAccount').findOne(
    { activityId, userId: uid, accountType }
  );
  const exchangeConfig = await Global.collection('ExchangeConfig').findOne({}, { projection: { _id: 0 } });
  if (!exchangeConfig) {
    return call.error('兑换配置异常');
  }
  const list = await Global.collection('ExchangePrize').find({ activityId }, { sort: { sort: -1 } }).toArray();
  if (!list.length) {
    call.succ({
      config: exchangeConfig,
      amount: userAccount?.amount ?? 0,
      prizeList: [],
      token: call.userInfo.token
    });
    return;
  }

  const now = new Date().getTime();
  let prizeList: any = [];
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
    let prize: any = {
      ...item.prize,
      exchangeId: item._id,
      prizeStock: item.prizeStock,
      exchangePrizeStatus: EExchangePrizeStatus.default,
      needAmount: item.needAmount
    }
    // 总库存没有了
    if (item.prizeStock <= 0) {
      prize.exchangePrizeStatus = EExchangePrizeStatus.outOfStock;
    } else {
      // 定时上架
      if (
        item.enableTime.enableTimeType == ExchangeEnableTimeType.SPECIFY_TIME
        && item.enableTime.specifyTime > now
      ) {
        prize.enableTime = item.enableTime.specifyTime;
        prizeList.push(prize);
        continue;
      }

      // 定时更新库存
      if (item.updateStockConfig.isRegularUpdateStock == true) {
        const timeInterval = Tools.getTimeInterval(item.enableTime.specifyTime, item.updateStockConfig.updateStockCycle);
        console.log(timeInterval);
        // 取出时间区间内发放的库存
        const logList = await Global.collection('ExchangeLog').find(
          { activityId, exchangeId: item._id, uid, createDate: { $gte: timeInterval.startTime, $lt: timeInterval.endTime } }
        ).toArray();
        if (logList.length >= item.updateStockConfig.cycleStock) {
          prize.exchangePrizeStatus = EExchangePrizeStatus.outOfStock;
          prize.updateStockTime = timeInterval.endTime;
        } else {
          const userLogSum = logList.filter(v => v.uid == uid).length;
          if (userLogSum >= item.updateStockConfig.cycleUserLimit) {
            prize.exchangePrizeStatus = EExchangePrizeStatus.exchanged;
            prize.updateStockTime = timeInterval.endTime;
          }
        }

      } else {
        const logList = await Global.collection('ExchangeLog').find(
          { activityId, exchangeId: item._id, uid }
        ).toArray();
        if (logList.length >= item.updateStockConfig.userLimit) {
          prize.exchangePrizeStatus = EExchangePrizeStatus.exchanged;
        }
      }
    }
    prizeList.push(prize);
  }



  call.succ({
    config: exchangeConfig,
    amount: userAccount?.amount ?? 0,
    prizeList,
    token: call.userInfo.token
  })
}