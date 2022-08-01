/**
 * Author: Meng
 * Date: 2022-03
 * Desc: 
 */
interface Option extends RequestInit  {
  env: String; 
  host?: String;
  url: string;
  files?: Array<String>;
  type?: String;
}

// 请求
export function network(options: Option): Promise<any> {
  if(options.method == 'GET') {
    delete options.body;
  }
  return fetch(options.url, options)
    .then((data) => data.json());
}

// 下载
export function download(options: Option): Promise<any> {
  return fetch(options.url, options)
    // .then((data) => data.blob())
    .then((data) => data.blob() || data.json());
}

export default {
  network,
  download
}