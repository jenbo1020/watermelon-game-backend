import { EBagPrizeStatus } from '../../../constant/BagPrizeStatus';
import { EExpressStatus } from '../../../constant/ExpressStatus';
import { BaseRequest, BaseResponse, BaseConf } from "../../Base";
/** 用户-获取背包数据 */
export interface ReqGetBagList extends BaseRequest {
  /** 活动id */
  activityId: string,
}

export interface ResGetBagList extends BaseResponse {
  bagList: {
    /** 背包id,申请发货时用到 */
    bagId: string;
    /** 奖品信息 */
    prize: {
      /** 奖品名称 */
      name: string;
      /** 奖品图片 */
      pic: string;
      /** 奖品价值，单位：分 */
      price: number;
    };
    /** 奖品状态： */
    status: EBagPrizeStatus | EExpressStatus;
    /** 获奖时间戳 */
    createDate: number;
    /** 物流信息 */
    expressInfo?: {
      /** 物流编号 */
      expressNumber: string;
      /** 物流名称 */
      expressName: string;
    };
    /** 用户地址id，申请发货就有 */
    addressId?: string
  }[]
}

export const conf: BaseConf = {
  needLogin: true
}