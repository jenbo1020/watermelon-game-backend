"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EDressPartName = exports.EDressSex = void 0;
/** 性别区分 */
var EDressSex;
(function (EDressSex) {
    /** 女性 */
    EDressSex["female"] = "female";
    /** 男性 */
    EDressSex["male"] = "male";
})(EDressSex = exports.EDressSex || (exports.EDressSex = {}));
/**
 * 装扮部位名称
 * @param hair:头发
 * @param clothesUp:上衣
 * @param clothesDown:裤子
 * @param shoes:鞋子
 * @param head:头部装饰
 * @param body:身体装饰
 * @param foot:脚部装饰
 * @param effect_head:头部特效
 * @param effect_foot:脚下特效
 *
 */
var EDressPartName;
(function (EDressPartName) {
    // 换装部件
    EDressPartName["hair"] = "hair";
    EDressPartName["clothesUp"] = "clothesUp";
    EDressPartName["clothesDown"] = "clothesDown";
    EDressPartName["shoes"] = "shoes";
    // 装饰部件
    EDressPartName["head"] = "head";
    EDressPartName["body"] = "body";
    EDressPartName["foot"] = "foot";
    // 特效
    EDressPartName["effect_head"] = "effect_head";
    EDressPartName["effect_foot"] = "effect_foot";
})(EDressPartName = exports.EDressPartName || (exports.EDressPartName = {}));
