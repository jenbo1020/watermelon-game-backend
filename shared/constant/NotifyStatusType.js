"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotifyStatusTypeName = exports.NotifyStatusType = void 0;
/** 通知状态类型 */
var NotifyStatusType;
(function (NotifyStatusType) {
    /** 未开始 */
    NotifyStatusType["NOT_START"] = "NOT_START";
    /** 进行中 */
    NotifyStatusType["PROCESSING"] = "PROCESSING";
    /** 已结束 */
    NotifyStatusType["FINISHED"] = "FINISHED";
})(NotifyStatusType = exports.NotifyStatusType || (exports.NotifyStatusType = {}));
exports.NotifyStatusTypeName = {
    /** 未开始 */
    NOT_START: '未开始',
    /** 进行中 */
    PROCESSING: '进行中',
    /** 已结束 */
    FINISHED: '已结束',
};
