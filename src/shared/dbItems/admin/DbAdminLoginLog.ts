import type { CommonField } from '../../common/CommonField';
import type { EAdminLoginType } from '../../common/TypesInfo';

/** 用户登录日志表 */
export interface DbAdminLoginLog extends CommonField {
  /** 序号id */
  _id: string;
  /** 用户uid */
  uid: string;
  /** 登录的IP */
  ip: string;
  /** 登录类型 */
  loginType: EAdminLoginType;
  /** 登录时间 */
  createDate: number;
  /** 成功或错误的信息 */
  msg: string;
}
