import { IRewardItem } from '../../constant/task/TaskConfig.';
import { ETaskRefreshType } from '../../constant/task/TaskRefreshType';

/** 任务信息表 */
export interface DbTaskInfo {
  /** ID 也是任务id */
  _id: string;
  /** 活动id */
  activityId: string;
  /** 任务标题 */
  title: string;
  /** 任务描述 */
  describe: string;
  /** 刷新频率 */
  refreshType: ETaskRefreshType;
  /** 展示时间 */
  showTime: number;
  /** 任务激活时间 */
  enableTime: [number, number];
  /** 是否自动领取奖励,自动交付 */
  autoReceive: boolean;
  /** 任务激活类型,是否自动激活 */
  autoActive: boolean;
  /** icon图标 */
  icon: string;
  /** 排序号，越小越在前 */
  sortIndex: number;
  /** 创建时间 */
  createTime: number;
  /** 更新时间 */
  updateTime?: number;
  /** 完成任务的奖励 */
  reward: IRewardItem[];
  /** 上下架状态 online-上架，offline-下架 */
  status: 'offline' | 'online';
}
