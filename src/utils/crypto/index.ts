/**
 * Author: Meng
 * Date: 2022-03-09
 * Desc:
 */
import { AES, enc, } from 'crypto-js';

const aes_key = 'AKw63nTLSIfSVZpfyTRAchZJ6j9RJqpJ'; // AKw63nTLSIfSVZpfyTRAchZJ6j9RJqpJ

// 加密
export function aesEncrypt(str: string) {

  return AES.encrypt(str, aes_key).toString();
}

// 解密
export function aesDecrypt(str: string) {
  let data=''
  try {
    data = AES.decrypt(str, aes_key).toString(enc.Utf8);
  } catch (error) {
    console.log(error);
    data = '';
  }
  return data;
}
