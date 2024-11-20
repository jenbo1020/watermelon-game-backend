import type { IDressData } from './DressDeclare';

export enum EUserSex {
  /** 女性 */
  female = 'female',
  /** 男性 */
  male = 'male',
}
/** 用户信息 */
export interface IUserInfo extends IUserInfoBase {
  /** 帐号ID */
  uid: string;
  /**  */
  username: string;
  /**  */
  languageCode: string
}

export interface IUserInfoBase {
  /** 用户性别 */
  sex?: EUserSex;
  /** 用户昵称 */
  nickname?: string;
  /** 用户头像地址 */
  avatar?: string;
  /** 用户装扮 */
  dressData?: IDressData;
}
