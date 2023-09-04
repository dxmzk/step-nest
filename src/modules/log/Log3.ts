/**
 * Author: Meng
 * Date: 2023-08-09
 * Modify: 2023-08-09
 * Desc: 日志类
 */
export default class Log3 {
  private static TAG = 'Log3Tag';

  public static i(msg: string | number, tag?: string | null) {
    console.log(tag || this.TAG, msg);
  }

  public static d(msg: string | number, tag?: string | null) {
    console.debug(tag || this.TAG, msg);
  }

  public static e(msg: string | number, tag?: string | null) {
    console.error(tag || this.TAG, msg);
  }

  public static ex(e: Error | any, tag?: string | null) {
    console.error(tag || this.TAG, e);
  }

  public static w(msg: string | number, tag?: string | null) {
    console.warn(tag || this.TAG, msg);
  }

  public static s(msg: string | number, tag?: string | null) {}
}
