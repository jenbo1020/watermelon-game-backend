"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountTypeName = exports.AccountType = void 0;
var AccountType;
(function (AccountType) {
    /** 积分 */
    AccountType["POINT"] = "POINT";
    /** 次数 */
    AccountType["TIMES"] = "TIMES";
    /**  抽奖次数 */
    AccountType["DRAW"] = "DRAW";
    // 抽到的钱
    AccountType["DRAW_MONEY"] = "DRAW_MONEY";
})(AccountType = exports.AccountType || (exports.AccountType = {}));
exports.AccountTypeName = {
    POINT: '积分',
    TIMES: '次数',
    DRAW: '抽奖次数',
    DRAW_MONEY: '抽到的钱'
};
