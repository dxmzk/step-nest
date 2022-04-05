/**
 * Create By: Meng
 * Create Date: 2022-03
 * Desc:
 */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  // UpdateDateColumn,
} from 'typeorm';
import { Author } from './author.entity';
import { Classify } from './classify.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: "varchar", default: '', length: 32 })
  code: string; // 

  @Column({type: "varchar", default: '', length: 64 })
  name: string; // 书名

  @Column({type: "varchar", default: '', length: 200 })
  desc: string; // 简介

  // @OneToMany(type => Author, author => author.book)
  // author: Author[]; // 作者

  @Column({type: 'int', default: 0 })
  size: number; // 大小 单位：kb

  @Column({type: "varchar", default: '1', length: 100 })
  cover: string; // 封面

  @Column({type: "varchar", default: '', length: 200 })
  about: string; // 导读

  @Column({type: "varchar", default: '', length: 100 })
  link: string; // 链接

  // @OneToMany(type => Classify, classify => classify.classify)
  // classify: Classify[]; // 类型 - 逗号分隔,如：1,2,3

  @Column({ type: 'int', default: 0 })
  format: number; // 格式 - txt,pdf

  @Column({type: 'int', default: 0 })
  tag: number; // 标记 

  @Column({ type: 'int', default: 0 })
  status: number; // 状态 - 0:可预览，1:可下载，2:不可下载，3:下架，4:删除

  @Column({ type: 'int', default: 0 })
  star: number; // 推荐星级 - 1-5

  @Column({ default: 0 })
  price: number; // 价格

  @Column({default: 0 })
  num: number; // 浏览次数

  @Column({default: 0 })
  collect: number; // 收藏次数

  @Column({type: "varchar", default: '', length: 20 })
  create_date: string; // 创建日期 xxxx-MM-dd hh:mm:ss

}
