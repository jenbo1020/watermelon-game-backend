"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Global = void 0;
const mongodb_1 = require("mongodb");
const config_1 = __importDefault(require("../config"));
const Cache_1 = require("../lib/Cache");
class Global {
    static get mongoClient() {
        return this._mongoClient;
    }
    /** 普通-全局依赖初始化 */
    static async init(logger) {
        if (this.isInited) {
            return;
        }
        this.isInited = true;
        await this.initMongodb(logger);
        this.initCache(logger);
    }
    /**
    * Mongodb 初始化
    */
    static async initMongodb(logger) {
        this._mongoClient = new mongodb_1.MongoClient(config_1.default.serverConfig.MONGO.URI, {
            maxPoolSize: config_1.default.serverConfig.MONGO.MAX_POOL_SIZE,
            minPoolSize: config_1.default.serverConfig.MONGO.MIN_POOL_SIZE,
            // readPreference: 'nearest',
        });
        await this._mongoClient.connect();
        this._db = this._mongoClient.db();
        logger === null || logger === void 0 ? void 0 : logger.log('✅ MognoDB 连接成功~ ', config_1.default.serverConfig.MONGO.URI);
    }
    /**
     * @description: 系统 Cache 初始化
     * @param {Logger} logger
     */
    static initCache(logger) {
        this._cache = new Cache_1.Cache({
            cacheTime: 2 * 60 * 1000,
            fetchTime: 1 * 60 * 1000,
            fetchTimeout: 5 * 1000,
        });
        logger === null || logger === void 0 ? void 0 : logger.log('✅ Cache 初始化成功~ ');
    }
    static collection(col) {
        return this._db.collection(col);
    }
    /**
     * @description: 系统 Cache 实例
     */
    static cache() {
        return this._cache;
    }
}
exports.Global = Global;
Global.isInited = false;
