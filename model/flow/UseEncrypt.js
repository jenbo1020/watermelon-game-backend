"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseEncrypt = void 0;
//import { EncryptUtil } from '../../shared/common/EncryptUtil';
function UseEncrypt(Server) {
    // 发送前加密
    /*Server.flows.preSendDataFlow.push((v) => {
      if (v.data instanceof Uint8Array) {
        v.data = EncryptUtil.encrypt(v.data);
      }
      return v;
    });*/
    // 接收前解密
    /*Server.flows.preRecvDataFlow.push((v) => {
       if (v.data instanceof Uint8Array) {
         v.data = EncryptUtil.decrypt(v.data);
       }
       return v;
     });
     */
}
exports.UseEncrypt = UseEncrypt;
