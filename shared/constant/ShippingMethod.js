"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingMethodTypeName = exports.ShippingMethodType = void 0;
/** 发货方式 */
var ShippingMethodType;
(function (ShippingMethodType) {
    /** 无需发货 */
    ShippingMethodType["NO_NEED_SHIP"] = "NO_NEED_SHIP";
    /** 用户填写收货地址 */
    ShippingMethodType["USER_INPUT_ADDRESS"] = "USER_INPUT_ADDRESS";
})(ShippingMethodType = exports.ShippingMethodType || (exports.ShippingMethodType = {}));
exports.ShippingMethodTypeName = {
    NO_NEED_SHIP: '无需发货',
    USER_INPUT_ADDRESS: '用户填写收货地址',
};
