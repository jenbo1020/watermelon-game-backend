import { BaseRequest, BaseResponse, BaseConf } from "../../Base";
/** 水果机-抽奖 */
export type TPrizeListItem = IBasicPrize | ICollectPrize;
/** 基础类奖品 */
interface IBasicPrize {
  // 奖品分类：basic 基础类奖品，collect 收集类奖品
  moduleType: 'basic',
  // 奖品Id
  prizeId: string,
  // 奖品名称
  prizeName: string,
  // 奖品图
  prizePic: string,
  // 奖品类型
  prizeType: string;
  //  奖品价值，单位元
  prizePrice: string
}
/** 收集类奖品 */
interface ICollectPrize {
  // 奖品分类：basic 基础类奖品，collect 收集类奖品
  moduleType: 'collect',
  // 奖品Id
  prizeId: string,
  // 奖品名称
  prizeName: string,
  //  奖品价值，单位元
  prizePrice: string
}
export interface ReqDraw extends BaseRequest {
}

export interface ResDraw extends BaseResponse {
  // 抽奖次数，包括本次
  drawNum: number,
  // 今日抽奖次数，包括本次
  todayDrawNum: number,
  // 中奖的奖品列表
  prizeList: TPrizeListItem[]
}

export const conf: BaseConf = {
  needLogin: true
}