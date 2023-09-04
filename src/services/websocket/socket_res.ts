/**
 * Author: Meng
 * Date: 2023-
 * Desc:
 */

export class SocketRes {
  code = 0;
  msg = '请求失败';
  data = null;

  constructor(code: number, message: string, data: any) {
    this.code = code;
    this.msg = message;
    this.data = data;
  }

  static succee(data: any) {
    return new SocketRes(0, '成功', data);
  }

  static fail(data: any) {
    return new SocketRes(0, '成功', data);
  }
}

export class SendDto {
  event: string;
  fromId: string;
  toId: string;
  tag: number;
  status: number;
  data: any;

  constructor(
    fromId: string,
    toId: string,
    data: any,
    tag?: number,
    status?: number,
  ) {
    this.fromId = fromId;
    this.toId = toId;
    this.data = data;
    this.tag = tag;
    this.status = status;
  }
}

export interface MsgEntity {
  event: string;
  fromId: string;
  toId: string;
  tag: number;
  status: number;
  data: any;
}
