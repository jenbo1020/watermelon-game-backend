import { CommonField } from '../../common/CommonField';
import { PrizeField } from '../../common/PrizeField';

/** 水果机合成奖品配置 */
export interface DbFruitComposePrize extends CommonField {
  _id: string;
  /** 所属活动 */
  activityId: string;
  /** 奖品信息 */
  prize: PrizeField;
  /** 奖品库存 */
  prizeStock: number;
}
