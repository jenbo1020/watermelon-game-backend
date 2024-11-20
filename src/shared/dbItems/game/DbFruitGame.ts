/** 水果机配置 */
export interface DbFruitGame {
  _id: string;
  /** 所属活动 */
  activityId: string;
  /** 水果机图片 */
  images: string[];
  /** 水果机描述 */
  description: string;
  /** 消耗积分 */
  consumeValue: number;
  /** 中奖文案 */
  winText: string;
  /** 未中奖文案 */
  loseText: string;
  /** 水果机类型 */
  type: string;
}
