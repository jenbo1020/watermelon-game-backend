"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCycleTypeName = exports.TaskCycleType = void 0;
/** 任务周期类型 */
var TaskCycleType;
(function (TaskCycleType) {
    /** 一次性任务 */
    TaskCycleType["ONCE"] = "ONCE";
    /** 每日任务 */
    TaskCycleType["DAY"] = "DAY";
    /** 连续性任务 */
    TaskCycleType["CONTINUOUSLY"] = "CONTINUOUSLY";
})(TaskCycleType = exports.TaskCycleType || (exports.TaskCycleType = {}));
exports.TaskCycleTypeName = {
    /** 一次性任务 */
    ONCE: '一次性任务',
    /** 每日任务 */
    DAY: '每日任务',
    /** 连续性任务 */
    CONTINUOUSLY: '连续性任务',
};
