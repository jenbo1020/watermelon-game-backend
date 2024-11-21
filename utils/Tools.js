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
exports.Tools = void 0;
const crypto = __importStar(require("crypto"));
const config_1 = __importDefault(require("../config"));
const moment_1 = __importDefault(require("moment"));
class Tools {
    /**
     * 获取区间内的数字
     * @param min 最小数字
     * @param max 最大数字
     * @returns
     */
    static getRandoms(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    /**
     * 获取随机字母
     * @param len 长度，默认16
     * @returns
     */
    static getRandomLetters(len = 16) {
        // const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const maxPos = chars.length;
        let str = '';
        for (let i = 0; i < len; i++) {
            str += chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return str;
    }
    /**
     * 获取随机数字
     * @param len 长度，默认16
     * @returns
     */
    static getRandomNumbers(len = 16) {
        const chars = '123456780';
        const maxPos = chars.length;
        let str = '';
        for (let i = 0; i < len; i++) {
            str += chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return str;
    }
    /**
     * 获取随机数字+字母
     * @param len 长度，默认16
     * @returns
     */
    static getRandomNumbersAndLetters(len = 16) {
        const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
        const maxPos = chars.length;
        let str = '';
        for (let i = 0; i < len; i++) {
            str += chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return str;
    }
    /**
     * md5加密
     * @param data 被加密的字符串
     * @returns 加密后的数据
     */
    static md5Encrypt(data) {
        const md5 = crypto.createHash('md5');
        const md5Str = md5.update(data, 'utf-8').digest('hex');
        return md5Str;
    }
    /**
     * AES加密
     * @param data 源数据
     * @param key 密钥
     * @returns 加密后的数据
     */
    static aesEncrept(data) {
        //实例化一个cipher加密对象，key作为密钥
        const key = Buffer.from(config_1.default.aesConfig.key, 'utf-8');
        const iv = Buffer.from(config_1.default.aesConfig.iv, 'utf-8');
        const cipher = crypto.createCipheriv(config_1.default.aesConfig.algorithm, key, iv);
        //使用cipher对data进行加密，源数据类型为utf-8，输出数据类型为hex
        let crypted = cipher.update(data, "utf-8", "hex");
        crypted += cipher.final("hex");
        return crypted;
    }
    /**
     * AES解密
     * @param encrepted 待解密数据
     * @param key 密钥
     * @returns 解密后的数据
     */
    static aesDecrept(encrepted) {
        //实例化一个decipher解密对象，key作为密钥
        const key = Buffer.from(config_1.default.aesConfig.key, 'utf-8');
        const iv = Buffer.from(config_1.default.aesConfig.iv, 'utf-8');
        const decipher = crypto.createDecipheriv(config_1.default.aesConfig.algorithm, key, iv);
        //使用decipher对encrepted进行解密，源数据类型为hex，输出数据类型为utf-8
        let decrypted = decipher.update(encrepted, "hex", "utf-8");
        decrypted += decipher.final("utf-8");
        return decrypted;
    }
    /**
     * 获取当前时间在哪个时间区部
     * @param time 开始时间，时间戳
     * @param interval 间隔，天
     * @returns
     */
    static getTimeInterval(time, interval) {
        const now = (0, moment_1.default)();
        const startDate = (0, moment_1.default)(time);
        let startTime = time;
        let endDate = startDate.add(interval, 'days');
        while (endDate < now) {
            startTime = endDate.valueOf();
            endDate.add(interval, 'days');
        }
        return {
            startTime, endTime: endDate.valueOf()
        };
    }
    /**
    * 休眠
    * @param ms 毫秒
    * @returns
    */
    static sleep(time) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({});
            }, time);
        });
    }
}
exports.Tools = Tools;
