/** 性别区分 */
export enum EDressSex {
  /** 女性 */
  female = 'female',
  /** 男性 */
  male = 'male',
}

/**
 * 装扮部位名称
 * @param hair:头发
 * @param clothesUp:上衣
 * @param clothesDown:裤子
 * @param shoes:鞋子
 * @param head:头部装饰
 * @param body:身体装饰
 * @param foot:脚部装饰
 * @param effect_head:头部特效
 * @param effect_foot:脚下特效
 *
 */
export enum EDressPartName {
  // 换装部件
  hair = 'hair',
  clothesUp = 'clothesUp',
  clothesDown = 'clothesDown',
  shoes = 'shoes',
  // 装饰部件
  head = 'head',
  body = 'body',
  foot = 'foot',
  // 特效
  effect_head = 'effect_head',
  effect_foot = 'effect_foot',
}
/** 装扮信息结构 */
export interface IDressData {
  /** 性别 */
  sex: EDressSex;
  /** 换装数据 */
  parts: { [x: string]: number }; // eslint-disable-line
}
