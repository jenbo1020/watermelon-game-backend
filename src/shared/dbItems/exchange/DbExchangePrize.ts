import type { CommonField } from '../../common/CommonField';
import type { PrizeField } from '../../common/PrizeField';
import type { AccountType } from '../../constant/AccountType';
import type { ExchangeEnableTimeType } from '../../constant/ExchangeEnableTimeType';

/** 兑换奖品表 */
export interface DbExchangePrize extends CommonField {
  /** 奖品Id */
  _id: string;
  /** 兑换类型 */
  accountType: AccountType;
  /** 所需积分 */
  needAmount: number;
  /** 排序 */
  sort: number;
  /** 活动id */
  activityId: string;
  /** 奖品配置 */
  prize: PrizeField;
  /** 奖品库存 */
  prizeStock: number;
  /** 已发放总数 */
  sendTotal: number;
  /** 上架时间 */
  enableTime: {
    /** 上架时间类型 */
    enableTimeType: ExchangeEnableTimeType;
    /** 指定时间 */
    specifyTime: number;
  };
  /** 更新库存配置 */
  updateStockConfig: TUpdateStockConfig;
}

export type TUpdateStockConfig = TNotUpdateStock | TCycleUpdateStock;

/** 不定时更新库存 */
export type TNotUpdateStock = {
  /** 是否定时更新库存 */
  isRegularUpdateStock: false;
  /** 每人总共可兑换次数 */
  userLimit: number;
};

/** 定时更新库存 */
export type TCycleUpdateStock = {
  /** 是否定时更新库存 */
  isRegularUpdateStock: true;
  /** 定时更新库存周期（天） */
  updateStockCycle: number;
  /** 每期的库存 */
  cycleStock: number;
  /** 每期每人可兑换次数 */
  cycleUserLimit: number;
};
