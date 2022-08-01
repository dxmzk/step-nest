/**
 * Create By: Meng
 * Create Date: 2022-03
 * Desc: 
 */

export class Author {
  readonly name: string;
  readonly desc: string; // 简介
  readonly icon: string; // 头像
  readonly about: string; // 关于
  readonly link: string; // 链接
  readonly tag: number; // 标记
  readonly classify: number; // 类型
  readonly birth: string; // 出生日期
}

export class Book {
  readonly name: string; // 书名
  readonly desc: string; // 简介
  readonly author: string; // 作者
  readonly cover: string; // 封面
  readonly about: string; // 导读
  readonly format: number; // 格式
  readonly tag: number; // 标记 
  readonly classify: number; // 类型
  readonly star: number; // 推荐星级
  readonly price: number; // 价格
}
