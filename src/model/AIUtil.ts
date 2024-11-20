import crypto from 'crypto'
import moment from 'moment'
import { customAlphabet, nanoid } from 'nanoid'
import { HttpRequest } from '../lib/HttpRequest';
export interface IAIInfo {
  apiUrl: string,
  appKey: string,
  secret: string
  roleId: string,
  requestId: string,
  timestamp: number,
  sign: string
}
export class CAIUtil {
  static randomId: typeof nanoid = customAlphabet('0123456789abcdefghijklmnopqrstuvwxyz');
  /**
   * 生成签名串
   * @param appKey 
   * @param secret 
   * @returns 
   */
  private static getSign(appKey: string, secret: string) {
    // 16进制随机文本字符串
    let requestId = this.randomId(16);
    let timestamp = moment().valueOf();
    let sign_str = 'app_key=' + appKey + '&request_id=' + requestId + '&timestamp=' + timestamp + '&' + secret
    let hash = crypto.createHash('md5')
    let data = Buffer.from(sign_str, 'utf8')
    hash.update(data)
    let sign = hash.digest('hex').toUpperCase()
    return {
      requestId,
      timestamp,
      sign
    }
  }

  /**
   * 生成session
   * @param info 
   * @returns 
   */
  private static async createSession(info: IAIInfo) {
    let sessionRet = await HttpRequest.customPost(
      info.apiUrl + 'ai/create_session',
      {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      {
        app_key: info.appKey,
        request_id: info.requestId,
        timestamp: info.timestamp,
        sign: info.sign,
        param: {
          role_id: info.roleId
        }
      },
      true,

    );
    return sessionRet
  }

  /**
   * AI问答
   * @param info 
   * @param question 
   * @returns 
   */
  static async getAnswer(info: IAIInfo, question: string) {
    let { requestId, sign, timestamp } = this.getSign(info.appKey, info.secret);
    info.requestId = requestId;
    info.sign = sign;
    info.timestamp = timestamp
    const sessionRet = await this.createSession(info);
    if (!sessionRet || sessionRet.code != 0 || !sessionRet.success) {
      return null;
    }
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    const body = {
      app_key: info.appKey,
      request_id: requestId,
      timestamp: timestamp,
      sign: sign,
      param: {
        session_id: sessionRet.data.session_id,
        voice: 'Xiaozhou_zh-CN_female',
        prompt: question
      }
    };
    let dialogRet = await HttpRequest.customPost(
      info.apiUrl + 'ai/get_answer',
      headers,
      body,
      true
    )
    if (dialogRet.code === 0 && dialogRet.success) {
      let answer = dialogRet.data.answer as string;
      let audioUrl = dialogRet.data.url
      return {
        answer,
        audioUrl
      }
    }
    return null;
  }

  /**
   * 获取AI的开场白内容
   * @param info 
   * @returns 
   */
  static async getPrologue(info: IAIInfo) {
    let { requestId, sign, timestamp } = this.getSign(info.appKey, info.secret);
    info.requestId = requestId;
    info.sign = sign;
    info.timestamp = timestamp;
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    const body = {
      app_key: info.appKey,
      request_id: requestId,
      timestamp: timestamp,
      sign,
      param: {
        role_id: info.roleId
      }
    };
    let dialogRet = await HttpRequest.customPost(
      info.apiUrl + 'ai/get_prologue',
      headers,
      body,
      true
    )
    console.log('getPrologue=>', body, dialogRet);

    if (dialogRet.code === 0 && dialogRet.success) {
      return {
        prologue: dialogRet.data.prologue
      }
    }
    return null;
  }
}