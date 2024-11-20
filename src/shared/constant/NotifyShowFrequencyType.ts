/** 通知显示频率类型 */
export enum NotifyShowFrequencyType {
  /** 活动期间仅显示一次 */
  ONLY_ONE = 'ONLY_ONE',
  /** 活动期间每天显示一次 */
  EVERY_DAY = 'EVERY_DAY',
  /** 活动期间每次进入游戏都显示 */
  EVERY_TIME = 'EVERY_TIME',
}

export const NotifyShowFrequencyTypeName = {
  /** 活动期间仅显示一次 */
  ONLY_ONE: '活动期间仅显示一次',
  /** 活动期间每天显示一次 */
  EVERY_DAY: '活动期间每天显示一次',
  /** 活动期间每次进入游戏都显示 */
  EVERY_TIME: '活动期间每次进入游戏都显示',
};
