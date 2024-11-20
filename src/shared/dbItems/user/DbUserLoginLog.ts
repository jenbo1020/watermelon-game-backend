import type { ELoginType } from '../../constant/TypesInfo';

/** 用户登录日志表 */
export interface DbUserLoginLog {
  /** 序号id */
  _id: string;
  /** 用户uid */
  uid: string;
  /** 登录的IP */
  ip: string;
  /** 登录类型 */
  loginType: ELoginType;
  /** 登录时间 */
  createDate: number;
  /** 成功或错误的信息 */
  msg: string;
}
