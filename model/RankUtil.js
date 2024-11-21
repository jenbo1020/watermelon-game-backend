"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RankUtil = void 0;
const bson_1 = require("bson");
const Global_1 = require("./Global");
class RankUtil {
    /** 更新用户排行榜分数，包括增加、减少 */
    static async updateUserRecord(data) {
        const { rankInfoId, uid, value } = data;
        const now = new Date().getTime();
        const info = await Global_1.Global.collection('RankUserRecord').findOne({ rankInfoId, uid });
        if (!info) {
            const id = new bson_1.ObjectId().toHexString();
            await Global_1.Global.collection('RankUserRecord').insertOne({
                _id: id, rankNo: 0,
                rankInfoId, uid, value, updateDate: now, received: false
            });
        }
        else {
            await Global_1.Global.collection('RankUserRecord').updateOne({ _id: info._id }, { $inc: { value: value } });
        }
        return true;
    }
}
exports.RankUtil = RankUtil;
