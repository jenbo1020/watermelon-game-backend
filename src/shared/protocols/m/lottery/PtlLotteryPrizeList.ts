import { PrizeField } from "../../../common/PrizeField";
import { BaseRequest, BaseResponse, BaseConf } from "../../Base";
/** 抽奖的奖品信息 */
export interface ReqLotteryPrizeList extends BaseRequest {
  lotteryInfoId: string;
}

export interface ResLotteryPrizeList extends BaseResponse {
  list: PrizeField[]
}

export const conf: BaseConf = {
  needLogin: true
}