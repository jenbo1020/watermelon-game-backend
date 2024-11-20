import type { CommonField } from '../../common/CommonField';
import type { RankType } from '../../constant/RankType';
import type { DbRankPrize } from './DbRankPrize';

/** 排行榜配置 */
export interface DbRankInfo extends CommonField {
  _id: string;
  /** 开始时间 */
  startDate: number;
  /** 结束时间 */
  endDate: number;
  /** 排行榜类型 */
  rankType: RankType;
  /** 奖品配置 */
  prizeList: DbRankPrize;
}
