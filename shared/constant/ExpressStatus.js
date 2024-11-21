"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EExpressStatusName = exports.EExpressStatus = void 0;
/** 物流发货状态 */
var EExpressStatus;
(function (EExpressStatus) {
    // 待发货
    EExpressStatus["wait"] = "wait";
    // 已发货
    EExpressStatus["sent"] = "sent";
    // 不予发货,一般是后台操作不给发货
    EExpressStatus["stop"] = "stop";
})(EExpressStatus = exports.EExpressStatus || (exports.EExpressStatus = {}));
/** 物流发货状态名称 */
exports.EExpressStatusName = {
    // 待发货
    wait: '待发货',
    // 已发货
    sent: '已发货',
    // 不予发货,一般是后台操作不给发货
    stop: '不予发货',
};
