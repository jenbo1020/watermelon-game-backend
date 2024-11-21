"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExchangeEnableTimeTypeName = exports.ExchangeEnableTimeType = void 0;
/** 指定时间类型 */
var ExchangeEnableTimeType;
(function (ExchangeEnableTimeType) {
    /** 立即 */
    ExchangeEnableTimeType["NOW"] = "NOW";
    /** 指定时间 */
    ExchangeEnableTimeType["SPECIFY_TIME"] = "SPECIFY_TIME";
})(ExchangeEnableTimeType = exports.ExchangeEnableTimeType || (exports.ExchangeEnableTimeType = {}));
exports.ExchangeEnableTimeTypeName = {
    /** 立即 */
    NOW: '直接上架',
    /** 指定时间 */
    SPECIFY_TIME: '指定时间',
};
