import { CommonField } from '../../common/CommonField';
import { PrizeField } from '../../common/PrizeField';

/** 水果机配置 */
export interface DbFruitDrawPrize extends CommonField {
  _id: string;
  /** 所属活动 */
  activityId: string;
  /** 水果机奖品模块 basic-基础类奖励,collect-收集类奖励 */
  moduleType: 'basic' | 'collect';
  /** 奖品层级 */
  level: number;
  /** 奖品层级名称 */
  levelName: string;
  /** 奖品信息 */
  prize: PrizeField;
  /** 奖品库存 */
  prizeStock: number;
  /** 用户可中奖的次数，-1不限制 */
  userLimit: number;
  /** 中奖概率,百分之 */
  drawChance: number;
}
