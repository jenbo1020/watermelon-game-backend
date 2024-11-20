/** 发货方式 */
export enum ShippingMethodType {
  /** 无需发货 */
  NO_NEED_SHIP = 'NO_NEED_SHIP',
  /** 用户填写收货地址 */
  USER_INPUT_ADDRESS = 'USER_INPUT_ADDRESS',
}

export const ShippingMethodTypeName = {
  NO_NEED_SHIP: '无需发货',
  USER_INPUT_ADDRESS: '用户填写收货地址',
};
