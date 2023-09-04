/**
 * Author: Meng
 * Date: 2023-08-10
 * Modify: 2023-08-10
 * Desc: 订单
 */

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('orders')
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 20 })
  code: string;

  @Column({ type: 'int' })
  tag: number; // 类型

  @Column({ type: 'float' })
  cost: number; // 支付金额
  
  @Column({ type: 'float' })
  amount: number; // 总金额

  @Column({ type: 'int' })
  status: number; // 状态

  @Column({ type: 'float' })
  deduction: number; // 抵扣金额

  @Column({ type: 'int' })
  discount: number; // 折扣

  @Column({ type: 'int' })
  payment: number; // 支付方式

  @Column({ type: 'int' })
  shop: number; // 门店

  @Column({ type: 'int' })
  cashier: number; // 收银员

  @Column({ type: 'int' })
  pos: number; // 收银机

  @Column({ type: 'varchar', length: 19 })
  create_date: string;
}
