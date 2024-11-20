
import { ITaskContentInfo } from "../../../constant/task/Interface";
import { IRewardItem } from "../../../constant/task/TaskConfig.";
import { ETaskRefreshType } from "../../../constant/task/TaskRefreshType";
import { ETaskState} from "../../../constant/task/TaskType";
import { BaseRequest, BaseResponse, BaseConf } from "../../Base";
/** 获取任务列表 */
export interface ReqGetTaskList extends BaseRequest {
  activityId: string;
}

export interface ResGetTaskList extends BaseResponse {
  list: {
    /** 任务id */
    taskId: string,
    /** 是否自动领取奖励,自动交付 */
    autoReceive: boolean;
    /** 任务激活类型,是否自动激活 */
    autoActive: boolean,
    /** 任务进度 */
    taskProgress: {
      /** 任务状态 */
      taskState: ETaskState,
      /** 进度序号，从0开始 */
      progressIndex: number,
      /** 完成数量 */
      completeValue: number,
    }
    /** 任务基础信息 */
    basicInfo: {
      /** 标题 */
      title: string,
      /** 描述 */
      describe: string,
      /** 任务图标 */
      icon: string,
      /**任务奖励 */
      reward: IRewardItem[],
    },
    detailInfo: ITaskContentInfo[],
    /** 任务生命周期配置 */
    taskLife:{
      /** 任务刷新频率 */
      refreshType: ETaskRefreshType,
      /** 任务生命周期时间（使用时间戳，在生命周期内才会有此任务，不设置则一直存在） */
      /** 循环任务刷新具体时间点会根据lifeTime的开始时间刷新 */
      showTime?: [number, number],
      /** 任务激活时间，周期外是任务未激活状态（使用时间戳，再根据循环类型组合,不设置则声明开始即激活） */
      enableTime?: [number, number],
    }
  }[];
}

export const conf: BaseConf = {
  needLogin: true
}