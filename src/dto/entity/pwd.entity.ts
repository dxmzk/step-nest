/**
 * Create By: Meng
 * Create Date: 2022-03
 * Desc:
 */
 import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

 @Entity()
 export class Pwd {
   @PrimaryGeneratedColumn()
   id: number;
 
   @Column({default: '', length: 24})
   uid: string;
 
   @Column({default: '12345678', length: 32})
   password: string;

   @Column({type: 'bigint'})
   date: number;
 }
 