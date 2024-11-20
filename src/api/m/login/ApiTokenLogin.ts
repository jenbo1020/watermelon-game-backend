import { ApiCall } from "tsrpc";
import { ReqTokenLogin, ResTokenLogin } from "../../../shared/protocols/m/login/PtlTokenLogin";
import { ELoginType } from '../../../shared/constant/TypesInfo';
import { Global } from '../../../model/Global';
import TokenManager from '../../../lib/TokenManager';

export async function ApiTokenLogin(call: ApiCall<ReqTokenLogin, ResTokenLogin>) {
  const { needUserInfo } = call.req;
  // 记录信息
  const nowDate = new Date().getTime();
  const log = { uid: call.userInfo.uid, ip: call.conn.ip, loginType: ELoginType.Token, createDate: nowDate, msg: 'token登录' }
  await Global.collection('UserLoginLog').insertOne(log);

  const token = TokenManager.createToken(call.userInfo.uid, call.req.device.id, nowDate);
  if (needUserInfo) {
    return call.succ({
      token,
      userInfo: {
        uid: call.userInfo.uid,
        nickname: call.userInfo.nickname,
        avatar: call.userInfo.avatar
      }
    })
  }
  // 更新最后登录信息
  await Global.collection('UserInfo').updateOne(
    { uid: call.userInfo.uid },
    { $set: { lastLogin: { time: nowDate, ip: call.conn.ip } } }
  );
  call.succ({ token })

}