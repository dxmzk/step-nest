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
} from "typeorm";

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", default: "", length: 24 })
  code: string; //

  @Column({ type: "varchar", default: "", length: 50 })
  nickname: string; // 昵称

  @Column({ type: "varchar", length: 24 })
  account: string; // 账号名

  @Column({ type: "varchar", default: "", length: 50 })
  email: string; // 邮箱

  @Column({ type: "varchar", default: "1", length: 100 })
  icon: string; // 头像

  @Column({ type: "varchar", default: "1", length: 100 })
  style: string; // 背景图

  @Column({ type: "varchar", default: "", length: 64 })
  city: string; // 城市

  @Column({ type: "varchar", default: "", length: 200 })
  about: string; // 简介

  @Column({ type: "varchar", default: "", length: 200 })
  memo: string; // 备注

  @Column({ type: "int", default: 0 })
  level: number;

  @Column({ type: "int", default: 0 })
  status: number; // 状态

  @Column({ type: "int", default: 0 })
  tag: number; // 类型

  @Column({ type: "int", default: 0 })
  grade: number; // 等级

  @Column({ type: "int", default: 9 })
  roles: number; // 角色从 9 开始

  @Column({ type: "int", default: 0 })
  score: number; // 积分

  @Column({ type: "date" })
  birth: string; // 出生年月日

  @Column({ type: "datetime" })
  create_time: string; // 创建日期 xxxx-MM-dd hh:mm:ss

  // @UpdateDateColumn() // 自动更新实体日期
  @Column({ type: "datetime" })
  last_time: string; // 上次登录日期 时间戳
}
