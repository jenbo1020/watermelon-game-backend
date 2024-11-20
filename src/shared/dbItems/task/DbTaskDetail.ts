import type { CommonField } from '../../common/CommonField';
import { ETriggerType } from '../../constant/task/TaskConfig.';
import { ETaskType } from '../../constant/task/TaskType';

/** 任务详情信息表 */
export interface DbTaskDetail extends CommonField {
  /** id,唯一标识，B端生成 */
  _id: string;
  /** 活动id */
  activityId: string;
  /** 任务id,来源于表 TaskInfo的_id */
  taskId: string;
  /** 任务类型 */
  taskType: ETaskType;
  /** 触发类型 */
  triggerType: ETriggerType;
  /** 触发位置id */
  triggerId: string;
  /** 是否有对话 */
  hasDialog: boolean;
  /** 对话列表 */
  dialogList: {
    /** 对话目标 npc指对应的npc,myself指自己,none指无 */
    targetType: 'npc' | 'myself' | 'none';
    /** targetType=npc时存放npcId */
    targetId?: string;
    /** 对话内容 */
    text: string;
  }[];
  /** 操作信息 */
  operateInfo?: {
    /** 操作类型 */
    operateType: string;
    /** 操作数量 */
    operateValue: number;
    /** 操作目标 */
    operateTarget: string;
  };
  /** 更新时间 */
  updateTime: number;
}
