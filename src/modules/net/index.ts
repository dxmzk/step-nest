/**
 * Author: Meng
 * Date: 2022-03-09
 * 网络请求封装
 */

import { network } from './axios';
import { getRequestHost, mergeHeaders, mergeParams } from './config';

export interface Result {
  message: string;
  code: number;
  data: any;
  header?: any;
}

/**
 * 网络请求
 * @param param: RequestParams
 */
export function request({
  url = '',
  method = 'GET',
  data = {},
  headers = {},
  host = null,
  env = null,
  reload = false,
  count = 1,
  maxCount = 5,
} = {}): Promise<Result> {
  const url2 = `${getRequestHost(host, env)}${url}`;
  const data2 = mergeParams(data);
  const headers2 = mergeHeaders(headers);

  const options = { url: url2, data: data2, headers: headers2, method };

  // 发起网络
  return new Promise((resolve) => {
    const result = { code: -1, data: '', message: '', headers: null };
    // console.log(options)
    network(options)
      .then((res: any) => {
        _parseData(res, result);
      })
      .catch((err: any) => {
        _parseErr(err, result);
      })
      .finally(() => {
        // 请求重连
        if (result.code != 0 && reload && count < maxCount) {
          count += 1;
          request({
            url,
            method,
            data,
            headers,
            host,
            env,
            reload,
            count,
            maxCount,
          });
        } else {
          resolve(result);
        }
      });
  });
}

// 解析数据
function _parseData(res: any, result: Result) {
  if (res.status == 200) {
    result.data = res.data;
    result.code = 0;
    result.message = 'ok';
  }
  // console.log(res.data);
  return result;
}

// 解析错误日志
function _parseErr(err: any, result: Result) {
  return result;
}
