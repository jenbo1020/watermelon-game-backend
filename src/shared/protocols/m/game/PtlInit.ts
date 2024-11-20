import { BaseRequest, BaseResponse, BaseConf } from "../../Base";
/**
 * 游戏初始化
 */
export interface ReqInit extends BaseRequest {

}

export interface ResInit extends BaseResponse {
  /** 加载图 */
  loading: string;
  /** 活动配置信息 */
  activity: {/** 封面图 */
    cover: string;
    /** 名称、标题 */
    name: string;
    /** 内容 */
    content: string;
  }[]
}

export const conf: BaseConf = {
  needLogin: false
}