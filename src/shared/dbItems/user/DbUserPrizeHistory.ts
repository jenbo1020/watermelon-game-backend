import type { PrizeField } from '../../common/PrizeField';
import type { UserPrizeSourceType } from '../../constant/UserPrizeSourceType';

/** 用户中奖记录 */
export interface DbUserPrizeHistory {
  _id: string;
  /** 活动Id */
  activityId: string;
  /** 用户中奖Id */
  userPrizeId: string;
  /** 奖品来源 */
  source: UserPrizeSourceType;
  /** 用户id */
  uid: string;
  /** 奖品信息 */
  prize: PrizeField;
  /** 获得时间 */
  createDate: number;
}
