/**
 * Author: Meng
 * Date: 2022-03-09
 * Desc:
 */

import AppException from "../modules/exception/AppException";

export default class ResultData {
  code = 0;
  message = '请求失败';
  data = null;

  static success(data: any) {
    return new ResultData(0, '成功', data);
  }

  static list(
    list: Array<any>,
    totalNum: number,
    pageSize: number,
    pageNum: number,
  ) {
    const hasMore = totalNum > pageSize * pageNum;
    const totalPage = Math.ceil(totalNum / pageSize);

    const data = {
      list,
      totalNum,
      totalPage,
      pageSize,
      pageNum,
      hasMore,
    };
    return ResultData.success(data);
  }

  static fail(code: number, message: string) {
    return new ResultData(code, message, null);
  }

  static error(error: AppException) {
    return new ResultData(error.code, error.message, null);
  }

  constructor(code: number, message: string, data: any) {
    this.code = code;
    this.message = message;
    this.data = data;
  }
}
