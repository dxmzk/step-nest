/**
 * Author: Meng
 * Date: 2023-08-10
 * Modify: 2023-08-10
 * Desc: 商品规格表
 */

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('goods_sku')
export class GoodsSkuEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  goods_id: number;

  @Column({ type: 'varchar', length: 12 })
  sku_code: string; // 规格code

  @Column({ type: 'varchar', length: 50 })
  sku_name: string; // 规格名称

  @Column({ type: 'varchar', length: 60 })
  describe: string; // 描述

  @Column({ type: 'varchar', length: 100 })
  cover: string; // 封面

  @Column({ type: 'varchar', length: 100 })
  imgs: string; // 

  @Column({ type: 'varchar', length: 50 })
  img_host: string; // 图片域名

  @Column({ type: 'varchar', length: 60 })
  memo: string; // 备注

  @Column({ type: 'int' })
  price: number; // 价格

  @Column({ type: 'int' })
  stock: number; // 库存

  @Column({ type: 'int' })
  sales: number; // 销量

  @Column({ type: 'int' })
  unit_id: number; // 单位

  @Column({ type: 'varchar', length: 19 })
  create_date: string;
}
