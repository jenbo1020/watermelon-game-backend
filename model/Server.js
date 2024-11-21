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
exports.init = exports.Server = void 0;
const path = __importStar(require("path"));
const config_1 = __importDefault(require("../config"));
const serviceProto_1 = require("../shared/protocols/serviceProto");
const UseCheckAccess_1 = require("./flow/UseCheckAccess");
const UseEncrypt_1 = require("./flow/UseEncrypt");
const UseGetResponse_1 = require("./flow/UseGetResponse");
const Global_1 = require("./Global");
const tsrpc_1 = require("tsrpc");
// 创建 Serve
exports.Server = new tsrpc_1.HttpServer(serviceProto_1.serviceProto, {
    port: config_1.default.serverConfig.PORT,
    logReqBody: true,
    logResBody: true,
    jsonHostPath: config_1.default.serverConfig.JSON_HOST_PATH,
    json: true,
    // json: process.env.NODE_ENV != 'release',
    apiTimeout: 60000 * 100,
    cors: '*',
});
/**
 * 中间件
 */
// UseQueue(Server);
(0, UseEncrypt_1.UseEncrypt)(exports.Server); // 加密解密
(0, UseCheckAccess_1.UseCheckAccess)(exports.Server); // 验证登录态及权限
(0, UseGetResponse_1.UseGetResponse)(exports.Server); // 响应 GET 请求
// 初始化方法
async function init(delay = false) {
    // Auto implement APIs
    await exports.Server.autoImplementApi(path.resolve(__dirname, '../api'), delay);
    // 初始化数据库等全局依赖
    await Global_1.Global.init(exports.Server.logger);
}
exports.init = init;
