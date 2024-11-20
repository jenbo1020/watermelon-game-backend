/** 用户奖品来源类型 */
export enum UserPrizeSourceType {
  /** 抽奖 */
  PRIZE = 'PRIZE',
  /** 任务 */
  TASK = 'TASK',
  /** 排行榜 */
  RANK = 'TASK',
  /** 积分兑换 */
  POINT_EXCHANGE = 'POINT_EXCHANGE',
}

export const UserPrizeSourceTypeName = {
  /** 抽奖 */
  PRIZE: '抽奖',
  /** 任务 */
  TASK: '任务',
  /** 排行榜 */
  RANK: '排行榜',
  /** 积分兑换 */
  POINT_EXCHANGE: '积分兑换',
};
