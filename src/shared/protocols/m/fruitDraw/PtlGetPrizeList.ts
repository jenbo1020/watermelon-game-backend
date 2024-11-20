import { BaseRequest, BaseResponse, BaseConf } from "../../Base";
/** 水果机-奖品列表 */
interface IPrizeItem {
  // 奖品Id
  prizeId: string,
  // 奖品名称
  prizeName: string,
  //  奖品图片
  prizePic: string,
  //   奖品价值，单位元
  prizePrice: string
}
export interface ReqGetPrizeList extends BaseRequest {
  // 活动id
  activityId: string;
}

export interface ResGetPrizeList extends BaseResponse {
  // 基础类奖品
  basicPrize: IPrizeItem[],
  // // 收集类奖品
  // collectPrize: (IPrizeItem & {
  //   // 获得的数据，0指未获得
  //   sum: number
  // })[],
  // // 合成的奖品
  // composePrize: (IPrizeItem & {
  //   // 是否已经合成
  //   isCompose: boolean
  // })
}

export const conf: BaseConf = {
  needLogin: true
}