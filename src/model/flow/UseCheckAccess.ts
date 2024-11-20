import type { BaseServer, HttpConnection } from 'tsrpc';
import TokenManager from '../../lib/TokenManager';
import { ERRORINFO, TIMEOUT_ERROR, USER_ERROR } from '../../constant/ErrorInfo';
import { Global } from '../Global';
import '../ExtendApiCall';
import moment from 'moment';

/** 后台管理员token验证 */
export function UseCheckAccess(Server: BaseServer<any>) {
  // console.log('useCheckAccess...');
  Server.flows.preApiCallFlow.push(async (v) => {
    const conn = v.conn as HttpConnection;
    const httpReq = conn.httpReq;
    const httpRes = conn.httpRes;
    if (httpReq.method === 'OPTIONS') {
      httpRes.setHeader('Access-Control-Allow-Origin', '*');
      httpRes.setHeader('Access-Control-Allow-Headers', '*');
      httpRes.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,PATCH,OPTIONS');
      httpRes.end('');
      return undefined;
    }
    v.userInfo = {
      uid: '',
      nickname: '',
      avatar: '',
      token: ''
    };
    if (!v.req.activityId) {
      v.req.activityId = 'default';
    }
    if (v.service.conf!.needLogin) {
      if (!v.req.token) {
        v.error(TIMEOUT_ERROR);
        return;
      }

      let token = v.req.token;
      const data = TokenManager.getTokenData(token);
      console.log('data=>', data);
      if (data === null) {
        v.error(ERRORINFO.TOKEN_ERROR);
        return;
      }
      const userInfo = await Global.collection('UserInfo').findOne({ _id: data.id });

      console.log('userinfo=>', userInfo);
      if (!userInfo) {
        v.error(USER_ERROR);
        return;
      }

      if (!TokenManager.checkTokenData(data, v.req.device.id, userInfo.lastLogin.time)) {
        v.error(ERRORINFO.TOKEN_ERROR);
        return;
      }
      const preTime = moment().utcOffset(8).add(10, 'minutes').valueOf();
      // 还有10分钟token要重新生成
      if (preTime > data.expiredTime) {
        token = TokenManager.createToken(data.id, v.req.device.id, userInfo.lastLogin.time)
      }
      v.userInfo = {
        uid: data.id,
        nickname: userInfo?.nickname ?? '',
        avatar: userInfo?.avatar ?? '',
        token
      };

    }


    return v;
  });
}
