import { ActivityStatus } from "../../../constant/ActivityStatus";
import { DbActivityInfo } from "../../../dbItems/activity/DbActivityInfo";
import { BaseRequest, BaseResponse, BaseConf } from "../../Base";

/** 获取活动信息 */
export interface ReqGetActivity extends BaseRequest {
  activityId: string
}

export type ResGetActivity = BaseResponse
  & DbActivityInfo
  & {
    /** 活动状态 */
    status: ActivityStatus;
    /** 活动状态文本 */
    statusText: string;
  }

export const conf: BaseConf = {
  needLogin: false
}