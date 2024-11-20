import { ETaskState } from "../../../constant/task/TaskType";
import { BaseRequest, BaseResponse, BaseConf } from "../../Base";
/** 任务-用户接收任务 */
export interface ReqTaskUserReceive extends BaseRequest {
  activityId: string;
  taskId: string;
}

export interface ResTaskUserReceive extends BaseResponse {
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
    needLogin:true
}