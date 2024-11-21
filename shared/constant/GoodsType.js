"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoodsTypeName = exports.GoodsStatus = exports.SnatchType = exports.GoodsType = void 0;
/** 商品类型 */
var GoodsType;
(function (GoodsType) {
    /** 淘宝商品 */
    GoodsType["TAOBAO_GOODS"] = "TAOBAO_GOODS";
    /** 淘宝红包优惠券 */
    GoodsType["TAOBAO_RED"] = "TAOBAO_RED";
    /** 自定义商品 */
    GoodsType["CUSTOM_GOODS"] = "CUSTOM_GOODS";
    /** 虚拟商品 */
    GoodsType["VIRTUAL_GOODS"] = "VIRTUAL_GOODS";
    /** 实体商品 */
    GoodsType["ENTITY_GOODS"] = "ENTITY_GOODS";
    /** 虚拟商品-奖励积分 */
    GoodsType["VIRTUAL_GOODS_POIN"] = "VIRTUAL_GOODS_POIN";
})(GoodsType = exports.GoodsType || (exports.GoodsType = {}));
/** 商品夺宝类型 */
var SnatchType;
(function (SnatchType) {
    /** 钻石夺宝 */
    SnatchType["DIAMOND"] = "DIAMOND";
    /** 积分夺宝 */
    SnatchType["POIN"] = "POIN";
})(SnatchType = exports.SnatchType || (exports.SnatchType = {}));
/** 商品上下架状态 */
var GoodsStatus;
(function (GoodsStatus) {
    GoodsStatus["ON"] = "ON";
    GoodsStatus["OFF"] = "OFF";
    GoodsStatus["WAIT_END_OFF"] = "WAIT_END_OFF";
})(GoodsStatus = exports.GoodsStatus || (exports.GoodsStatus = {}));
exports.GoodsTypeName = {
    /** 淘宝商品 */
    TAOBAO_GOODS: '淘宝商品',
    /** 淘宝红包优惠券 */
    TAOBAO_RED: '淘宝红包优惠券',
    /** 自定义商品 */
    CUSTOM_GOODS: '自定义商品',
};
