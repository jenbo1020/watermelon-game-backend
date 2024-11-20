/** 活动状态 */
export enum ActivityStatus {
  /** 未开始 */
  NOT_STARTED = 'NOT_STARTED',
  /** 进行中 */
  OPENING = 'OPENING',
  /** 已结束 */
  FINISHED = 'FINISHED',
  /** 已下线 */
  OFFLINE = 'OFFLINE',
}

/** 活动状态文案 */
export const ActivityStatusName = {
  /** 未开始 */
  NOT_STARTED: '未开始',
  /** 进行中 */
  OPENING: '进行中',
  /** 已结束 */
  FINISHED: '已结束',
  /** 已下线 */
  OFFLINE: '已下线',
};
