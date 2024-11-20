
import type { PrizeType } from '../constant/PrizeType';

/** 奖品公用字段 */
export interface PrizeField {
  /** 奖品类型 */
  prizeType: PrizeType;
  /** 奖励数量 */
  rewardCount: number;
  /** 奖品名称 */
  prizeName: string;
  /** 奖品图片 */
  prizePicture: string;
  /** 奖品价格，-1为无价值 */
  prizePrice: number;
}