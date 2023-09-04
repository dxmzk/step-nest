/**
 * Author: Meng
 * Date: 2022-03-09
 * Desc: token生成与解析
 */

import { JwtService } from '@nestjs/jwt';
import Constants from 'src/config/constants';
import { jwt_options } from 'src/modules/auth/auth_config';
import CommonError from 'src/modules/exception/CommonError';
import Log3 from 'src/modules/log/Log3';

interface TokenObj {
  uid: number;
  time: number;
}

const jwtService = new JwtService({ global: true }); //

/** 生成Token */
export function createToken(uid: number) {
  const time = Date.now();
  let token = '';
  try {
    token = jwtService.sign({ uid, time }, jwt_options);
  } catch (error) {
    Log3.ex(error, 'createToken');
    throw CommonError.AUTH_ERROR;
  }
  return token;
}

/** 解析Token */
export function parseToken(token: string): TokenObj | null {
  let info: TokenObj | null; // TokenObj
  try {
    info = jwtService.decode(token) as TokenObj;
  } catch (error) {
    Log3.ex(error, 'parseToken');
    throw CommonError.TOKEN_ERROR;
  }
  const interval = (Date.now() - info.time) / 60000;
  if (interval > Constants.token_valid_time) {
    throw CommonError.TOKEN_OUT;
  }
  return info;
}
