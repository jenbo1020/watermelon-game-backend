import type { IUserInfo } from '../../constant/UserInfo';

/** 用户信息表 */
export interface DbUserInfo extends IUserInfo {
  /** id */
  _id: string;
  /** 最后更新时间 */
  updateTime?: number;
  /** 最近登录信息 */
  lastLogin: {
    time: number;
    ip: string;
  }
}
