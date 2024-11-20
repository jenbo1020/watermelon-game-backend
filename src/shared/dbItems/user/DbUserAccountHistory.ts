import type { AccountType } from '../../constant/AccountType';
import type { CostType } from '../../constant/CostType';

/** 账号日志 */
export interface DbUserAccountHistory {
  _id: string;
  /** 用户id */
  uid: string;
  /** 账户类型 */
  accountType: AccountType;
  /** 变动前值 */
  beforeAmount: number;
  /** 变动后值 */
  afterAmount: number;
  /** 变动值 */
  amount: number;
  /** 变动类型 */
  costType: CostType;
  /** 创建时间 */
  createTime: number;
  /** 备注 */
  tips?: string;
}
