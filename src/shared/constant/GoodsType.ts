/** 商品类型 */
export enum GoodsType {
  /** 淘宝商品 */
  TAOBAO_GOODS = 'TAOBAO_GOODS',
  /** 淘宝红包优惠券 */
  TAOBAO_RED = 'TAOBAO_RED',
  /** 自定义商品 */
  CUSTOM_GOODS = 'CUSTOM_GOODS',
  /** 虚拟商品 */
  VIRTUAL_GOODS = 'VIRTUAL_GOODS',
  /** 实体商品 */
  ENTITY_GOODS = 'ENTITY_GOODS',
  /** 虚拟商品-奖励积分 */
  VIRTUAL_GOODS_POIN = 'VIRTUAL_GOODS_POIN',
}

/** 商品夺宝类型 */
export enum SnatchType {
  /** 钻石夺宝 */
  DIAMOND = 'DIAMOND',
  /** 积分夺宝 */
  POIN = 'POIN',
}

/** 商品上下架状态 */
export enum GoodsStatus {
  ON = 'ON',
  OFF = 'OFF',
  WAIT_END_OFF = 'WAIT_END_OFF',
}

export const GoodsTypeName = {
  /** 淘宝商品 */
  TAOBAO_GOODS: '淘宝商品',
  /** 淘宝红包优惠券 */
  TAOBAO_RED: '淘宝红包优惠券',
  /** 自定义商品 */
  CUSTOM_GOODS: '自定义商品',
};
