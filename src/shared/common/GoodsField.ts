import type { ShippingMethodType } from '../constant/ShippingMethod';
import type { GoodsType } from '../constant/GoodsType';

/** 商品公用字段 */
export interface GoodsField {
  /** 淘宝商品id */
  tbGoodsId: string;
  /** 淘宝商品skuId */
  tbGoodsSkuId?: string;
  /** 商品名称 */
  goodsName: string;
  /** 商品图片 */
  goodsPicture: string;
  /** 商品价格 */
  goodsPrice: number;
  /** 商品有效期开始时间 */
  goodsExpireStartDate?: number;
  /** 商品有效期结束时间 */
  goodsExpireEndDate?: number;
  /** 商品类型 */
  goodsType: GoodsType;
  /** 发货方式 */
  shippingMethod: ShippingMethodType;
}
