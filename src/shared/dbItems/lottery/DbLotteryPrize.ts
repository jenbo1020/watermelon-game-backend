import type { CommonField } from '../../common/CommonField';
import type { PrizeField } from '../../common/PrizeField';

/** 抽奖奖品 */
export interface DbLotteryPrize extends CommonField {
  /** 奖品Id */
  _id: string;
  /** 抽奖配置id */
  lotteryInfoId: string;
  /** 兜底商品 */
  coverPrize: boolean;
  /** 中奖 概率/权重 */
  chance: number;
  /** 发放限制 */
  sendLimit: {
    /** 多少天 */
    days: number;
    /** 天发放的数量，-1不限制*/
    dayLimit: number;
    /** 每个用户限制数量 ，-1不限制 */
    userLimit: number;
  },
  /** 总库存 */
  stock: number;
  /** 已发放数 */
  sent: number;
  /** 奖品信息 */
  prizeInfo: PrizeField;
}
