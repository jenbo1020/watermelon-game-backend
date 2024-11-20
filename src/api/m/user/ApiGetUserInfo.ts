import { ApiCall } from "tsrpc";
import { ReqGetUserInfo, ResGetUserInfo } from "../../../shared/protocols/m/user/PtlGetUserInfo";
import { Global } from '../../../model/Global';

export default async function (call: ApiCall<ReqGetUserInfo, ResGetUserInfo>) {
  const uid = call.userInfo.uid;
  let userInfo = {
    uid,
    nickname: '',
    avatar: ''
  }
  const user = await Global.collection('UserInfo').findOne({ _uid: call.userInfo.uid });
  if (user) {
    userInfo.nickname = user?.nickname ?? ''
    userInfo.avatar = user?.avatar ?? ''
  }
  return call.succ({ token: call.userInfo.token, userInfo })

}