/**
 * Author: Meng
 * Date: 2023-08-10
 * Modify: 2023-08-10
 * Desc: 优惠券
 */

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('coupon')
export class CouponEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  title: string; // 标题

  @Column({ type: 'varchar', length: 60 })
  describe: string; // 描述

  @Column({ type: 'int' })
  tag: number; // 标记

  @Column({ type: 'int' })
  sum: number; // 金额

  @Column({ type: 'int' })
  amount: number; // 使用金额

  @Column({ type: 'int' })
  discount: number; // 折扣

  @Column({ type: 'varchar', length: 19 })
  create_date: string; // 创建时间

  @Column({ type: 'varchar', length: 19 })
  start_date: string; // 开始时间

  @Column({ type: 'varchar', length: 19 })
  end_date: string; // 结束时间
}
