/**
 * Create By: Meng
 * Create Date: 2022-03
 * Desc: 
 */

import { aesEncrypt, aesDecrypt } from "./crypto";

export function createToken(uid: number, name: string) {
  
  return aesEncrypt(`${uid};${name}`);
}

export function parasToken(token: string) {
  const res = {uid: 0, name: ''};
  if(token) {
      const info = aesDecrypt(token);
      if(token.indexOf(';') > 0) {
        const ds = info.split(';');
        res.uid = parseInt(ds[0]);
        res.name = ds[1];
      }
  }
  return res;
}