import type { PrizeField } from '../../common/PrizeField';

/** 用户兑换记录表 */
export interface DbExchangeLog {
  /** id */
  _id: string;
  /** 活动id */
  activityId: string;
  /** 用户Id */
  uid: string;
  /** 兑换奖品表的id */
  exchangeId: string;
  /** 奖品信息 */
  prize: PrizeField;
  /** 兑换时间 */
  createDate: number;
}
