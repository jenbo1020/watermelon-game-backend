import { BaseRequest, BaseResponse, BaseConf } from "../../Base";
/** 抽奖列表 */
export interface ReqLotteryList extends BaseRequest {
  current: number;
  pageSize: number;
}

export interface ResLotteryList extends BaseResponse {
  list: {
    lotteryInfoId: string,
    startDateStr: string;
    endDateStr: string;
    statusName: string
  }[]
}

export const conf: BaseConf = {
  needLogin: true
}