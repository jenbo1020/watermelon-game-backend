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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoUtil = void 0;
const crypto = __importStar(require("crypto"));
class CryptoUtil {
    /**
     * md5加密
     * @param data 被加密的字符串
     * @returns 加密后的数据
     */
    static md5Encrypt(data) {
        try {
            const md5 = crypto.createHash('md5');
            const md5Str = md5.update(data, 'utf8').digest('hex');
            return md5Str;
        }
        catch (ex) {
            console.log('md5Encrypt error=>', ex);
            return '';
        }
    }
    /**
     * AES加密
     * @param data 源数据
     * @param key 密钥
     * @returns 加密后的数据
     */
    static aesEncrypt(data, key, iv, algorithm) {
        // 实例化一个cipher加密对象，key作为密钥
        try {
            const cipher = crypto.createCipheriv(algorithm, key, iv);
            // 使用cipher对data进行加密，源数据类型为utf-8，输出数据类型为hex
            let encrypted = cipher.update(data, 'utf8', 'hex');
            encrypted += cipher.final('hex');
            return encrypted;
        }
        catch (ex) {
            console.log('aesEncrypt error=>', ex);
            return '';
        }
    }
    /**
     * AES解密
     * @param encrypted 待解密数据
     * @param key 密钥
     * @returns 解密后的数据
     */
    static aesDecrypt(encrypted, key, iv, algorithm) {
        // 实例化一个decipher解密对象，key作为密钥
        try {
            const decipher = crypto.createDecipheriv(algorithm, key, iv);
            // 使用decipher对encrypted进行解密，源数据类型为hex，输出数据类型为utf-8
            let decrypted = decipher.update(encrypted, 'hex', 'utf8');
            decrypted += decipher.final('utf8');
            return decrypted;
        }
        catch (ex) {
            // console.log('aesDecrypt error=>', ex)
            return '';
        }
    }
    static aesEncrypt2(data, key, iv) {
        console.log('aesConfig', key, iv);
        const crypto = require('./encrypt');
        const r = crypto.AES.encrypt(data, key, {
            iv: iv,
        }).toString();
        // console.log("aesEncrypt2 rrrr", r);
        return r;
    }
    static aesDecrypt2(encrypted, key, iv) {
        const crypto = require('./encrypt');
        const decrypted = crypto.AES.decrypt(encrypted, key, {
            iv: iv,
        });
        const r = decrypted.toString(crypto.enc.Utf8);
        // console.log("aesDecrypt", r);
        return r;
    }
}
exports.CryptoUtil = CryptoUtil;
