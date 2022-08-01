/**
 * Author: Meng
 * Date: 2022-07-10
 * Desc:
 */

import axios, { AxiosRequestConfig } from "axios";

const instance = axios.create({
  // baseURL: '',
  timeout: 20000, // 毫秒
  headers: { "Content-Type": "application/json; charset=utf-8" },
});

//  // 请求实体
export function network(options: AxiosRequestConfig): Promise<any> {
  //  instance.defaults.baseURL = options.host;
  return new Promise((resolve, reject) => {
    instance
      .request(options)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

//  // 请求实体
//  export function download(options) {

//    instance.defaults.headers = options.headers;

//    return new Promise((resolve, reject) => {
//      instance.request(options).then((response) => {
//        // const isBlob = options.responseType == 'blob';
//        // const data = isBlob ? data : data.result,
//        resolve(response);
//      }).catch((err) => {
//        reject(err);
//      })
//    });
//  }
