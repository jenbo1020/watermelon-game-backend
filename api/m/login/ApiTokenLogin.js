"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiTokenLogin = void 0;
const TypesInfo_1 = require("../../../shared/constant/TypesInfo");
const Global_1 = require("../../../model/Global");
const TokenManager_1 = __importDefault(require("../../../lib/TokenManager"));
async function ApiTokenLogin(call) {
    const { needUserInfo } = call.req;
    // 记录信息
    const nowDate = new Date().getTime();
    const log = { uid: call.userInfo.uid, ip: call.conn.ip, loginType: TypesInfo_1.ELoginType.Token, createDate: nowDate, msg: 'token登录' };
    await Global_1.Global.collection('UserLoginLog').insertOne(log);
    const token = TokenManager_1.default.createToken(call.userInfo.uid, call.req.device.id, nowDate);
    if (needUserInfo) {
        return call.succ({
            token,
            userInfo: {
                uid: call.userInfo.uid,
                nickname: call.userInfo.nickname,
                avatar: call.userInfo.avatar
            }
        });
    }
    // 更新最后登录信息
    await Global_1.Global.collection('UserInfo').updateOne({ uid: call.userInfo.uid }, { $set: { lastLogin: { time: nowDate, ip: call.conn.ip } } });
    call.succ({ token });
}
exports.ApiTokenLogin = ApiTokenLogin;
