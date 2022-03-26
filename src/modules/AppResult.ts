/**
 * Create By: Meng
 * Create Date: 2022
 * Desc:
 */

export default class AppResult {
  code = 0;
  message = '请求失败';
  data = null;

  static succee(data: any) {
    return new AppResult(0, '成功', data);
  }

  static list(
    list: Array<any>,
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
    return AppResult.succee(data);
  }

  static fail(code: number, message: string) {
    return new AppResult(code, message, null);
  }

  static error(code: number, message: string) {
    return new AppResult(code, message, null);
  }

  constructor(code: number, message: string, data: any) {
    this.code = code;
    this.message = message;
    this.data = data;
  }
}
