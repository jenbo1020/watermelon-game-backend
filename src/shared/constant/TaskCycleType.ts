/** 任务周期类型 */
export enum TaskCycleType {
  /** 一次性任务 */
  ONCE = 'ONCE',
  /** 每日任务 */
  DAY = 'DAY',
  /** 连续性任务 */
  CONTINUOUSLY = 'CONTINUOUSLY',
}

export const TaskCycleTypeName = {
  /** 一次性任务 */
  ONCE: '一次性任务',
  /** 每日任务 */
  DAY: '每日任务',
  /** 连续性任务 */
  CONTINUOUSLY: '连续性任务',
};
