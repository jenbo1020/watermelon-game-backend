/** 任务类型 */
export enum ETaskType {
  /** 对话类型 */
  dialog = 'dialog',
  /** 操作类型 */
  operate = 'operate',
}

/** 任务类型-名称 */
export const TaskTypeName = {
  dialog: '对话类型',
  operate: '操作类型',
};
export interface ITaskTypeItem {
  /** 任务类型 */
  taskType: ETaskType;
  /** 任务类型名称 */
  taskTypeName: string;
}

export const TaskTypeList: ITaskTypeItem[] = [
  {
    taskType: ETaskType.dialog,
    taskTypeName: TaskTypeName.dialog,
  },
  {
    taskType: ETaskType.operate,
    taskTypeName: TaskTypeName.operate,
  },
];

/** 任务状态 */
export enum ETaskState {
  // 未激活
  unEnable = 'unEnable',
  // 未接取
  unStart = 'unStart',
  // 任务进行中
  inTask = 'inTask',
  // 任务已完成等待领取奖励
  receiveAward = 'receiveAward',
  // 任务已完成
  finished = 'finished',
}
