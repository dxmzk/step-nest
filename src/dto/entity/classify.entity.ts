/**
 * Create By: Meng
 * Create Date: 2022-03
 * Desc:
 */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  // UpdateDateColumn,
} from 'typeorm';
import { Book } from './book.entity';

@Entity()
export class Classify {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: "varchar", default: '', length: 64 })
  name: string; // 名字

  @Column({type: "int", default: 0 })
  type: number; // 属性

  @Column({default: 0 })
  num: number; // 属性

  @Column({type: "varchar", default: '', length: 20 })
  create_date: string; // 创建日期 xxxx-MM-dd hh:mm:ss

  @ManyToOne(type => Book, book => book.classify)
  classify: Book;
}
