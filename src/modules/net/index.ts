/**
 * Author: Meng
 * Date: 2022-01
 * 网络请求封装
 */
import { requestHeader, requestParams, requestHost, ENV_CONST } from './config';
import { network } from './fetch';

export interface Result {
  message: string;
  code: number;
  data: any;
  header?: any;
}

// 网络请求
export function request({host = 'base', path = '', method = 'GET', data = {}, headers = {}, toast = true, loading = true, loadStr = '加载中...' } = {}): Promise<Result> {

  loading && _showLoading(loading, loadStr); // 加载框
  const url = requestHost(host) + path; // 地址拼接
  headers = requestHeader(headers); // 请求头处理
  data = requestParams(data); // 参数处理

  const options: any = { url, method, headers, path, body: data }; // 参数重组

  _pointLog('-----------> Request <-----------', options);
  return new Promise((resolve) => {
    let result: Result = { message: '', code: -1, data: null, header: {} };
    network(options).then((res) => {
      _pointLog('-----------> Response <-----------', res.data);
      if (res.statusCode == 200) {
        result = _parseData(res, result)
        resolve(result);
      } else {
        result = _parseError(res, result)
        resolve(result);
      }
    }).catch((err) => {
      _pointLog('-----------> Error <-----------', err);
      result = _parseError(err, result)
      resolve(result);
    }).finally(() => {
      loading && _showLoading(false);
      if (toast && result.code != 0) {
        _showToast(result.message);
      }
    })
  });
}

// 解析response
function _parseData(res: any, result: Result): Result {
  result.data = res.data;
  result.header = res.header;
  result.code = 0;
  return result;
}

// 解析错误
function _parseError(data: any, result: Result): Result {
  if (data.statusCode) {
    result.code = data.statusCode;
    result.message = data.errMsg;
  } else if (data.errMsg) {
    result.code = -10101;
    result.message = data.errMsg;
  }
  return result;
}

// toast
function _showToast(title = '', icon = 'none') {
  console.log(title, icon);
}
// 加载框
function _showLoading(loading: boolean, title = '加载中...') {

  if (loading) {
    // 显示
    console.log(title);
  } else {
    // 隐藏
  }
}

// 日志
function _pointLog(tag: string, msg: string) {
  if (ENV_CONST.env != 'prod') {
    console.log(tag);
    console.log(msg);
  }
}
