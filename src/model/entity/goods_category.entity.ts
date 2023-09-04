/**
 * Author: Meng
 * Date: 2023-08-10
 * Modify: 2023-08-10
 * Desc: 商品类型/分类
 */

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('goods_category')
export class GoodsCategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  cover: string; // 封面图

  @Column({ type: 'varchar', length: 20 })
  title: string;

  @Column({ type: 'varchar', length: 19 })
  create_date: string;
}
