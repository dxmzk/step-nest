/**
 * Create By: Meng
 * Create Date: 2022-03
 * Desc:
 */

import { HttpException, HttpStatus } from "@nestjs/common";

export default class AppException extends HttpException {
  constructor(msg: string, code: number) {
    // super('Bad Request', HttpStatus.BAD_REQUEST);
    super(msg, code);
  }

  public static init(msg: string, code: number): AppException {
    return new AppException(msg, code);
  }
}