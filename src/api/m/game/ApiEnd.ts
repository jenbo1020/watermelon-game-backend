import { ApiCall } from "tsrpc";
import { ReqEnd, ResEnd } from "../../../shared/protocols/m/game/PtlEnd";
import { Global } from "../../../model/Global";
import { AccountType } from "../../../shared/constant/AccountType";
import { CostType } from "../../../shared/constant/CostType";
import { UserUtil } from "../../../model/UserUtil";
import { RankUtil } from "../../../model/RankUtil";

export default async function (call: ApiCall<ReqEnd, ResEnd>) {
  const { recordId, value, extData } = call.req;
  const record = await Global.collection('GameUserRecord').findOne({ _id: recordId });
  if (!record || record.uid != call.userInfo.uid) {
    call.error('report error')
    return;
  }
  const now = new Date().valueOf();
  const update = await Global.collection('GameUserRecord').updateOne(
    { _id: record._id },
    {
      $set: {
        value, endDate: now, gameDuration: now - record.startDate, extData
      }
    }
  )
  if (!update || !update.modifiedCount) {
    call.error('report error');
    return
  }
  // 入账
  const result = await UserUtil.addAmount({ uid: call.userInfo.uid, accountType: AccountType.POINT, amount: value, costType: CostType.GAME })
  if (!result) {
    call.error('addAmount error')
    return;
  }

  // 入排行榜
  const match = { startDate: { $lte: now }, endDate: { $gte: now } }
  const rankInfo = await Global.collection('RankInfo').findOne(match);
  if (rankInfo) {
    await RankUtil.updateUserRecord({ rankInfoId: rankInfo._id, uid: call.userInfo.uid, value })
  }
  call.succ({ totalValue: result.afterAmount });
}