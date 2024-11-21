"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPrizeSourceTypeName = exports.UserPrizeSourceType = void 0;
/** 用户奖品来源类型 */
var UserPrizeSourceType;
(function (UserPrizeSourceType) {
    /** 抽奖 */
    UserPrizeSourceType["PRIZE"] = "PRIZE";
    /** 任务 */
    UserPrizeSourceType["TASK"] = "TASK";
    /** 排行榜 */
    UserPrizeSourceType["RANK"] = "TASK";
    /** 积分兑换 */
    UserPrizeSourceType["POINT_EXCHANGE"] = "POINT_EXCHANGE";
})(UserPrizeSourceType = exports.UserPrizeSourceType || (exports.UserPrizeSourceType = {}));
exports.UserPrizeSourceTypeName = {
    /** 抽奖 */
    PRIZE: '抽奖',
    /** 任务 */
    TASK: '任务',
    /** 排行榜 */
    RANK: '排行榜',
    /** 积分兑换 */
    POINT_EXCHANGE: '积分兑换',
};
