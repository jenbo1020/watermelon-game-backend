import { ApiCall } from "tsrpc";
import { ELoginType } from '../../../shared/constant/TypesInfo';
import { Global } from '../../../model/Global';
import TokenManager from '../../../lib/TokenManager';
import { ReqTgUserLogin, ResTgUserLogin } from "../../../shared/protocols/m/login/PtlTgUserLogin";
import { UserUtil } from "../../../model/UserUtil";
import { AccountType } from "../../../shared/constant/AccountType";
import { CostType } from "../../../shared/constant/CostType";
import { ObjectID } from "bson";
import { createHmac } from 'crypto';
import config from "../../../config";
// import { Tools } from "../../../utils/Tools";

export async function ApiTgUserLogin(call: ApiCall<ReqTgUserLogin, ResTgUserLogin>) {
  const { initData } = call.req;
  const data = processTelegramData(initData, config.bot_token);
  if (data.ok == false) {
    call.error('login error');
    return;
  }

  const tgUser = JSON.parse(data.data.user);
  console.log('tgUser:', tgUser);
  let uid = '' + tgUser.id;
  let username = tgUser.username;
  let languageCode = tgUser['language_code'];
  let nickname = `${tgUser['first_name']} ${tgUser['last_name']}`;
  let avatar = tgUser['photo_url'];
  let userInfo = { uid, nickname, avatar }
  let user = await Global.collection('UserInfo').findOne({ uid });
  const nowDate = new Date().getTime();
  const lastLogin = {
    time: nowDate,
    ip: call.conn.ip
  }
  let id = '';
  let log = { uid: id, ip: call.conn.ip, loginType: ELoginType.TgUser, createDate: nowDate, msg: '用户登录' }
  if (!user) {
    // 注册用户信息
    id = new ObjectID().toHexString()
    const userData = {
      _id: id,
      activityId: "default", updateTime: nowDate,
      ...userInfo,
      username, languageCode,
      lastLogin
    };
    await Global.collection('UserInfo').insertOne(userData);
    log.msg = "注册并登录";

  } else {
    id = user._id;
    await Global.collection('UserInfo').updateOne({ _id: user._id }, { $set: { lastLogin, nickname, avatar, languageCode } })
    userInfo = { uid: user.uid, nickname: user?.nickname ?? "", avatar: user?.avatar ?? "" }
  }
  log.uid = id;
  await Global.collection('UserLoginLog').insertOne(log);
  const token = TokenManager.createToken(id, call.req.device.id, nowDate);
  // 给帐号添加次数
  await UserUtil.addAmount({ uid: id, accountType: AccountType.TIMES, amount: 10, costType: CostType.GAME })


  call.succ({
    token, userInfo
  })
}
function hmac(data: string, key: string | Buffer): Buffer {
  return createHmac('sha256', key).update(data).digest();
}
function processTelegramData(qs: string, token: string): { ok: false } | { ok: true, data: Record<string, string> } {
  const sk = hmac(token, 'WebAppData');
  console.log('sk:', sk.toString('hex'));
  const parts = qs.split('&').map(p => p.split('='));
  //console.log('parts:', parts);
  const hashpart = parts.splice(parts.findIndex(p => p[0] === 'hash'), 1)[0];
  // console.log('hashpart:', hashpart);
  const dcs = parts.sort((a, b) => a[0] > b[0] ? 1 : -1).map(p => decodeURIComponent(p.join('='))).join('\n');
  console.log('dcs:', dcs);
  const hashdcs = hmac(dcs, sk).toString('hex');
  console.log('hashdcs:', hashdcs);
  if (hashdcs !== hashpart[1]) return { ok: false }
  const o: Record<string, string> = {}
  for (const part of parts) {
    o[part[0]] = decodeURIComponent(part[1])
  }
  return { ok: true, data: o }
}