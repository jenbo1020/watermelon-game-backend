
import { PrizeField } from '../../common/PrizeField';

/** 用户排行积分记录 */
export interface DbRankUserRecord {
  _id: string;
  /** 排行榜id,rankInfo的_id */
  rankInfoId: string;
  /** 用户uid */
  uid: string;
  /** 排行值，如积分值 */
  value: number;
  /** 积分更新时间 */
  updateDate: number;
  /** 排名 */
  rankNo: number;
  /** 奖品 */
  prize?: PrizeField;
  /** 是否领取 */
  received: boolean;
  /** 领取时间 */
  receivedDate?: number;
}
