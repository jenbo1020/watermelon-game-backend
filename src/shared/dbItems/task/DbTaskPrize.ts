import type { CommonField } from '../../common/CommonField';
import type { PrizeField } from '../../common/PrizeField';

/** 任务奖品 */
export interface DbTaskPrize extends CommonField, PrizeField {
  /** 奖品Id */
  _id: string;
  /** 任务配置id */
  taskInfoId: string;
  /** 第x天 */
  day?: number;
}
