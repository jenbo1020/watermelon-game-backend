"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CostTypeName = exports.CostType = void 0;
/** 花费类型 */
var CostType;
(function (CostType) {
    /** 游戏 */
    CostType["GAME"] = "game";
    /** 抽奖 */
    CostType["DRAW"] = "DRAW";
    /** 兑换 */
    CostType["EXCHANGE"] = "EXCHANGE";
    /** 系统赠送 */
    CostType["SYSTEM"] = "SYSTEM";
})(CostType = exports.CostType || (exports.CostType = {}));
exports.CostTypeName = {
    GAME: '游戏',
    DRAW: '抽奖',
    EXCHANGE: '兑换',
    SYSTEM: '系统赠送'
};
