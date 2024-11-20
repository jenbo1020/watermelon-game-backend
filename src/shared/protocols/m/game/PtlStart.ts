import { BaseRequest, BaseResponse, BaseConf } from "../../Base";

/** 开始游戏 */
export interface ReqStart extends BaseRequest {

}

export interface ResStart extends BaseResponse {
  /** 记录id */
  recordId: string
}

export const conf: BaseConf = {
  needLogin: true
}