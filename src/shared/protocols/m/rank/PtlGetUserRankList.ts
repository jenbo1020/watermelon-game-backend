import { PrizeField } from "../../../common/PrizeField";
import { BaseRequest, BaseResponse, BaseConf } from "../../Base";
/** 获取游戏排行 */
export interface ReqGetUserRankList extends BaseRequest {
  rankInfoId?: string,
  current: number,
  pageSize: number
}

export interface ResGetUserRankList extends BaseResponse {
  list: {
    uid: string,
    nickname: string,
    avatar: string,
    rankNo: number,
    value: number,
    prize?: PrizeField,
    received: boolean,
    receivedDate?: number
  }[]
}

export const conf: BaseConf = {
  needLogin: true
}