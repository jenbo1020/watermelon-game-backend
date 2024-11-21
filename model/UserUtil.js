"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUtil = void 0;
const bson_1 = require("bson");
const Global_1 = require("./Global");
class UserUtil {
    /** 添加角色信息 */
    static async addUserInfo(data) {
        const result = await Global_1.Global.collection('UserInfo').insertOne(data);
        if (result && result.insertedId) {
            return true;
        }
        return false;
    }
    /** 增加用户账户数据 */
    static async addAmount(data) {
        const { uid, accountType, amount, costType } = data;
        const now = new Date().valueOf();
        const account = await Global_1.Global.collection('UserAccount').findOne({ uid, accountType });
        if (!account) { // 添加账户
            await Global_1.Global.collection('UserAccount').insertOne({ uid, accountType, amount, createTime: now });
        }
        else {
            const update = await Global_1.Global.collection('UserAccount').updateOne({ _id: account._id }, { $inc: { amount: amount } });
            if (!update || !update.modifiedCount) {
                return null;
            }
        }
        const beforeAmount = account ? account.amount : 0;
        const afterAmount = account ? account.amount + amount : amount;
        const id = new bson_1.ObjectID().toHexString();
        await Global_1.Global.collection('UserAccountHistory').insertOne({
            _id: id,
            uid,
            accountType,
            beforeAmount: account ? account.amount : 0,
            afterAmount: account ? account.amount + amount : amount,
            amount: amount,
            costType,
            createTime: now
        });
        return { beforeAmount, afterAmount };
    }
    /** 减少用户账户数据 */
    static async reduceAmount(data) {
        const { uid, accountType, amount, costType } = data;
        const now = new Date().valueOf();
        const account = await Global_1.Global.collection('UserAccount').findOne({ uid, accountType });
        if (!account || account.amount <= 0) {
            return false;
        }
        if (account.amount - amount < 0) {
            return false;
        }
        const update = await Global_1.Global.collection('UserAccount').updateOne({ _id: account._id }, { $inc: { amount: -amount } });
        if (!update || !update.modifiedCount) {
            return false;
        }
        const beforeAmount = account.amount;
        const afterAmount = account.amount - amount;
        const id = new bson_1.ObjectID().toHexString();
        await Global_1.Global.collection('UserAccountHistory').insertOne({
            _id: id,
            uid,
            accountType,
            beforeAmount,
            afterAmount,
            amount: -amount,
            costType,
            createTime: now
        });
        return { beforeAmount, afterAmount };
    }
}
exports.UserUtil = UserUtil;
