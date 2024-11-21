"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiTgUserLogin = void 0;
const TypesInfo_1 = require("../../../shared/constant/TypesInfo");
const Global_1 = require("../../../model/Global");
const TokenManager_1 = __importDefault(require("../../../lib/TokenManager"));
const UserUtil_1 = require("../../../model/UserUtil");
const AccountType_1 = require("../../../shared/constant/AccountType");
const CostType_1 = require("../../../shared/constant/CostType");
const bson_1 = require("bson");
const crypto_1 = require("crypto");
const config_1 = __importDefault(require("../../../config"));
// import { Tools } from "../../../utils/Tools";
async function ApiTgUserLogin(call) {
    var _a, _b;
    const { initData } = call.req;
    const data = processTelegramData(initData, config_1.default.bot_token);
    if (data.ok == false) {
        call.error('login error');
        return;
    }
    const tgUser = JSON.parse(data.data.user);
    console.log('tgUser:', tgUser);
    let uid = '' + tgUser.id;
    let username = tgUser.username;
    let languageCode = tgUser['language_code'];
    let nickname = `${tgUser['first_name']} ${tgUser['last_name']}`;
    let avatar = tgUser['photo_url'];
    let userInfo = { uid, nickname, avatar };
    let user = await Global_1.Global.collection('UserInfo').findOne({ uid });
    const nowDate = new Date().getTime();
    const lastLogin = {
        time: nowDate,
        ip: call.conn.ip
    };
    let id = '';
    let log = { uid: id, ip: call.conn.ip, loginType: TypesInfo_1.ELoginType.TgUser, createDate: nowDate, msg: '用户登录' };
    if (!user) {
        // 注册用户信息
        id = new bson_1.ObjectID().toHexString();
        const userData = {
            _id: id,
            activityId: "default", updateTime: nowDate,
            ...userInfo,
            username, languageCode,
            lastLogin
        };
        await Global_1.Global.collection('UserInfo').insertOne(userData);
        log.msg = "注册并登录";
    }
    else {
        id = user._id;
        await Global_1.Global.collection('UserInfo').updateOne({ _id: user._id }, { $set: { lastLogin, nickname, avatar, languageCode } });
        userInfo = { uid: user.uid, nickname: (_a = user === null || user === void 0 ? void 0 : user.nickname) !== null && _a !== void 0 ? _a : "", avatar: (_b = user === null || user === void 0 ? void 0 : user.avatar) !== null && _b !== void 0 ? _b : "" };
    }
    log.uid = id;
    await Global_1.Global.collection('UserLoginLog').insertOne(log);
    const token = TokenManager_1.default.createToken(id, call.req.device.id, nowDate);
    // 给帐号添加次数
    await UserUtil_1.UserUtil.addAmount({ uid: id, accountType: AccountType_1.AccountType.TIMES, amount: 10, costType: CostType_1.CostType.GAME });
    call.succ({
        token, userInfo
    });
}
exports.ApiTgUserLogin = ApiTgUserLogin;
function hmac(data, key) {
    return (0, crypto_1.createHmac)('sha256', key).update(data).digest();
}
function processTelegramData(qs, token) {
    const sk = hmac(token, 'WebAppData');
    console.log('sk:', sk.toString('hex'));
    const parts = qs.split('&').map(p => p.split('='));
    //console.log('parts:', parts);
    const hashpart = parts.splice(parts.findIndex(p => p[0] === 'hash'), 1)[0];
    // console.log('hashpart:', hashpart);
    const dcs = parts.sort((a, b) => a[0] > b[0] ? 1 : -1).map(p => decodeURIComponent(p.join('='))).join('\n');
    console.log('dcs:', dcs);
    const hashdcs = hmac(dcs, sk).toString('hex');
    console.log('hashdcs:', hashdcs);
    if (hashdcs !== hashpart[1])
        return { ok: false };
    const o = {};
    for (const part of parts) {
        o[part[0]] = decodeURIComponent(part[1]);
    }
    return { ok: true, data: o };
}
