import { ObjectId } from "bson";
import { Global } from "./Global";

export class RankUtil {
  /** 更新用户排行榜分数，包括增加、减少 */
  static async updateUserRecord(data: { rankInfoId: string, uid: string, value: number }) {
    const { rankInfoId, uid, value } = data;
    const now = new Date().getTime();
    const info = await Global.collection('RankUserRecord').findOne({ rankInfoId, uid });
    if (!info) {
      const id = new ObjectId().toHexString();
      await Global.collection('RankUserRecord').insertOne(
        {
          _id: id, rankNo: 0,
          rankInfoId, uid, value, updateDate: now, received: false
        }
      )
    } else {
      await Global.collection('RankUserRecord').updateOne(
        { _id: info._id },
        { $inc: { value: value } }
      )
    }
    return true;
  }

}