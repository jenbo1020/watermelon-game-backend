/** 兑换商品的状态 */
export enum EExchangePrizeStatus {
  /** default-默认 */
  default = 'default',
  /**  outOfStock-库存不足 */
  outOfStock = 'outOfStock',
  /** exchanged-已兑换 */
  exchanged = 'exchanged',
}

/** 兑换的奖品 */
export interface IExchangePrizeItem {
  /** 商品序号 */
  exchangeId: string;
  /** 奖品ID */
  prizeId: string;
  /** 奖品图片 */
  prizePic: string;
  /** 奖品名称 */
  prizeName: string;
  /** 需要的积分数量 */
  needPoints: number;
  /** 状态 */
  status: EExchangePrizeStatus;
  /** 剩余库存 */
  stock: number;
}

/** 兑换奖品信息 */
export interface IExchangePrizeInfo {
  /** 奖品id，奖品信息表的ID */
  prizeId: string;
  /** 奖品编号，可以是SKU码，自定义的编号等*/
  prizeNo: string;
  /** 奖品类型 tbGoods:淘宝商品；tbCoupon:淘宝优惠券； custom:自定义*/
  prizeType: 'tbGoods' | 'tbCoupon' | 'custom';
  /** 名称 */
  name: string;
  /** 图片 */
  pic: string;
  /** 价值 */
  price: number;
  /** 数量 */
  value: number;
  /** 每个用户兑换限制，-1不限 */
  userLimit: number;
  /** 当前库存 */
  stock: number;
  /** 兑换需要的币 */
  needPoints: number;
  /** 已被兑换的次数 */
  exchangedSum: number;
}
