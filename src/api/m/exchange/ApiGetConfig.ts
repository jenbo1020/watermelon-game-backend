import { ApiCall } from "tsrpc";
import { ReqGetConfig, ResGetConfig } from "../../../shared/protocols/m/exchange/PtlGetConfig";
import { Global } from '../../../model/Global';

export default async function (call: ApiCall<ReqGetConfig, ResGetConfig>) {
  const uid = call.userInfo.uid;
  const { accountType, activityId } = call.req;
  const userAccount = await Global.collection('UserAccount').findOne(
    { activityId, userId: uid, accountType }
  );
  const exchangeConfig = await Global.collection('ExchangeConfig').findOne({}, { projection: { _id: 0 } });
  if (!exchangeConfig) {
    return call.error('兑换配置异常');
  }
  call.succ({
    config: exchangeConfig,
    amount: userAccount?.amount ?? 0,
    token: call.userInfo.token
  });

}