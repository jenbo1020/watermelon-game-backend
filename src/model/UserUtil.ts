import { ObjectID } from 'bson';
import { AccountType } from '../shared/constant/AccountType';
import { CostType } from '../shared/constant/CostType';
import { DbUserInfo } from '../shared/dbItems/user/DbUserInfo';
import { Global } from './Global';

export class UserUtil {
  /** 添加角色信息 */
  static async addUserInfo(data: Omit<DbUserInfo, '_id'>): Promise<boolean> {
    const result = await Global.collection('UserInfo').insertOne(data);
    if (result && result.insertedId) {
      return true;
    }
    return false;
  }

  /** 增加用户账户数据 */
  static async addAmount(data: { uid: string, accountType: AccountType, amount: number, costType: CostType }) {
    const { uid, accountType, amount, costType } = data;
    const now = new Date().valueOf();
    const account = await Global.collection('UserAccount').findOne({ uid, accountType });
    if (!account) { // 添加账户
      await Global.collection('UserAccount').insertOne(
        { uid, accountType, amount, createTime: now }
      );
    } else {
      const update = await Global.collection('UserAccount').updateOne(
        { _id: account._id },
        { $inc: { amount: amount } }
      );
      if (!update || !update.modifiedCount) {
        return null;
      }
    }
    const beforeAmount = account ? account.amount : 0;
    const afterAmount = account ? account.amount + amount : amount;
    const id = new ObjectID().toHexString();
    await Global.collection('UserAccountHistory').insertOne(
      {
        _id: id,
        uid,
        accountType,
        beforeAmount: account ? account.amount : 0,
        afterAmount: account ? account.amount + amount : amount,
        amount: amount,
        costType,
        createTime: now
      }
    );
    return { beforeAmount, afterAmount };
  }

  /** 减少用户账户数据 */
  static async reduceAmount(data: { uid: string, accountType: AccountType, amount: number, costType: CostType }) {
    const { uid, accountType, amount, costType } = data;
    const now = new Date().valueOf();
    const account = await Global.collection('UserAccount').findOne({ uid, accountType });
    if (!account || account.amount <= 0) {
      return false;
    }
    if (account.amount - amount < 0) {
      return false;
    }
    const update = await Global.collection('UserAccount').updateOne(
      { _id: account._id },
      { $inc: { amount: -amount } }
    );
    if (!update || !update.modifiedCount) {
      return false;
    }
    const beforeAmount = account.amount;
    const afterAmount = account.amount - amount;
    const id = new ObjectID().toHexString();
    await Global.collection('UserAccountHistory').insertOne(
      {
        _id: id,
        uid,
        accountType,
        beforeAmount,
        afterAmount,
        amount: -amount,
        costType,
        createTime: now
      }
    );
    return { beforeAmount, afterAmount };
  }
}