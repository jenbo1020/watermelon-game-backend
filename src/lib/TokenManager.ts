import config from '../config';
import { Tools } from '../utils/Tools';

export interface ITokenData {
  id: string;
  deviceId: string;
  expiredTime: number;
  time: number
}

export default class TokenManager {
  /**
   * 生成Token
   * @param id 用户id
   * @param deviceId 设备ID
   * @param time 最近登录时间戳
   * @return string token值
   */
  static createToken(id: string, deviceId: string, time: number): string {
    const expiredTime = Date.now() + config.serverConfig.TOKEN_EXPIRED_TIME;
    const token = JSON.stringify({
      id,
      deviceId,
      expiredTime,
      time
    })
    const encToken = Tools.aesEncrept(token);
    return encToken
  }

  /**
   * 获取token数据，不包括是否过期，
   * @param token token值
   * @return ITokenData 数据
   */
  static getTokenData(token: string): ITokenData | null {
    const decToken = Tools.aesDecrept(token);
    if (!decToken) {
      return null;
    }
    const data = JSON.parse(decToken);
    return data;
  }

  /**
   * 验证token是否有效
   * @param token token值
   * @param time 最近登录时间戳
   * @return boolean 是否正常
   */
  static validatorToken(token: string, time: number): boolean {
    const decToken = Tools.aesDecrept(token);
    if (!decToken) {
      return false;
    }
    const data = JSON.parse(decToken) as ITokenData;
    if (Date.now() > data.expiredTime) {
      return false;
    }
    if (time != data.time) {
      return false;
    }
    return true;
  }

  /**
   * 验证token数据是否有效
   * @param data token数据
   * @param deviceId 当前设备ID
   * @param time 最近登录时间戳
   * @returns 
   */
  static checkTokenData(data: ITokenData, deviceId: string, time: number): boolean {
    if (Date.now() > data.expiredTime) {
      console.log("Date.now() > data.expiredTime=>", Date.now(), data.expiredTime)
      return false;
    }
    if (deviceId != data.deviceId) {
      console.log('deviceId != data.deviceId=>', deviceId, data.deviceId)
      return false;
    }
    if (time != data.time) {
      console.log("time != data.time=>", time, data.time)
      return false;
    }
    return true;
  }
}
