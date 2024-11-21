"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpRequest = void 0;
const request_1 = __importDefault(require("request"));
const http = __importStar(require("http"));
const https = __importStar(require("https"));
const tsrpc_1 = require("tsrpc");
const httpsKeepAliveAgent = new https.Agent({
    keepAlive: true
});
const httpKeepAliveAgent = new http.Agent({
    keepAlive: true
});
class HttpRequest {
    /**
     * Get
     */
    static get(uri, qs, logger) {
        return this.request({
            method: 'GET',
            uri: uri,
            qs: qs
        }, logger);
    }
    /**
     * POST
     * @param uri 请求地址
     * @param qs
     * @param body 请求参数
     * @param json 是否json格式
     * @param logger 是否打印日志
     * @returns
     */
    static post(uri, qs, body, json, logger) {
        return this.request({
            method: 'POST',
            uri: uri,
            qs: qs,
            body: body,
            json: json
        }, logger);
    }
    /**
     * @Date: 2022-08-19 15:17:37
     * @description: POST
     * @param uri 请求地址
     * @param headers
     * @param body 请求参数
     * @param json 是否json格式
     * @param logger 是否打印日志
     * @return {*}
     */
    static customPost(uri, headers, body, json, logger) {
        return this.request({
            method: 'POST',
            uri: uri,
            headers: headers,
            body: body,
            json: json
        }, logger);
    }
    static request(options, logger) {
        return new Promise((rs, rj) => {
            let reqId = this.counter.getNext();
            let op = (0, request_1.default)({
                timeout: 20000,
                json: options.json || true,
                gzip: true,
                agent: options.uri.startsWith('https') ? httpsKeepAliveAgent : httpKeepAliveAgent,
                ...options
            }, async (err, res, body) => {
                var _a;
                if (err) {
                    logger === null || logger === void 0 ? void 0 : logger.error(`HttpError->[${reqId}]:${err.message}`);
                    rj(err);
                    return;
                }
                else if (res && res.statusCode !== 200) {
                    logger === null || logger === void 0 ? void 0 : logger.error(`HttpError->[${reqId}]:${res.statusCode}-${res.statusMessage}`, res.body);
                    rj(new Error(((_a = res.body) === null || _a === void 0 ? void 0 : _a.msg) || `${res.statusCode} ${res.statusMessage}`));
                    return;
                }
                else if (!body) {
                    logger === null || logger === void 0 ? void 0 : logger.error(`HttpError->[${reqId}] Empty res body`);
                    rj(new Error(`Empty res body`));
                    return;
                }
                if (options.json && typeof body !== 'object') {
                    try {
                        body = JSON.parse(body);
                    }
                    catch (error) {
                        logger === null || logger === void 0 ? void 0 : logger.error(`HttpError->[${reqId}] JSON format error`);
                        rj(new Error(`HttpReq JSON format Error`));
                        return;
                    }
                }
                else if (options.json === false && typeof body === 'string') {
                }
                else {
                    logger === null || logger === void 0 ? void 0 : logger.debug(`接受 Http 返回:->[${reqId}]`, JSON.stringify(res === null || res === void 0 ? void 0 : res.body, null, 2));
                    rs(body);
                }
            });
            logger === null || logger === void 0 ? void 0 : logger.debug(`发起 Http 请求:->[${reqId}] [${op.method}] ${op.uri.href} ${op.method === 'POST' ? `Body:${op.body}` : ''}`);
        });
    }
}
exports.HttpRequest = HttpRequest;
HttpRequest.counter = new tsrpc_1.Counter();
