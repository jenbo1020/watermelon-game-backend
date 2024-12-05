"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** 开发环境配置文件 */
const serverConfig = {
    PLATFORM: 'node',
    PORT: 3000,
    JSON_HOST_PATH: '/watermelon-game-server',
    MONGO: {
        URI: 'mongodb://root:HawrjdhRj43faexs@43.139.37.201:27017/tg-watermelon?authSource=admin',
        //URI: 'mongodb://db_root:HawrjdhRj43faexs@3.25.129.219:27017/tg-watermelon?authSource=admin',
        MAX_POOL_SIZE: 5,
        MIN_POOL_SIZE: 1,
    },
    TOKEN_EXPIRED_TIME: 3600 * 8 * 1000,
};
exports.default = {
    nodeEnv: 'dev',
    roomConfig: {
        /** 服务端口 */
        port: 3003,
        /** 服务器最大用户数 */
        maxUserNum: 10000,
        /** 服务地址 */
        serverUrl: 'ws://127.0.0.1:3003',
        /** 服务编号，用于redis发布订阅全服务器通知 */
        serverNo: 'dev001',
        /** 房间最大用户数 */
        roomMaxUserNum: 500
    },
    /** redis配置 */
    redisConfig: {
        /** 地址 */
        host: '121.36.29.237',
        /** 端口 */
        port: 8635,
        /** 密码 */
        password: 'Aigamify_666',
        /** db */
        db: 7
    },
    serverConfig,
    /** aes加密配置 */
    aesConfig: {
        /** 算法，支持 aes-128-cbc，es-192-cbc，es-192-cbc
           aes-128-cbc key和iv必须为16字节，
           aes-192-cbc key和iv必须为24字节
           aes-256cbc key和iv必须为32字节
        */
        algorithm: 'aes-128-cbc',
        /** 密钥key */
        key: '0okmjuy6t3eds378',
        /** 偏移量iv */
        iv: '1wsde34r5et6yhgf'
    },
    /** 登录相关的错误日志 */
    loginErrorConfig: {
        /** 一天内同一IP同一帐号错误次数达到后不能登录,0不限制 */
        ipLimit: 0,
        /** 一天内同一帐号错误次数达到后需要带图形验证码，0不限制 */
        needCaptcha: 3
    },
    /** 图形验证码请求限制 */
    captchaRequestConfig: {
        /** 一天内同一手机或者帐号请求次数达到后不能再请求，0不限制，默认0 */
        ipLimit: 1
    },
    /** 手机验证码请求限制 */
    smsRequestConfig: {
        /** 一天内同一手机或者帐号请求次数达到后不能再请求，0不限制，默认0 */
        ipLimit: 1
    },
    bot_token: '6573484100:AAGiEVTLDB2mDrH6liD7-Km_1Oh6QnzR7CI',
    ton_token: 'UQAet-amemkCQ0PJvV6_1UkIqtNJAlKUcD0CsqqqG0lUk3-W'
};
