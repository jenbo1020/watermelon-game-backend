import type { CommonField } from '../../common/CommonField';

/** 管理员登录错误记录表 */
export interface DbAdminLoginError extends CommonField {
  /** 序号id */
  _id: string;
  /** 用户帐号或者手机号 */
  key: string;
  /** 登录的IP */
  ip: string;
  /** 日期，如：2022-03-10 */
  day: string;
  /** 错误次数 */
  errorSum: number;
  /** 更新时间 */
  updateDate: number;
}
