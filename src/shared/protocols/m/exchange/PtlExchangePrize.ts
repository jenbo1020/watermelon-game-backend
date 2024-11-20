import { AccountType } from '../../../constant/AccountType';
import { BaseRequest, BaseResponse, BaseConf } from "../../Base";
/** 兑换-兑换商品 */
export interface ReqExchangePrize extends BaseRequest {
  /** 活动id */
  activityId: string;
  /** 帐号类型 */
  accountType: AccountType;
  /** 兑换的商品序号 */
  exchangeId: string;
}

export interface ResExchangePrize extends BaseResponse {
  /** 当前accountType 类型的帐号余额 */
  amount: number;
}

export const conf: BaseConf = {
  needLogin: true
}