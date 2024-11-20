import { DbRankPrize } from "../../../dbItems/rank/DbRankPrize";
import { BaseRequest, BaseResponse, BaseConf } from "../../Base";
/** 排行榜奖品列表 */
export interface ReqGetRankPrizeList extends BaseRequest {
  rankInfoId: string
}

export interface ResGetRankPrizeList extends BaseResponse {
  list: DbRankPrize[]
}

export const conf: BaseConf = {
  needLogin: true
}