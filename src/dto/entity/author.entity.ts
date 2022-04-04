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
import { Book } from './book.entity';

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: "varchar", default: '', length: 32 })
  code: string; // 

  @Column({type: "varchar", default: '', length: 64 })
  name: string; // 名字

  @Column({type: "varchar", default: '', length: 200 })
  desc: string; // 简介

  @Column({type: "varchar", default: '1', length: 100 })
  icon: string; // 头像

  @Column({type: "varchar", default: '', length: 200 })
  about: string; // 关于

  @Column({type: "varchar", default: '', length: 100 })
  link: string; // 链接

  @Column({type: 'int', default: 0 })
  tag: number; // 标记

  @Column({ type: 'int', default: 0 })
  status: number; // 状态

  @Column({ type: 'int', default: 0 })
  classify: number; // 类型

  @Column({ type: 'int', default: 0 })
  star: number; // 推荐星级

  @Column({default: 0 })
  num: number; // 浏览次数

  @Column({default: 0 })
  fans: number; // 粉丝数
  
  @Column({type: "varchar", default: '', length: 20 })
  birth: string; // 出生日期

  @Column({type: "varchar", default: '', length: 20 })
  create_date: string; // 创建日期 xxxx-MM-dd hh:mm:ss

  @OneToMany(type => Book, book => book.author)
  book: Book;
}
