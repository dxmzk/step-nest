/**
 * Author: Meng
 * Date: 2022-07-13
 * 网络配置项
 */

import Constants, {RunEnv} from "../../config/constants";

export interface RequestParams {
  /** 请求地址 */
  url: string;
  /** 请求方法 */
  method?: string;
  /** 请求参数 */
  data?: object | string | undefined;
  /** 请求头 */
  headers?: object;
  /** 域名(服务) */
  host?: string;
  /** 请求环境 */
  env?: RunEnv;
  /** 是否请求重连 */
  reload?: boolean;
  /** 当前请求重连次数 */
  count?: number;
  /** 最大重连次数 */
  maxCount?: number;
  /** 请求类型 分为：text/blob/stream  browser only: 'blob' */
  responseType?: string;
}

// 常量配置
export const net_config = {
  env: Constants.run_env, // prod: 生产, test: 测试, dev: 开发
};

export function getRequestHost(host: string, env?: RunEnv) {
  const url = env_hosts[env || net_config.env][host || 'def'];
  return url;
}

export function mergeParams(params: any) {
  
  return params;
}

export function mergeHeaders(headers: any) {
  headers.token = '';
  headers.channel = 'node';
  return headers;
}

const env_hosts: any = {
  prod: {
    def: 'http://def.com',
    auth: 'http://auth.com',
    pexels: 'https://api.pexels.com/v1',
  },
  test: {
    def: 'http://def-test.com',
    auth: 'http://auth-test.com',
    pexels: 'https://api.pexels.com/v1',
  },
};
