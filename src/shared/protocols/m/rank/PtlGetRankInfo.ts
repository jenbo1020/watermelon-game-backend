import { DbRankPrize } from "../../../dbItems/rank/DbRankPrize";
import { BaseRequest, BaseResponse, BaseConf } from "../../Base";
/** 排行榜信息 */
export interface ReqGetRankInfo extends BaseRequest {
  rankInfoId: string
}

export interface ResGetRankInfo extends BaseResponse {
  data: {
    rankInfo: {
      /** 排行榜id */
      rankInfoId: string;
      /** 开始时间 */
      startDateStr: string;
      /** 结束时间 */
      endDateStr: string;
      /** 状态:未开始、进行中、已结束 */
      statusName: string
    },
    prizeList: DbRankPrize[]
  }
}

export const conf: BaseConf = {
  needLogin: true
}