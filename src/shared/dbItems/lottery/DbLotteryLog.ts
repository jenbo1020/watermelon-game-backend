import { PrizeField } from '../../common/PrizeField';

/** 水果机抽奖记录 */
export interface DbLotteryLog {
  _id: string;
  /** 抽奖配置id */
  lotteryInfoId: string;
  /** 用户Id */
  uid: string;
  /** 第几次抽奖 */
  drawNum: number;
  /** 本次抽奖是否中奖 */
  isWin: boolean;
  /** 中奖奖品 */
  prizeInfo?: PrizeField,
  /** 抽奖时间 */
  lotteryDate: number
}
