/**
 * Create By: Meng
 * Create Date: 2022-03
 * Desc:
 */
import { AES, enc } from 'crypto-js';

const AES_KEY = 'ASD12J31KJ2B3ZCKJXUY5ZO2';

// 加密
export function aesEncrypt(str: string) {
  return AES.encrypt(str, AES_KEY).toString();
}

// 解密
export function aesDecrypt(str: string) {
  let data=''
  try {
    data = AES.decrypt(str, AES_KEY).toString(enc.Utf8);
  } catch (error) {
    console.log(error);
    data = '';
  }
  return data;
}