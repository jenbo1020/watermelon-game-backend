import { ObjectId } from 'bson';
import { Global } from './Global';
import { PrizeField } from '../shared/common/PrizeField';
import { UserPrizeSourceType } from '../shared/constant/UserPrizeSourceType';
import { EBagPrizeStatus } from '../shared/constant/BagPrizeStatus';
import { EExpressStatus } from '../shared/constant/ExpressStatus';
/** 背包处理类 */
export class BagUtil {
  /**
   * 添加背包奖品
   * @param activityId 活动id
   * @param uid 用户id
   * @param prize 奖品信息
   * @param source 获得来源
   * @returns 
   */
  static async addBagInfo(data: { activityId: string, uid: string, prize: PrizeField, source: UserPrizeSourceType }) {
    const bagId = new ObjectId().toHexString();
    const now = new Date().valueOf();
    const rs = await Global.collection('BagInfo').insertOne(
      {
        _id: bagId,
        activityId: data.activityId,
        uid: data.uid,
        prize: data.prize,
        source: data.source,
        createDate: now,
        status: EBagPrizeStatus.unApply
      }
    );
    if (rs && rs.insertedId) {
      return bagId
    }
    return null;
  }

  /**
   * 设置背包的物流id 
   * @param bagId 背包id
   * @param expressId 物流id
   * @returns 
   */
  static async setBagExpress(bagId: string, expressId: string) {
    const rs = await Global.collection('BagInfo').updateOne(
      { _id: bagId },
      { $set: { status: EExpressStatus.wait, expressId } }
    );
    if (rs && rs.modifiedCount > 0) {
      return true
    }
    return false;
  }
}