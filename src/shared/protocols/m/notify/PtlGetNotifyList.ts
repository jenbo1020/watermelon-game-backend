import { DbNotify } from "../../../dbItems/notify/DbNotify";
import { BaseRequest, BaseResponse, BaseConf } from "../../Base";

export interface ReqGetNotifyList extends BaseRequest {
    
}

export interface ResGetNotifyList extends BaseResponse {
  list: DbNotify[]; 
}

export const conf: BaseConf = {
  needLogin: true
}