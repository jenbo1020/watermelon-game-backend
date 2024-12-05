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
    /** 更新单局最高分 */
    static async updateUserSingleRecord(data) {
        const { rankInfoId, uid, score } = data;
        // 取总用户记录；取出比自己积分省的用户
        const [allSum, otherSum] = await Promise.all([
            Global_1.Global.collection('RankUserSingleRecord').count({ rankInfoId }),
            Global_1.Global.collection('RankUserSingleRecord').count({ rankInfoId, score: { $lte: score } })
        ]);
        const now = new Date().getTime();
        const info = await Global_1.Global.collection('RankUserSingleRecord').findOne({ rankInfoId, uid });
        if (!info) {
            const id = new bson_1.ObjectId().toHexString();
            await Global_1.Global.collection('RankUserSingleRecord').insertOne({
                _id: id,
                rankInfoId, uid, score, updateDate: now
            });
        }
        else if (score > info.score) {
            await Global_1.Global.collection('RankUserSingleRecord').updateOne({ _id: info._id }, { $set: { score, updateDate: now } });
        }
        const upPer = allSum > 0 ? ((otherSum / allSum) * 100).toFixed(2) : 0;
        return `${upPer}%`;
    }
}
exports.RankUtil = RankUtil;
