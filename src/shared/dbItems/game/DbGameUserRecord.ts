/** 用户游戏记录 */
export interface DbGameUserRecord {
  /** 游戏记录id */
  _id: string;
  /** 用户uid */
  uid: string;
  /** 本次游戏值 */
  value: number;
  /** 游戏开始时间 */
  startDate: number;
  /** 游戏结束时间，默认0未结束 */
  endDate: number;
  /** 游戏时长（秒） */
  gameDuration: number;
  /** 扩展数据：如使用了什么道具，客户端上报 */
  extData?: string
}