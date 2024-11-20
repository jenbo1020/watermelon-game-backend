import type { CommonField } from '../../common/CommonField';
import type { PrizeField } from '../../common/PrizeField';

/** 排行榜奖品 */
export interface DbRankPrize extends CommonField {
  /** 排行奖奖品Id */
  _id: string;
  /** 排行榜id */
  rankInfoId: string;
  /** 最小名次 */
  minRank: number;
  /** 最大名次 */
  maxRank: number;
  /** 奖品详情 */
  prizeInfo: PrizeField
}
