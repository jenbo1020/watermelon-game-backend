/** 排行榜类型 */
export enum RankType {
  /** 历史总积分 */
  HISTORY_POINTS = 'HISTORY_POINTS',
  /** 当前积分 */
  CURRENT_POINTS = 'CURRENT_POINTS',
  /** 邀请人数 */
  INVITE_COUNT = 'INVITE_COUNT',
}

export const RankTypeName = {
  /** 历史总积分 */
  HISTORY_POINTS: '积分（历史总积分）',
  /** 当前积分 */
  CURRENT_POINTS: '积分（当前积分)',
  /** 邀请人数 */
  INVITE_COUNT: '邀请人数',
};
