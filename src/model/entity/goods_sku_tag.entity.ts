/**
 * Author: Meng
 * Date: 2023-08-10
 * Modify: 2023-08-10
 * Desc: 商品规格和商品标签中间表
 */

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('goods_sku_tag')
export class GoodsSkuTagEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  sku: number; // 商品规格id

  @Column({ type: 'int' })
  tag: number; // 商品特征id
}
