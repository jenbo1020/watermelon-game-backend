"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityStatusName = exports.ActivityStatus = void 0;
/** 活动状态 */
var ActivityStatus;
(function (ActivityStatus) {
    /** 未开始 */
    ActivityStatus["NOT_STARTED"] = "NOT_STARTED";
    /** 进行中 */
    ActivityStatus["OPENING"] = "OPENING";
    /** 已结束 */
    ActivityStatus["FINISHED"] = "FINISHED";
    /** 已下线 */
    ActivityStatus["OFFLINE"] = "OFFLINE";
})(ActivityStatus = exports.ActivityStatus || (exports.ActivityStatus = {}));
/** 活动状态文案 */
exports.ActivityStatusName = {
    /** 未开始 */
    NOT_STARTED: '未开始',
    /** 进行中 */
    OPENING: '进行中',
    /** 已结束 */
    FINISHED: '已结束',
    /** 已下线 */
    OFFLINE: '已下线',
};
