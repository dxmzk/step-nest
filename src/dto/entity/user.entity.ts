/**
 * Create By: Meng
 * Create Date: 2022-03
 * Desc:
 */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  // UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: "varchar", default: '', length: 24 })
  uid: string; //

  @Column({ type: 'int', default: 0 })
  pid: number; // 密码id

  @Column({type: "varchar", default: '', length: 50 })
  nickname: string; // 昵称

  @Column({type: "varchar", default: '', length: 32 })
  name: string; // 账号名

  @Column({type: "varchar", default: '', length: 32 })
  email: string; // 邮箱

  @Column({type: "varchar", default: '', length: 16 })
  phone: string; // 手机号

  @Column({type: "varchar", default: '1', length: 64 })
  icon: string; // 头像

  @Column({type: "varchar", default: '1', length: 64 })
  bgimg: string; // 背景图

  @Column({type: "varchar", default: '', length: 64 })
  city: string; // 城市

  @Column({type: "varchar", default: '', length: 200 })
  about: string; // 简介

  @Column({type: "varchar", default: '', length: 64 })
  link: string; // 个人链接

  @Column({ type: 'int', default: 0 })
  medal: number; // 勋章

  @Column({type: 'int', default: 0 })
  bridge: number; // 平台

  @Column({ type: 'int', default: 0 })
  age: number;

  @Column({ type: 'int', default: 0 })
  sex: number;

  @Column({ type: 'int', default: 0 })
  status: number; // 状态

  @Column({ type: 'int', default: 0 })
  tag: number; // 类型

  @Column({ type: 'int', default: 0 })
  grade: number; // 等级

  @Column({ type: 'int', default: 9 })
  role: number; // 角色从 9 开始

  @Column({type: "varchar", default: '', length: 100 })
  token: string;

  @Column({ type: 'int', default: 1 })
  day: number; // 连续登录天数

  @Column({type: "varchar", default: '', length: 20 })
  create_date: string; // 创建日期 xxxx-MM-dd hh:mm:ss

  // @UpdateDateColumn() // 自动更新实体日期
  @Column({ type: 'bigint', default: 0 })
  last_time: number; // 上次登录日期 时间戳
}
