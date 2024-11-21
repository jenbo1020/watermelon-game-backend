"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseCheckAccess = void 0;
const TokenManager_1 = __importDefault(require("../../lib/TokenManager"));
const ErrorInfo_1 = require("../../constant/ErrorInfo");
const Global_1 = require("../Global");
require("../ExtendApiCall");
const moment_1 = __importDefault(require("moment"));
/** 后台管理员token验证 */
function UseCheckAccess(Server) {
    // console.log('useCheckAccess...');
    Server.flows.preApiCallFlow.push(async (v) => {
        var _a, _b;
        const conn = v.conn;
        const httpReq = conn.httpReq;
        const httpRes = conn.httpRes;
        if (httpReq.method === 'OPTIONS') {
            httpRes.setHeader('Access-Control-Allow-Origin', '*');
            httpRes.setHeader('Access-Control-Allow-Headers', '*');
            httpRes.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,PATCH,OPTIONS');
            httpRes.end('');
            return undefined;
        }
        v.userInfo = {
            uid: '',
            nickname: '',
            avatar: '',
            token: ''
        };
        if (!v.req.activityId) {
            v.req.activityId = 'default';
        }
        if (v.service.conf.needLogin) {
            if (!v.req.token) {
                v.error(ErrorInfo_1.TIMEOUT_ERROR);
                return;
            }
            let token = v.req.token;
            const data = TokenManager_1.default.getTokenData(token);
            console.log('data=>', data);
            if (data === null) {
                v.error(ErrorInfo_1.ERRORINFO.TOKEN_ERROR);
                return;
            }
            const userInfo = await Global_1.Global.collection('UserInfo').findOne({ _id: data.id });
            console.log('userinfo=>', userInfo);
            if (!userInfo) {
                v.error(ErrorInfo_1.USER_ERROR);
                return;
            }
            if (!TokenManager_1.default.checkTokenData(data, v.req.device.id, userInfo.lastLogin.time)) {
                v.error(ErrorInfo_1.ERRORINFO.TOKEN_ERROR);
                return;
            }
            const preTime = (0, moment_1.default)().utcOffset(8).add(10, 'minutes').valueOf();
            // 还有10分钟token要重新生成
            if (preTime > data.expiredTime) {
                token = TokenManager_1.default.createToken(data.id, v.req.device.id, userInfo.lastLogin.time);
            }
            v.userInfo = {
                uid: data.id,
                nickname: (_a = userInfo === null || userInfo === void 0 ? void 0 : userInfo.nickname) !== null && _a !== void 0 ? _a : '',
                avatar: (_b = userInfo === null || userInfo === void 0 ? void 0 : userInfo.avatar) !== null && _b !== void 0 ? _b : '',
                token
            };
        }
        return v;
    });
}
exports.UseCheckAccess = UseCheckAccess;
