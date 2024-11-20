import type { CommonField } from '../../common/CommonField';

/** 活动 */
export interface DbActivityInfo extends CommonField {
  _id: string;
  /** 活动名称 */
  activityName: string;
  /** 活动封面 */
  activityCover: string;
  /** 活动说明 */
  activityContent: string;
  /** 活动开始时间 */
  activityDateStartDate: number;
  /** 活动结束时间 */
  activityDateEndDate: number;
  /** 分享图片 */
  shareImage?: string;
  /** 分享标题 */
  shareTitle?: string;
}
