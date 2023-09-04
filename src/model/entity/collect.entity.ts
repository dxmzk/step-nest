/**
 * Author: Meng
 * Date: 2023-08-10
 * Modify: 2023-08-10
 * Desc: 收藏
 */

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('collect')
export class CollectEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  tag: number; // 

  @Column({ type: 'int' })
  goods_id: number; // 商品id

  @Column({ type: 'varchar', length: 19 })
  create_date: string;
}
