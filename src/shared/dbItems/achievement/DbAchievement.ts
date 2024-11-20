import type { CommonField } from '../../common/CommonField';
import type { GoodsType } from '../../constant/GoodsType';
import type { ShippingMethodType } from '../../constant/ShippingMethod';
import type { PrizeType } from '../../constant/PrizeType';

/** 成就配置 */
export type DbAchievement = CommonField & {
  _id: string;
  /** 成就名称 */
  achievementName: string;
  /** 成就图片 */
  achievementPicture: string;
  /** 分享次数 */
  shareTime: number;
  /** 邀请人数 */
  inviteUserCount: number;
  /** 备注 */
  remark: string;
} & (
    | {
      /** 奖品类型 */
      prizeType: PrizeType;
      /** 奖励数量 */
      rewardCount: number;
    }
    | {
      /** 淘宝商品id */
      tbGoodsId: string;
      /** 淘宝商品skuId */
      tbGoodsSkuId?: string;
      /** 商品有效期开始时间 */
      goodsExpireStartDate?: number;
      /** 商品有效期结束时间 */
      goodsExpireEndDate?: number;
      /** 商品类型 */
      goodsType: GoodsType;
      /** 自定义商品类型 */
      customGoodsType?: ShippingMethodType;
      /** 奖品类型 */
      prizeType: PrizeType.POINT;
      /** 奖励数量 */
      rewardCount: number;
      /** 奖品名称 */
      prizeName: string;
      /** 奖品图片 */
      prizePicture: string;
      /** 奖品价格 */
      prizePrice: number;
      /** 奖品类型 */
      prizeCategory?: string;
      /** 奖品等级 */
      prizeLevel?: string;
    }
  );
