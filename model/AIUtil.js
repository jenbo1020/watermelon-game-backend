"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CAIUtil = void 0;
const crypto_1 = __importDefault(require("crypto"));
const moment_1 = __importDefault(require("moment"));
const nanoid_1 = require("nanoid");
const HttpRequest_1 = require("../lib/HttpRequest");
class CAIUtil {
    /**
     * 生成签名串
     * @param appKey
     * @param secret
     * @returns
     */
    static getSign(appKey, secret) {
        // 16进制随机文本字符串
        let requestId = this.randomId(16);
        let timestamp = (0, moment_1.default)().valueOf();
        let sign_str = 'app_key=' + appKey + '&request_id=' + requestId + '&timestamp=' + timestamp + '&' + secret;
        let hash = crypto_1.default.createHash('md5');
        let data = Buffer.from(sign_str, 'utf8');
        hash.update(data);
        let sign = hash.digest('hex').toUpperCase();
        return {
            requestId,
            timestamp,
            sign
        };
    }
    /**
     * 生成session
     * @param info
     * @returns
     */
    static async createSession(info) {
        let sessionRet = await HttpRequest_1.HttpRequest.customPost(info.apiUrl + 'ai/create_session', {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }, {
            app_key: info.appKey,
            request_id: info.requestId,
            timestamp: info.timestamp,
            sign: info.sign,
            param: {
                role_id: info.roleId
            }
        }, true);
        return sessionRet;
    }
    /**
     * AI问答
     * @param info
     * @param question
     * @returns
     */
    static async getAnswer(info, question) {
        let { requestId, sign, timestamp } = this.getSign(info.appKey, info.secret);
        info.requestId = requestId;
        info.sign = sign;
        info.timestamp = timestamp;
        const sessionRet = await this.createSession(info);
        if (!sessionRet || sessionRet.code != 0 || !sessionRet.success) {
            return null;
        }
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        const body = {
            app_key: info.appKey,
            request_id: requestId,
            timestamp: timestamp,
            sign: sign,
            param: {
                session_id: sessionRet.data.session_id,
                voice: 'Xiaozhou_zh-CN_female',
                prompt: question
            }
        };
        let dialogRet = await HttpRequest_1.HttpRequest.customPost(info.apiUrl + 'ai/get_answer', headers, body, true);
        if (dialogRet.code === 0 && dialogRet.success) {
            let answer = dialogRet.data.answer;
            let audioUrl = dialogRet.data.url;
            return {
                answer,
                audioUrl
            };
        }
        return null;
    }
    /**
     * 获取AI的开场白内容
     * @param info
     * @returns
     */
    static async getPrologue(info) {
        let { requestId, sign, timestamp } = this.getSign(info.appKey, info.secret);
        info.requestId = requestId;
        info.sign = sign;
        info.timestamp = timestamp;
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        const body = {
            app_key: info.appKey,
            request_id: requestId,
            timestamp: timestamp,
            sign,
            param: {
                role_id: info.roleId
            }
        };
        let dialogRet = await HttpRequest_1.HttpRequest.customPost(info.apiUrl + 'ai/get_prologue', headers, body, true);
        console.log('getPrologue=>', body, dialogRet);
        if (dialogRet.code === 0 && dialogRet.success) {
            return {
                prologue: dialogRet.data.prologue
            };
        }
        return null;
    }
}
exports.CAIUtil = CAIUtil;
CAIUtil.randomId = (0, nanoid_1.customAlphabet)('0123456789abcdefghijklmnopqrstuvwxyz');
