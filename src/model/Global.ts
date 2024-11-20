import type { Collection, Db, OptionalId } from 'mongodb';
import { MongoClient } from 'mongodb';
import type { Logger } from 'tsrpc-proto';
import config from '../config';
import { Cache } from '../lib/Cache';
import type { CollectionDbType } from '../shared/dbItems/CollectionDbType';


export class Global {
  private static isInited = false;
  static _mongoClient: MongoClient;
  public static get mongoClient() {
    return this._mongoClient;
  }
  static _db: Db;
  static _cache: any;
  /** 普通-全局依赖初始化 */
  static async init(logger?: Logger) {
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
  private static async initMongodb(logger?: Logger) {
    this._mongoClient = new MongoClient(config.serverConfig.MONGO.URI, {
      maxPoolSize: config.serverConfig.MONGO.MAX_POOL_SIZE,
      minPoolSize: config.serverConfig.MONGO.MIN_POOL_SIZE,
      // readPreference: 'nearest',
    });
    await this._mongoClient.connect();
    this._db = this._mongoClient.db();
    logger?.log('✅ MognoDB 连接成功~ ', config.serverConfig.MONGO.URI);
  }

  /**
   * @description: 系统 Cache 初始化
   * @param {Logger} logger
   */
  private static initCache(logger?: Logger) {
    this._cache = new Cache({
      cacheTime: 2 * 60 * 1000,
      fetchTime: 1 * 60 * 1000,
      fetchTimeout: 5 * 1000,
    });
    logger?.log('✅ Cache 初始化成功~ ');
  }


  static collection<T extends keyof CollectionDbType>(col: T): Collection<OptionalId<CollectionDbType[T]>> {
    return this._db.collection(col);
  }

  /**
   * @description: 系统 Cache 实例
   */
  static cache() {
    return this._cache;
  }

}
