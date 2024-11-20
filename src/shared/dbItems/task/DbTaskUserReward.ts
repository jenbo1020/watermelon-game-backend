import { IRewardItem } from '../../constant/task/TaskConfig.';

/** 任务-用户奖励表 */
export interface DbTaskUserReward {
  /** id */
  _id: string;
  /** 活动id */
  activityId: string;
  /** 用户id */
  uid: string;
  /** 任务id,来源于表 TaskInfo的_id */
  taskId: string;
  /** 任务详情id,来源表 TaskDetail的_id */
  taskDetailId: string;
  /** 完成任务的奖励 */
  reward: IRewardItem[];
  /** 领取时间 */
  createTime: number;
}
