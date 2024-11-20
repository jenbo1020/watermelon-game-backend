import { AccountType } from '../../../constant/AccountType';
import { DbExchangeConfig } from '../../../dbItems/exchange/DbExchangeConfig';
import { BaseRequest, BaseResponse, BaseConf } from "../../Base";
/** 兑换-获取兑换配置信息 */
export interface ReqGetConfig extends BaseRequest {
  /** 活动id */
  activityId: string;
  /** 帐号类型 */
  accountType: AccountType,
}

export interface ResGetConfig extends BaseResponse {
  /** 配置信息 */
  config: Omit<DbExchangeConfig, '_id'>,
  /** 当前用户帐号余额 */
  amount: number,
}

export const conf: BaseConf = {
  needLogin: true
}