"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ETaskRefreshType = void 0;
/** 刷新频率 */
var ETaskRefreshType;
(function (ETaskRefreshType) {
    // 一直刷新
    ETaskRefreshType["always"] = "always";
    // 每日刷新
    ETaskRefreshType["daily"] = "daily";
    // 仅一次
    ETaskRefreshType["once"] = "once";
    // 每周刷新
    ETaskRefreshType["weekly"] = "weekly";
    // 每月刷新
    ETaskRefreshType["monthly"] = "monthly";
    // 每年刷新
    ETaskRefreshType["yearly"] = "yearly";
})(ETaskRefreshType = exports.ETaskRefreshType || (exports.ETaskRefreshType = {}));
