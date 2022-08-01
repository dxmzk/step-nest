/**
 * Author: Meng
 * Date: 2022-07-13
 * 网络配置项
 */

enum ENV_NAME {
  PROD = 'prod',
  TEST = 'test',
  DEV = 'dev'
}

export const ENV_CONST = {
  PKEY: '563492ad6f91700001000001c79e2acd5ad3461baf2cb018a7d70f48', // pexels key
  AMAP: "4e013fcd32723446a88ce0880c425a88", // 高德地图key
  // env: ENV_NAME.PROD,
  env: ENV_NAME.TEST,
  // env: ENV_NAME.DEV,
}

export function requestHost(host = 'base') {
  const env = ENV_CONST.env;
  const url = _ENV_HOST[env][host];
  return url;
}

export function requestHeader(header = {}) {
  return {
    ...header,
    Authorization: ENV_CONST.PKEY,
    token: ''
  };
}

export function requestParams(params = {}) {
  return {
    ...params,
  };
}

const _ENV_HOST: any = {
  prod: {
    base: 'https://prodbase123.com',
    auth: 'https://prodauth123.com',
    pexels: 'https://api.pexels.com/v1',

  },
  test: {
    base: 'https://testase123.com',
    auth: 'https://testauth123.com',
    pexels: 'https://api.pexels.com/v1',
  },
  dev: {
    base: '/axio',
    auth: '/apis',
    pexels: '/pexels',
  },
}