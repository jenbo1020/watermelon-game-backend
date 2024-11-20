import { BaseRequest, BaseResponse, BaseConf } from "../../Base";
/**
 * 游戏结束后上报
 */
export interface ReqEnd extends BaseRequest {
  /** 游戏流水id */
  recordId: string,
  /** 游戏值，如积分 */
  value: number,
  /** 扩展数据 */
  extData?: string
}

export interface ResEnd extends BaseResponse {
  /** 总游戏值，如总游戏积分 */
  totalValue: number
}

export const conf: BaseConf = {
  needLogin: true
}