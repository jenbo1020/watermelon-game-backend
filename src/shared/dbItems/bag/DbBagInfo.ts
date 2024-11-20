import type { PrizeField } from '../../common/PrizeField';
import type { EBagPrizeStatus } from '../../constant/BagPrizeStatus';
import type { EExpressStatus } from '../../constant/ExpressStatus';
import type { UserPrizeSourceType } from '../../constant/UserPrizeSourceType';

/** 用户背包记录表 */
export interface DbBagInfo {
  /** id */
  _id: string;
  /** 活动id */
  activityId: string;
  /** 用户Id */
  uid: string;
  /** 奖品信息 */
  prize: PrizeField;
  /** 奖品来源 */
  source: UserPrizeSourceType;
  /** 获得时间 */
  createDate: number;
  /** 申请状态 */
  status: EBagPrizeStatus | EExpressStatus;
  /** 物流表的id */
  expressId?: string;
}
