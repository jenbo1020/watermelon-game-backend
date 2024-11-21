"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotifyShowFrequencyTypeName = exports.NotifyShowFrequencyType = void 0;
/** 通知显示频率类型 */
var NotifyShowFrequencyType;
(function (NotifyShowFrequencyType) {
    /** 活动期间仅显示一次 */
    NotifyShowFrequencyType["ONLY_ONE"] = "ONLY_ONE";
    /** 活动期间每天显示一次 */
    NotifyShowFrequencyType["EVERY_DAY"] = "EVERY_DAY";
    /** 活动期间每次进入游戏都显示 */
    NotifyShowFrequencyType["EVERY_TIME"] = "EVERY_TIME";
})(NotifyShowFrequencyType = exports.NotifyShowFrequencyType || (exports.NotifyShowFrequencyType = {}));
exports.NotifyShowFrequencyTypeName = {
    /** 活动期间仅显示一次 */
    ONLY_ONE: '活动期间仅显示一次',
    /** 活动期间每天显示一次 */
    EVERY_DAY: '活动期间每天显示一次',
    /** 活动期间每次进入游戏都显示 */
    EVERY_TIME: '活动期间每次进入游戏都显示',
};
