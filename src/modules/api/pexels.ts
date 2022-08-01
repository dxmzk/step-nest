/**
 * Author: Meng
 * Date: 2022-07-10
 * Desc:
 */
import { request, Result } from "../net/index";

// 获取图片资源
export function queryPhotos(page = 1, size = 20): Promise<Result> {
  return request({
    path: `/curated?page=${page}&per_page=${size}`,
    method: "GET",
    host: 'pexels'
  });
}
// 搜索图片
export function searchPhotos(key = "nature", page = 1, size = 20): Promise<Result> {
  return request({
    path: `/search?query=${key}&page=${page}&per_page=${size}`,
    method: "GET",
    host: 'pexels'
  });
}

// 获取精选
export function getHotPhotos(page = 1): Promise<Result> {
  return request({
    path: `/curated?per_page=${page}`,
    method: "GET",
    host: 'pexels'
  });
}

// 获取单张图片信息
export function getPhotoInfo(id = 1): Promise<Result> {
  return request({
    path: `/photos/${id}`,
    method: "GET",
    host: 'pexels'
  });
}
