/**
 * Author: Meng
 * Date: 2022-07-10
 * Desc:
 */
import { request, Result } from '../index';

// 获取图片资源
export function queryPexelPhotos(page = 1, size = 20): Promise<Result> {
  return request({
    url: `/curated?page=${page}&per_page=${size}`,
    method: 'GET',
    host: 'pexels',
  });
}
// 搜索图片
export function searchPexelPhotos(
  key = 'nature',
  page = 1,
  size = 20,
): Promise<Result> {
  return request({
    url: `/search?query=${key}&page=${page}&per_page=${size}`,
    method: 'GET',
    host: 'pexels',
  });
}

// 获取精选
export function hotPexelPhotos(page = 20): Promise<Result> {
  return request({
    url: `/curated?per_page=${page}`,
    method: 'GET',
    host: 'pexels',
  });
}

// 获取单张图片信息
export function pexelPhotoInfo(id = 1): Promise<Result> {
  return request({
    url: `/photos/${id}`,
    method: 'GET',
    host: 'pexels',
  });
}
