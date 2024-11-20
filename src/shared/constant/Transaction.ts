export enum PaymentMethod {
  /** 支付宝 */
  ALIPAY = 'ALIPAY',
  /** 微信 */
  WXPAY = 'WXPAY',
}

export enum PaymentStatus {
  /** 支付成功 */
  SUCCESS = 'SUCCESS',
  /** 支付失败 */
  FAIL = 'FAIL',
  /** 退款 */
  REFUND = 'REFUND',
}
