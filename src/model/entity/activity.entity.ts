/**
 * Author: Meng
 * Date: 2023-08-10
 * Modify: 2023-08-10
 * Desc: 活动
 */

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('activity')
export class ActivityEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  title: string;

  @Column({ type: 'varchar', length: 60 })
  describe: string;

  @Column({ type: 'varchar', length: 100 })
  cover: string; // 封面

  @Column({ type: 'int'})
  value: number; // 活动值，优惠券，新品通知，福利

  @Column({ type: 'int' })
  mold: number; // 类型

  @Column({ type: 'varchar', length: 19 })
  create_date: string;

  @Column({ type: 'varchar', length: 19 })
  start_date: string;

  @Column({ type: 'varchar', length: 19 })
  end_date: string;
}
