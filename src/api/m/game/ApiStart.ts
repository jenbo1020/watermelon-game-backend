import { ApiCall } from "tsrpc";
import { ReqStart, ResStart } from "../../../shared/protocols/m/game/PtlStart";
import { Global } from "../../../model/Global";
import { AccountType } from "../../../shared/constant/AccountType";
import { CostType } from "../../../shared/constant/CostType";
import { ObjectID } from "bson";

export default async function (call: ApiCall<ReqStart, ResStart>) {
  // 查询用户是否够次数，扣次数
  const account = await Global.collection('UserAccount').findOne({ uid: call.userInfo.uid, accountType: AccountType.TIMES });
  if (!account || account.amount <= 0) {
    call.error('Insufficient number of games played');
    return;
  }
  const update = await Global.collection('UserAccount').updateOne(
    { _id: account._id },
    { $inc: { amount: -1 } }
  );
  if (!update || !update.modifiedCount) {
    call.error('game error,please try later!');
    return;
  }
  const now = new Date().valueOf();
  await Global.collection('UserAccountHistory').insertOne(
    {
      uid: call.userInfo.uid,
      accountType: AccountType.TIMES,
      beforeAmount: account.amount,
      afterAmount: account.amount - 1,
      amount: -1,
      costType: CostType.GAME,
      createTime: now
    }
  )
  // 生成新的游戏记录
  const record = {
    _id: new ObjectID().toHexString(),
    uid: call.userInfo.uid,
    startDate: now,
    endDate: 0,
    value: 0,
    gameDuration: 0
  }
  const result = await Global.collection('GameUserRecord').insertOne(record);
  if (!result || !result.insertedId) {
    call.error('game error')
    return
  }
  call.succ({
    recordId: record._id
  })
}