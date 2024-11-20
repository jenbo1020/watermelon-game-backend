import { BaseRequest, BaseResponse, BaseConf } from "../../Base";
/** 抽奖 */
export interface ReqLottery extends BaseRequest {
  lotteryInfoId?: string
}

export interface ResLottery extends BaseResponse {
  drawNum: number,
  todayDrawNum: number,
  prizeInfo?: {
    prizeId: string,
    prizeName: string,
    prizePic: string,
    prizeType: string,
    prizePrice: number
  }
}

export const conf: BaseConf = {
  needLogin: true
}