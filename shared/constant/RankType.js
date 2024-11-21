"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RankTypeName = exports.RankType = void 0;
/** 排行榜类型 */
var RankType;
(function (RankType) {
    /** 历史总积分 */
    RankType["HISTORY_POINTS"] = "HISTORY_POINTS";
    /** 当前积分 */
    RankType["CURRENT_POINTS"] = "CURRENT_POINTS";
    /** 邀请人数 */
    RankType["INVITE_COUNT"] = "INVITE_COUNT";
})(RankType = exports.RankType || (exports.RankType = {}));
exports.RankTypeName = {
    /** 历史总积分 */
    HISTORY_POINTS: '积分（历史总积分）',
    /** 当前积分 */
    CURRENT_POINTS: '积分（当前积分)',
    /** 邀请人数 */
    INVITE_COUNT: '邀请人数',
};
