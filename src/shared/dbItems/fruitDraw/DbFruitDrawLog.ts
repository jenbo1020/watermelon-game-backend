import { CommonField } from '../../common/CommonField';

/** 水果机抽奖记录 */
export interface DbFruitDrawLog extends CommonField {
  _id: string;
  /** 用户openId */
  userOpenId: string;
  /** 第几次抽奖 */
  drawNum: number;
  /** 本次抽奖是否中奖 */
  isDraw: boolean;
}
