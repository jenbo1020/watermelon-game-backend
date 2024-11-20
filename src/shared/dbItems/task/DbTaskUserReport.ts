/** 任务-用户上报表 */
export interface DbTaskUserReport {
  /** id */
  _id: string;
  /** 活动id */
  activityId: string;
  /** 用户id */
  uid: string;
  /** 任务id,来源于表 TaskInfo的_id */
  taskId: string;
  /** 上报的数据  */
  data: {
    /** 进度序号，从0开始 */
    index: number;
    /** 数量 */
    value: number;
  };
  /** 上报时间 */
  createTime: number;
}
