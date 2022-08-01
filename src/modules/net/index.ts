/**
 * Author: Meng
 * Date: 2022-01
 * 网络请求封装
 */
import { requestHeader, requestParams, requestHost } from './config';
import { network } from './axios';

export interface Result {
  message: string;
  code: number;
  data: any;
  header?: any;
}

// 网络请求
export function request({host = 'base', url = '', method = 'GET', data = {}, headers = {} } = {}): Promise<Result> {

  const baseURL = requestHost(host); // 地址拼接
  headers = requestHeader(headers); // 请求头处理
  data = requestParams(data); // 参数处理

  const options: any = { baseURL, url, method, headers, data }; // 参数重组

  _pointLog('-----------> Request <-----------', options);
  return new Promise((resolve) => {
    let result: Result = { message: '', code: -1, data: null, header: {} };
    network(options).then((res) => {
      _pointLog('-----------> Response <-----------', res.data);
      if (res.status == 200) {
        _parseData(res, result);
        resolve(result);
      } else {
         _parseError(res, result)
        resolve(result);
      }
    }).catch((err) => {
      _pointLog('-----------> Error <-----------', err);
      _parseError(err, result)
      resolve(result);
    })
  });
}

// 解析response
function _parseData(res: any, result: Result) {
  result.data = res.data;
  result.header = res.header;
  result.code = 0;
  // return result;
}

// 解析错误
function _parseError(data: any, result: Result) {
  if (data.statusCode) {
    result.code = data.statusCode;
    result.message = data.errMsg;
  } else if (data.errMsg) {
    result.code = -10101;
    result.message = data.errMsg;
  }
  // return result;
}

// 日志
function _pointLog(tag: string, msg: string) {
  // if (ENV_CONST.env != 'prod') {
  //   console.log(tag);
  //   console.log(msg);
  // }
}
