import { IRewardItem } from "../../../constant/task/TaskConfig.";
import { ETaskState } from "../../../constant/task/TaskType";
import { BaseRequest, BaseResponse, BaseConf } from "../../Base";
/** 任务-用户领取奖励 */
export interface ReqTaskUserReward extends BaseRequest {
  /** 活动id */
  activityId: string;
  /** 任务id */
  taskId: string;
}

export interface ResTaskUserReward extends BaseResponse {
  /** 任务进度 */
  taskProgress: {
    /** 任务状态 */
    taskState: ETaskState,
    /** 进度序号，从0开始 */
    progressIndex: number,
    /** 完成数量 */
    completeValue: number,
  },
  reward: IRewardItem[]

}

export const conf: BaseConf = {
    needLogin:true
}