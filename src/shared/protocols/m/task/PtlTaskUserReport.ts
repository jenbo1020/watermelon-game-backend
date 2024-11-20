
import { ETaskState } from "../../../constant/task/TaskType";
import { BaseRequest, BaseResponse, BaseConf } from "../../Base";
/** 任务-用户上报 */
export interface ReqTaskUserReport extends BaseRequest {
  /** 活动id */
  activityId: string;
  /** 任务id */
  taskId: string;
  /** 上报数据 */
  data: {
    /** 进度序号，从0开始 */
    index: number,
    /** 数量 */
    value: number,
  };
}

export interface ResTaskUserReport extends BaseResponse {
  /** 任务进度 */
  taskProgress: {
    /** 任务状态 */
    taskState: ETaskState,
    /** 进度序号，从0开始 */
    progressIndex: number,
    /** 完成数量 */
    completeValue: number,
  }
}

export const conf: BaseConf = {
  needLogin: true
}