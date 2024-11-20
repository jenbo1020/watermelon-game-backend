import { PrizeField } from '../../../common/PrizeField';
import { AccountType } from '../../../constant/AccountType';
import { EExchangePrizeStatus } from '../../../constant/ExchangeType';
import { DbExchangeConfig } from '../../../dbItems/exchange/DbExchangeConfig';
import { BaseRequest, BaseResponse, BaseConf } from "../../Base";
/** 兑换-获取兑换的商品列表 */
export interface ReqGetPrizeList extends BaseRequest {
  /** 活动id */
  activityId: string;
  /** 帐号类型 */
  accountType: AccountType,

}

export interface ResGetPrizeList extends BaseResponse {
  /** 配置信息 */
  config: Omit<DbExchangeConfig, '_id'>,
  /** 当前用户帐号余额 */
  amount: number,
  /** 当期兑换商品列表 */
  prizeList: (PrizeField &
  {
    /** 兑换奖品ID */
    exchangeId: string,
    /** 奖品剩余库存 */
    prizeStock: number,
    /** 更新库存的时间 */
    updateStockTime?: number,
    /** 上架时间 */
    enableTime?: number,
    /** 兑换状态 */
    exchangePrizeStatus: EExchangePrizeStatus,
    /** 所需积分 */
    needAmount: number;
  })[]
}

export const conf: BaseConf = {
  needLogin: true
}