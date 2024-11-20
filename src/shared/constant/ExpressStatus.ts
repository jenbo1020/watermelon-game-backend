/** 物流发货状态 */
export enum EExpressStatus {
  // 待发货
  wait = 'wait',
  // 已发货
  sent = 'sent',
  // 不予发货,一般是后台操作不给发货
  stop = 'stop',
}

/** 物流发货状态名称 */
export const EExpressStatusName = {
  // 待发货
  wait: '待发货',
  // 已发货
  sent: '已发货',
  // 不予发货,一般是后台操作不给发货
  stop: '不予发货',
};
