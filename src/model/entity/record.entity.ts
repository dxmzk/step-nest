/**
 * Author: Meng
 * Date: 2023-08-10
 * Modify: 2023-08-10
 * Desc: 操作/记录
 */

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('record')
export class RecordEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  title: string;

  @Column({ type: 'int' })
  tag: number; // 类型

  @Column({ type: 'int' })
  value: number; // 操作管理id

  @Column({ type: 'varchar', length: 19 })
  create_date: string;
}
