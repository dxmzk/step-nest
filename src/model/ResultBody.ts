/**
 * Author: Meng
 * Date: 2022-03-09
 * Desc:
 */

import AppException from "../modules/exception/AppException";

export default class ResultBody<T> {
  code = 0;
  message = '请求失败';
  data = null;

  static success<T>(data: T) {
    return new ResultBody(0, '成功', data);
  }

  static list<T>(
    list: Array<T>,
    total: number,
    pageSize: number,
    pageNum: number,
  ) {
    const hasMore = total > pageSize * pageNum;
    const data = {
      list,
      total: 0,
      pageSize,
      pageNum,
      hasMore,
    };
    return ResultBody.success(data);
  }

  static fail(code: number, message: string) {
    return new ResultBody(code, message, null);
  }

  static error(error: AppException) {
    return new ResultBody(error.code, error.message, null);
  }

  constructor(code: number, message: string, data: T) {
    this.code = code;
    this.message = message;
    this.data = data;
  }
}
