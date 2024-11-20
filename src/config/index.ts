export interface IServerConfig {
  PLATFORM: string,
  PORT: number;
  MONGO: {
    URI: string;
    MAX_POOL_SIZE: number;
    MIN_POOL_SIZE: number;
  };
  JSON_HOST_PATH: string;
  /** token过期的时长:分钟 */
  TOKEN_EXPIRED_TIME: number;
}

export interface Config {
  nodeEnv: string,
  serverConfig: IServerConfig;
  roomConfig: {
    /** 服务端口 */
    port: number,
    /** 服务器最大用户数 */
    maxUserNum: number,
    /** 服务地址 */
    serverUrl: string,
    /** 服务编号，用于redis发布订阅全服务器通知 */
    serverNo: string,
    /** 房间最大用户数 */
    roomMaxUserNum: number;
  },
  /** redis配置 */
  redisConfig: {
    /** 地址 */
    host: string,
    /** 端口 */
    port: number,
    /** 密码 */
    password: string,
    /** db */
    db: number
  };
  /** aes加密配置 */
  aesConfig: {
    /** 算法，支持 aes-128-cbc，es-192-cbc，es-192-cbc
       aes-128-cbc key和iv必须为16字节，
       aes-192-cbc key和iv必须为24字节
       aes-256cbc key和iv必须为32字节
    */
    algorithm: string;
    /** 密钥key */
    key: string;
    /** 偏移量iv */
    iv: string
  };
  /** 登录相关的错误日志 */
  loginErrorConfig: {
    /** 一天内同一IP同一帐号错误次数达到后不能登录，0不限制，默认0 */
    ipLimit: number,
    /** 一天内同一帐号错误次数达到后需要带图形验证码，0不限制，默认3 */
    needCaptcha: number
  };
  /** 图形验证码请求限制 */
  captchaRequestConfig: {
    /** 一天内同一手机或者帐号请求次数达到后不能再请求，0不限制，默认0 */
    ipLimit: number
  };
  /** 手机验证码请求限制 */
  smsRequestConfig: {
    /** 一天内同一手机或者帐号请求次数达到后不能再请求，0不限制，默认0 */
    ipLimit: number
  },
  /** AI配置信息 */
  aiConfig: {
    apiUrl: string,
    appKey: string,
    secret: string
  },

  /** 淘宝APP信息 */
  taobaoApp: {
    appKey: string,
    appSecret: string
  },

  /** 微盟配置信息 */
  weimobApp: {
    clientId: string,
    clientSecret: string,
    shopId: string,
  },

  /** 京东配置 */
  jdApp: {
    appKey: string,
    appSecret: string,
    serverUrl: string
  }
  // bot应用token 
  bot_token: string
}

/**
* 默认使用 Development 配置
*/
const env = process.env.NODE_ENV || 'development';
let config: Config = require(`./${env}`).default;
console.log(`[服务启动]-加载配置文件: src/config/${env}.ts`)

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
  config.roomConfig.serverUrl = process.env.ROOM_SERVER_URL
}
if (process.env.ROOM_SERVER_NO) {
  config.roomConfig.serverNo = process.env.ROOM_SERVER_NO
}

config.serverConfig.PLATFORM = 'taobao'
export default config;
