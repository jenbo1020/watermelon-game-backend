import type { CommonField } from '../../common/CommonField';
import type { DrawChanceType } from '../../constant/DrawChanceType';
import type { DrawConsumeType } from '../../constant/DrawConsumeType';

/** 抽奖配置 */
export interface DbLotteryInfo extends CommonField {
  _id: string;
  /** 抽奖类型 */
  type: string;
  /** 开始时间 */
  startDate: number;
  /** 结束时间 */
  endDate: number;
  /** 消耗类型 */
  consumeType: DrawConsumeType;
  /** 消耗值 */
  consumeValue: number;
  /** 抽奖概率类型 */
  chanceType: DrawChanceType;

}
