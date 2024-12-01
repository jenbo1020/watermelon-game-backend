"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FruitUtil = void 0;
const bson_1 = require("bson");
const Global_1 = require("./Global");
const moment_1 = __importDefault(require("moment"));
class FruitUtil {
    /** 检测用户邀请必中奖品并发放 */
    static async checkInviteMustPrize(data) {
        let { drawInfoId, userId, inviteNum } = data;
        const mustList = await Global_1.Global.collection('FruitInviteConfig').find({ drawInfoId, rewardType: 'must' }).toArray();
        if (!mustList.length) {
            return { code: 1, msg: '商家没有配置必中奖品' };
        }
        const matchMustList = mustList.filter(a => { return a.inviteNum <= inviteNum; });
        if (!matchMustList.length) {
            return { code: 1, msg: '未达到邀请数量' };
        }
        const prizeList = [];
        const now = new Date().getTime();
        const day = (0, moment_1.default)().format('YYYY-MM-DD');
        for (const item of matchMustList) {
            const myMustPrize = await Global_1.Global.collection('FruitInviteMustLog').findOne({ drawInfoId, userId, inviteNum });
            if (myMustPrize) {
                console.log('已经派过必中奖，不再重复派发=>drawInfoId, userId, inviteNum, item, :', drawInfoId, userId, inviteNum, item.inviteNum, item);
                continue;
            }
            if (item.rewardType == 'must' && item.stock > 0 && item.mustPrize.length > 0) {
                const upd = await Global_1.Global.collection('FruitInviteConfig').findOneAndUpdate({ _id: item._id }, { $inc: { stock: -1, sent: 1 } });
                if (upd.ok) {
                    prizeList.push({ inviteNum: item.inviteNum, prizeList: item.mustPrize });
                    Global_1.Global.collection('FruitInviteMustLog').insertOne({
                        _id: new bson_1.ObjectId().toHexString(),
                        drawInfoId, userId, inviteNum, prizeList: item.mustPrize, createDate: now, day
                    });
                    for (const prize of item.mustPrize) {
                        // TODO 发放奖品
                        console.log(prize);
                    }
                }
            }
        }
        return { code: 0, prizeList };
    }
}
exports.FruitUtil = FruitUtil;
