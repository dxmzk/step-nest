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
export class Activity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: "varchar", default: '', length: 64 })
  name: string; // 名字

  @Column({type: "varchar", default: '', length: 100 })
  url: string; // 资源

  @Column({type: "varchar", default: '' })
  desc: string; // 活动说明

  @Column({type: "varchar", default: '' })
  guide: string; // 活动规则

  @Column({type: "int", default: 0 })
  type: number; // 视频/图片

  @Column({type: "int", default: 0 })
  tag: number; // 标签

  @Column({type: "int", default: 0 })
  status: number; // 状态

  @Column({type: "varchar", default: '', length: 20 })
  create_date: string; // 创建日期 xxxx-MM-dd hh:mm:ss

  @Column({type: "varchar", default: '', length: 20 })
  start_date: string; // 创建日期 xxxx-MM-dd hh:mm:ss

  @Column({type: "varchar", default: '', length: 20 })
  end_date: string; // 创建日期 xxxx-MM-dd hh:mm:ss
}
