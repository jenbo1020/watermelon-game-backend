import { AccountType } from '../../../constant/AccountType';
import { BaseRequest, BaseResponse, BaseConf, BasePageRequest, BasePageResponse } from "../../Base";
/** 用户-获取用户帐号流水 */
export interface ReqGetUserAccountHistory extends BaseRequest, BasePageRequest {
  /** 活动id */
  activityId: string;
  /** 帐号类型 */
  accountType: AccountType;
}

export interface ResGetUserAccountHistory extends BaseResponse, BasePageResponse {
  list: {
    /** 变动值 */
    amount: number;
    /** 创建时间 */
    createTime: number;
    /** 备注 */
    tips?: string
  }[]
}

export const conf: BaseConf = {
  needLogin: true
}