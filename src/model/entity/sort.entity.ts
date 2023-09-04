/**
 * Author: Meng
 * Date: 2023-08-10
 * Modify: 2023-08-10
 * Desc: 商品类目
 */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('sort')
export class SortEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'varchar', length: 100})
  cover: string;

  @Column({type: 'varchar', default: '', length: 30})
  title: string;
  // @Column({type: 'varchar', default: '', length: 60})
  // value: string; //

  @Column({type: 'varchar', default: '', length: 60})
  desc: string;
}