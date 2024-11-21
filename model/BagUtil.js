"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BagUtil = void 0;
const bson_1 = require("bson");
const Global_1 = require("./Global");
const BagPrizeStatus_1 = require("../shared/constant/BagPrizeStatus");
const ExpressStatus_1 = require("../shared/constant/ExpressStatus");
/** 背包处理类 */
class BagUtil {
    /**
     * 添加背包奖品
     * @param activityId 活动id
     * @param uid 用户id
     * @param prize 奖品信息
     * @param source 获得来源
     * @returns
     */
    static async addBagInfo(data) {
        const bagId = new bson_1.ObjectId().toHexString();
        const now = new Date().valueOf();
        const rs = await Global_1.Global.collection('BagInfo').insertOne({
            _id: bagId,
            activityId: data.activityId,
            uid: data.uid,
            prize: data.prize,
            source: data.source,
            createDate: now,
            status: BagPrizeStatus_1.EBagPrizeStatus.unApply
        });
        if (rs && rs.insertedId) {
            return bagId;
        }
        return null;
    }
    /**
     * 设置背包的物流id
     * @param bagId 背包id
     * @param expressId 物流id
     * @returns
     */
    static async setBagExpress(bagId, expressId) {
        const rs = await Global_1.Global.collection('BagInfo').updateOne({ _id: bagId }, { $set: { status: ExpressStatus_1.EExpressStatus.wait, expressId } });
        if (rs && rs.modifiedCount > 0) {
            return true;
        }
        return false;
    }
}
exports.BagUtil = BagUtil;
