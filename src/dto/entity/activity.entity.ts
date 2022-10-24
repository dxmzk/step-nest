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
export class Activity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 64 })
  name: string; // 名字

  @Column({ type: "varchar", length: 100 })
  url: string; // 资源

  @Column({ type: "varchar" })
  desc: string; // 活动说明

  @Column({ type: "varchar" })
  guide: string; // 活动规则

  @Column({ type: "int", default: 0 })
  types: number; // 图片/视频

  @Column({ type: "int", default: 0 })
  tag: number; // 标签

  @Column({ type: "int", default: 0 })
  status: number; // 状态

  @Column({ type: "datetime" })
  create_time: string; // 创建日期 xxxx-MM-dd hh:mm:ss

  @Column({ type: "datetime" })
  start_time: string; // 创建日期 xxxx-MM-dd hh:mm:ss

  @Column({ type: "datetime" })
  end_time: string; // 创建日期 xxxx-MM-dd hh:mm:ss
}
