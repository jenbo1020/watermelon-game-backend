"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomGoodsTypeName = exports.CustomGoodsType = void 0;
/** 自定义商品类型 */
var CustomGoodsType;
(function (CustomGoodsType) {
    /** 实物商品 */
    CustomGoodsType["KIND"] = "KIND";
    /** 虚拟商品 */
    CustomGoodsType["VIRTUAL"] = "VIRTUAL";
})(CustomGoodsType = exports.CustomGoodsType || (exports.CustomGoodsType = {}));
exports.CustomGoodsTypeName = {
    KIND: '实物商品',
    VIRTUAL: '虚拟商品',
};
