"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawConsumeTypeName = exports.DrawConsumeType = void 0;
/** 抽奖消耗类型 */
var DrawConsumeType;
(function (DrawConsumeType) {
    /** 积分 */
    DrawConsumeType["POINT"] = "POINT,";
    /** 游戏次数 */
    DrawConsumeType["TIMES"] = "TIMES";
})(DrawConsumeType = exports.DrawConsumeType || (exports.DrawConsumeType = {}));
exports.DrawConsumeTypeName = {
    /** 积分 */
    POINT: '积分',
    /** 游戏次数 */
    TIMES: '次数',
};
