export class EncryptUtil {
  // TODO 加密
  static encrypt(buf: Uint8Array): Uint8Array {
    console.log('加密...');
    for (let i = 0; i < buf.length; ++i) {
      buf[i] -= 1;
    }
    return buf;
  }

  // TODO 解密
  static decrypt(buf: Uint8Array): Uint8Array {
    for (let i = 0; i < buf.length; ++i) {
      buf[i] += 1;
    }
    return buf;
  }
}
