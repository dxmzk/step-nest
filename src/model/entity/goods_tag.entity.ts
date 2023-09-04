/**
 * Author: Meng
 * Date: 2023-08-10
 * Modify: 2023-08-10
 * Desc: 商品特征/标签表
 */

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('goods_tag')
export class GoodsTagEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  mold: number; // 类型

  @Column({ type: 'int' })
  unit: number; // 单位

  @Column({ type: 'varchar', length: 50 })
  title: string;

  @Column({ type: 'varchar', length: 19 })
  create_date: string;
}
