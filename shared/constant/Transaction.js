"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentStatus = exports.PaymentMethod = void 0;
var PaymentMethod;
(function (PaymentMethod) {
    /** 支付宝 */
    PaymentMethod["ALIPAY"] = "ALIPAY";
    /** 微信 */
    PaymentMethod["WXPAY"] = "WXPAY";
})(PaymentMethod = exports.PaymentMethod || (exports.PaymentMethod = {}));
var PaymentStatus;
(function (PaymentStatus) {
    /** 支付成功 */
    PaymentStatus["SUCCESS"] = "SUCCESS";
    /** 支付失败 */
    PaymentStatus["FAIL"] = "FAIL";
    /** 退款 */
    PaymentStatus["REFUND"] = "REFUND";
})(PaymentStatus = exports.PaymentStatus || (exports.PaymentStatus = {}));
