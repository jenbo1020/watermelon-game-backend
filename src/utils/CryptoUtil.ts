import * as crypto from 'crypto';
export class CryptoUtil {
  /**
   * md5加密
   * @param data 被加密的字符串
   * @returns 加密后的数据
   */
  static md5Encrypt(data: string): string {
    try {
      const md5 = crypto.createHash('md5');
      const md5Str = md5.update(data, 'utf8').digest('hex');
      return md5Str;
    } catch (ex) {
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
  static aesEncrypt(data: string, key: string, iv: string, algorithm: string): string {
    // 实例化一个cipher加密对象，key作为密钥
    try {
      const cipher = crypto.createCipheriv(algorithm, key, iv);
      // 使用cipher对data进行加密，源数据类型为utf-8，输出数据类型为hex
      let encrypted = cipher.update(data, 'utf8', 'hex');
      encrypted += cipher.final('hex');
      return encrypted;
    } catch (ex) {
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
  static aesDecrypt(encrypted: string, key: string, iv: string, algorithm: string): string {
    // 实例化一个decipher解密对象，key作为密钥
    try {
      const decipher = crypto.createDecipheriv(algorithm, key, iv);
      // 使用decipher对encrypted进行解密，源数据类型为hex，输出数据类型为utf-8
      let decrypted = decipher.update(encrypted, 'hex', 'utf8');
      decrypted += decipher.final('utf8');
      return decrypted;
    } catch (ex) {
      // console.log('aesDecrypt error=>', ex)
      return '';
    }
  }

  static aesEncrypt2(data: string, key: string, iv: string): string {
    console.log('aesConfig', key, iv);
    const crypto = require('./encrypt');
    const r = crypto.AES.encrypt(data, key, {
      iv: iv,
    }).toString();
    // console.log("aesEncrypt2 rrrr", r);
    return r;
  }

  static aesDecrypt2(encrypted: string, key: string, iv: string) {
    const crypto = require('./encrypt');
    const decrypted = crypto.AES.decrypt(encrypted, key, {
      iv: iv,
    });
    const r = decrypted.toString(crypto.enc.Utf8);
    // console.log("aesDecrypt", r);
    return r;
  }
}
