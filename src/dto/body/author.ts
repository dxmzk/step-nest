/**
 * Create By: Meng
 * Create Date: 2022-03
 * Desc: 
 */

export class Author {
  name: string;
  desc: string; // 简介
  icon: string; // 头像
  about: string; // 关于
  link: string; // 链接
  tag: number; // 标记
  classify: number; // 类型
  birth: string; // 出生日期
}

export class Book {
  name: string; // 书名
  desc: string; // 简介
  author: string; // 作者
  cover: string; // 封面
  about: string; // 导读
  format: number; // 格式
  tag: number; // 标记 
  classify: number; // 类型
  star: number; // 推荐星级
  price: number; // 价格
}
