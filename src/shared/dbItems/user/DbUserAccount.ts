import type { AccountType } from '../../constant/AccountType';

/** 用户账号 */
export interface DbUserAccount {
  _id: string;
  /** 用户id */
  uid: string;
  /** 账户类型 */
  accountType: AccountType;
  /** 帐户数量 */
  amount: number;
  /** 创建时间 */
  createTime: number;
  /** 更新时间 */
  updateTime?: number;
}
