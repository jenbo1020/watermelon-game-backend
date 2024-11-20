import { BaseRequest, BaseResponse, BaseConf } from "../../Base";
/** 水果机-合成奖品 */
export interface ReqCompose extends BaseRequest {
  // 活动id
  activityId: string;
}

export interface ResCompose extends BaseResponse {
    
}

export const conf: BaseConf = {
    needLogin:true
}