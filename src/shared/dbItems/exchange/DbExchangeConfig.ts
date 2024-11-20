import type { CommonField } from '../../common/CommonField';

/** 积分兑换配置 */
export interface DbExchangeConfig extends CommonField {
  _id: string;
  /** 积分名称 */
  pointName: string;
  /** 积分图标 */
  pointImage: string;
  /** 积分规则 */
  pointExchangeValue: number;
  /** 规则 */
  rule: string;
}
