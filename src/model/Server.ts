import * as path from 'path';
import config from '../config';
import { serviceProto } from '../shared/protocols/serviceProto';
import { UseCheckAccess } from './flow/UseCheckAccess';
import { UseEncrypt } from './flow/UseEncrypt';
import { UseGetResponse } from './flow/UseGetResponse';
import { Global } from './Global';
import { HttpServer } from 'tsrpc';

// 创建 Serve
export const Server = new HttpServer(serviceProto, {
  port: config.serverConfig.PORT,
  logReqBody: true,
  logResBody: true,
  jsonHostPath: config.serverConfig.JSON_HOST_PATH,
  json: true,
  // json: process.env.NODE_ENV != 'release',
  apiTimeout: 60000 * 100,
  cors: '*',
});
/**
 * 中间件
 */
// UseQueue(Server);
UseEncrypt(Server); // 加密解密
UseCheckAccess(Server); // 验证登录态及权限
UseGetResponse(Server); // 响应 GET 请求

// 初始化方法
export async function init(delay = false) {
  // Auto implement APIs
  await Server.autoImplementApi(path.resolve(__dirname, '../api'), delay);
  // 初始化数据库等全局依赖
  await Global.init(Server.logger);
}
