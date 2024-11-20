import { ETriggerType } from './TaskConfig.';
import { ETaskType } from './TaskType';

interface ITaskDetailBaseInfo {
  // 类型
  // taskType: ETaskState,
  /** 目的地类型 */
  triggerType?: ETriggerType;
  /** 目的地具体ID */
  triggerId?: string;
}

/** 任务对话（dialog） */
interface ITaskDialogInfo extends ITaskDetailBaseInfo {
  // 类型
  taskType: ETaskType.dialog;
  dialogList: {
    targetType?: 'npc' | 'myself' | 'none';
    /** 对话人ID:不填为系统，true为自己，string 为npc */
    targetId?: string;
    /** 对话内容 */
    text: string;
  }[];
}
/** 任务操作（operate） */
interface ITaskOperateInfo extends ITaskDetailBaseInfo {
  // 类型
  taskType: ETaskType.operate;
  /** 操作类型 */
  operateType: string;
  /** 操作数量 */
  operateValue: number;
  /** 操作目标 */
  operateTarget?: string;
}
/** 任务具体操作内容信息 */
export type ITaskContentInfo = ITaskDialogInfo | ITaskOperateInfo;
