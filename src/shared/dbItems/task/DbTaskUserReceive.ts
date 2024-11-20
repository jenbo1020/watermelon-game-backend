/** 任务-用户接受任务表 */
export interface DbTaskUserReceive {
  /** id */
  _id: string;
  /** 活动id */
  activityId: string;
  /** 用户id */
  uid: string;
  /** 任务id,来源于表 TaskInfo的_id */
  taskId: string;
  /** 接受时间 */
  createTime: number;
}
