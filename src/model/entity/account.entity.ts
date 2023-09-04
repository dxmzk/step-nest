/**
 * Author: Meng
 * Date: 2022-03-09
 * Desc:
 */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { RegisterBody } from '../body/index';
import { formatDate, formatNowDate } from 'src/utils/time/format';

@Entity('account')
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', default: '', length: 20 })
  pwd: string;

  @Column({ type: 'varchar', default: '', length: 20 })
  nickname: string; // 昵称

  @Column({ type: 'varchar', length: 16 })
  account: string; // 账号名

  @Column({ type: 'varchar', default: '', length: 30 })
  email: string; // 邮箱

  @Column({ type: 'varchar', default: '', length: 11 })
  phone: string; // 手机号

  @Column({ type: 'varchar', default: '', length: 50 })
  about: string; // 简介

  @Column({ type: 'varchar', default: '', length: 10 })
  birth: string; // 出生年月日

  @Column({ type: 'varchar', default: '', length: 8 })
  share_code: string; // 分享码

  @Column({ type: 'varchar', default: '', length: 100 })
  icon: string; // 头像

  @Column({ type: 'varchar', default: '', length: 20 })
  city: string; // 城市

  @Column({ type: 'int', default: 0 })
  bg: string; // 背景图

  @Column({ type: 'int', default: 0 })
  level: number;

  @Column({ type: 'int', default: 0 })
  status: number; // 状态

  @Column({ type: 'int', default: 0 })
  tag: number; // 类型

  @Column({ type: 'int', default: 0 })
  channel: number; // 类型

  @Column({ type: 'int', default: 0 })
  grade: number; // 等级

  @Column({ type: 'int', default: 9 })
  roles: number; // 角色从 9 开始

  @Column({ type: 'int', default: 0 })
  score: number; // 积分

  @Column({ type: 'varchar', default: '', length: 19 })
  create_time: string; // 创建日期 xxxx-MM-dd hh:mm:ss

  // @UpdateDateColumn() // 自动更新实体日期
  @Column({ type: 'varchar', default: '', length: 19 })
  last_time: string; // 上次登录日期

  public static create(body: RegisterBody): Account {
    const account = new Account();

    account.pwd = body.password;
    account.icon = body.icon;
    account.email = body.email;
    account.account = body.email.split('@')[0];
    account.nickname = body.nickname;
    account.channel = body.channel || 0;
    account.share_code = body.share || '';
    account.create_time = formatNowDate();
    account.last_time = account.create_time;

    account.roles = 9;
    account.level = 0;
    account.channel = 0;
    account.grade = 0;
    account.score = 0;

    return account;
  }
}
