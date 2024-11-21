"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
* 默认使用 Development 配置
*/
const env = process.env.NODE_ENV || 'development';
let config = require(`./${env}`).default;
console.log(`[服务启动]-加载配置文件: src/config/${env}.ts`);
/** 从环境变量读取配置 */
if (process.env.JSON_HOST_PATH) {
    config.serverConfig.JSON_HOST_PATH = process.env.JSON_HOST_PATH;
}
if (process.env.MONGO_URI) {
    config.serverConfig.MONGO.URI = process.env.MONGO_URI;
}
if (process.env.TOKEN_EXPIRED_TIME) {
    config.serverConfig.TOKEN_EXPIRED_TIME = parseInt(process.env.TOKEN_EXPIRED_TIME);
}
if (process.env.LOIGNERROR_IP_LIMIT) {
    config.loginErrorConfig.ipLimit = parseInt(process.env.LOIGNERROR_IP_LIMIT);
}
if (process.env.LOIGNERROR_NEED_CAPTCHAT) {
    config.loginErrorConfig.needCaptcha = parseInt(process.env.LOIGNERROR_NEED_CAPTCHAT);
}
if (process.env.CAPTCHATREQUEST_IP_LIMIT) {
    config.captchaRequestConfig.ipLimit = parseInt(process.env.CAPTCHATREQUEST_IP_LIMIT);
}
if (process.env.SMSREQUEST_IP_LIMIT) {
    config.smsRequestConfig.ipLimit = parseInt(process.env.SMSREQUEST_IP_LIMIT);
}
if (process.env.AES_ALGORITHM) {
    config.aesConfig.algorithm = process.env.AES_ALGORITHM;
}
if (process.env.AES_KEY) {
    config.aesConfig.key = process.env.AES_KEY;
}
if (process.env.AES_IV) {
    config.aesConfig.iv = process.env.AES_IV;
}
if (process.env.ROOM_SERVER_URL) {
    config.roomConfig.serverUrl = process.env.ROOM_SERVER_URL;
}
if (process.env.ROOM_SERVER_NO) {
    config.roomConfig.serverNo = process.env.ROOM_SERVER_NO;
}
config.serverConfig.PLATFORM = 'taobao';
exports.default = config;
