/**
 * Author: Meng
 * Date: 2022-03-09
 * Desc: 阿里云存储
 *
 */
import { Injectable } from '@nestjs/common';

import ResultData from 'src/model/ResultData';
import CommonError from 'src/modules/exception/CommonError';

// const OSS = require('ali-oss');
const app_folder = 'app_package';
const oss_bucket = 'app-store';

const headers = {
  'x-oss-storage-class': 'Standard', // 指定的存储类型。
  'x-oss-object-acl': 'public-read', // 指定的访问权限。
  'x-oss-tagging': 'Tag1=1&Tag=2', // 设置标签，可同时设置多个标签。
  'x-oss-forbid-overwrite': 'false', // 是否覆盖同名目标Object，true禁止覆盖。
};

@Injectable()
export class FileService {
  private _client: any;
  constructor() {
    // this._client = new OSS({
    //   region: '', // yourRegion填写Bucket所在地域
    //   accessKeyId: '',
    //   accessKeySecret: '',
    //   bucket: oss_bucket, // bucket名称
    //   secure: true, // 设置secure为true，则使用HTTPS；
    // });

    // this.ckeckBucketExist();
    // const timer = setTimeout(() => {
    //   clearTimeout(timer);
    //   this.ckeckBucketExist();
    // }, 10000);
  }

  // 上传方法
  async uploadAliOss(code: string, env: string, file: Express.Multer.File) {
    const name = file.originalname || '';
    let info = { url: '', filePath: '', name, code };
    let folder2 = 'zip';
    if (name.includes('.')) {
      folder2 = name.substring(name.lastIndexOf('.') + 1);
    }
    const objName = `${app_folder}/${env}/${folder2}/${code}/v${Date.now()}&${name}`;

    if (objName) {
      const res = await this.syncAppPath(objName, file);
      info.url = res?.url;
      info.filePath = objName;
    }

    // 同步 替换原始包
    const releasePag = `${app_folder}/${env}/${folder2}/${code}/${name}`;
    this.syncAppPath(releasePag, file);

    return ResultData.success(info);
  }
  async syncAppPath(objName: string, file: Express.Multer.File): Promise<any> {
    let res = null;
    try {
      res = await this._client.put(objName, file.buffer, { headers });
    } catch (error) {
      console.warn(error);
      throw CommonError.CUSTOM_ERROR(error);
    }
    return res;
  }

  // 检查是否存在，不存在创建
  async ckeckBucketExist() {
    // 指定存储空间名称。
    try {
      const res = await this._client.getBucketInfo(oss_bucket);
      // console.log(res.bucket);
      // this._client.putBucketACL(oss_bucket, 'public-read')
    } catch (err) {
      console.log(err);
      if (err.name == 'NoSuchBucketError') {
        const options = {
          storageClass: 'Standard',
          acl: 'public-read',
          dataRedundancyType: 'LRS',
        };
        try {
          this._client.putBucket(oss_bucket, options);
        } catch (error) {
          console.log(error);
        }
      }
    }
  }

  // 获取
  async listBuckets() {
    try {
      // 列举当前账号所有地域下的存储空间。
      const result = await this._client.listBuckets();
      // console.log(result);
    } catch (err) {
      console.log(err);
    }
  }

  // 删除
  async deleteBucket(name: string) {
    try {
      // 指定存储空间名称。
      const result = await this._client.deleteBucket(name);
      // console.log(result);
    } catch (err) {
      console.log(err);
    }
  }

  // 复制文件
  async copyFile(tagPath: string) {
    try {
      await this.deleteFile(tagPath); // 先删除
      let paths = tagPath.split('&');
      const len = paths[0].lastIndexOf('/') + 1;
      let newPath = paths[0].substring(0, len) + paths[1];
      let result = await this._client.copy(newPath, tagPath, oss_bucket);
      // console.log(tagPath, newPath);
    } catch (error) {
      console.log(error);
    }
  }

  // 删除文件
  async deleteFile(filePath: string) {
    try {
      let result = await this._client.delete(filePath); // 填写File完整路径。
      // console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
}
