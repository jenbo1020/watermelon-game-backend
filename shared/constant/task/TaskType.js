"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ETaskState = exports.TaskTypeList = exports.TaskTypeName = exports.ETaskType = void 0;
/** 任务类型 */
var ETaskType;
(function (ETaskType) {
    /** 对话类型 */
    ETaskType["dialog"] = "dialog";
    /** 操作类型 */
    ETaskType["operate"] = "operate";
})(ETaskType = exports.ETaskType || (exports.ETaskType = {}));
/** 任务类型-名称 */
exports.TaskTypeName = {
    dialog: '对话类型',
    operate: '操作类型',
};
exports.TaskTypeList = [
    {
        taskType: ETaskType.dialog,
        taskTypeName: exports.TaskTypeName.dialog,
    },
    {
        taskType: ETaskType.operate,
        taskTypeName: exports.TaskTypeName.operate,
    },
];
/** 任务状态 */
var ETaskState;
(function (ETaskState) {
    // 未激活
    ETaskState["unEnable"] = "unEnable";
    // 未接取
    ETaskState["unStart"] = "unStart";
    // 任务进行中
    ETaskState["inTask"] = "inTask";
    // 任务已完成等待领取奖励
    ETaskState["receiveAward"] = "receiveAward";
    // 任务已完成
    ETaskState["finished"] = "finished";
})(ETaskState = exports.ETaskState || (exports.ETaskState = {}));
