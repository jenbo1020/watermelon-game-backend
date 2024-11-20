import { ApiCall } from "tsrpc";
import { ReqGetNotifyList, ResGetNotifyList } from "../../../shared/protocols/m/notify/PtlGetNotifyList";
import { Global } from "../../../model/Global";

export default async function (call: ApiCall<ReqGetNotifyList, ResGetNotifyList>) {
  const list = await Global.collection('Notify')
    .find({})
    .toArray();

  call.succ({
    list,
    token: call.userInfo.token
  });
}