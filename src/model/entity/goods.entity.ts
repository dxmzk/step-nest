/**
 * Author: Meng
 * Date: 2023-08-10
 * Modify: 2023-08-10
 * Desc: 商品主表
 */

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { GoodsBody } from '../body/index';
import { formatNowDate } from 'src/utils/time/format';

@Entity('goods')
export class GoodsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 12 })
  code: string; // 编号

  @Column({ type: 'varchar', length: 50 })
  title: string; // 标题

  @Column({ type: 'varchar', length: 60 })
  describe: string; // 描述

  @Column({ type: 'varchar', length: 100 })
  cover: string; // 封面图

  @Column({ type: 'varchar', length: 60 })
  memo: string; // 备注

  @Column({ type: 'int' })
  sort: number; // 分类

  @Column({ type: 'int' })
  status: number; // 状态

  @Column({ type: 'int' })
  tag: number; // 标记

  @Column({ type: 'int' })
  price: number; // 价格

  @Column({ type: 'int' })
  min_price: number; // 价格

  @Column({ type: 'int' })
  def_sku: number; // 默认sku

  @Column({ type: 'varchar', length: 19 })
  create_date: string; //

  public static create(body: GoodsBody): GoodsEntity {
    const goods = new GoodsEntity();
    goods.create_date = formatNowDate();
    goods.def_sku = 0;
    
    for (const key in body) {
        goods[key] = body[key];
    }
    return goods;
  }
}
