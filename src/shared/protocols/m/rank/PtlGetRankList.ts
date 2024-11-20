import { BaseConf, BaseRequest, BaseResponse } from "../../Base";
/** 排行榜信息 */
export interface ReqGetRankList extends BaseRequest {
  /** 当前页 */
  current: number;
  /** 每页记录数 */
  pageSize: number
}

export interface ResGetRankList extends BaseResponse {
  list: {
    /** 排行榜id */
    rankInfoId: string,
    /** 开始时间 */
    startDateStr: string;
    /** 结束时间 */
    endDateStr: string,
    /** 状态:未开始、进行中、已结束 */
    statusName: string
  }[];
}

export const conf: BaseConf = {
  needLogin: true
}