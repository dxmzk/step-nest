/**
 * Author: Meng
 * Date: 2022-03-09
 * Desc: 异常类
 */

import { HttpException } from '@nestjs/common';

export default class AppException extends HttpException {
  constructor(public msg: string, public code: number) {
    // super('Bad Request', HttpStatus.BAD_REQUEST);
    super(msg, code);
  }

  // 创建 generate
  public static gen(msg: string, code: number): AppException {
    return new AppException(msg, code);
  }
}
