"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncryptUtil = void 0;
class EncryptUtil {
    // TODO 加密
    static encrypt(buf) {
        console.log('加密...');
        for (let i = 0; i < buf.length; ++i) {
            buf[i] -= 1;
        }
        return buf;
    }
    // TODO 解密
    static decrypt(buf) {
        for (let i = 0; i < buf.length; ++i) {
            buf[i] += 1;
        }
        return buf;
    }
}
exports.EncryptUtil = EncryptUtil;
