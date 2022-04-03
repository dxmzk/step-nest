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
 
   @Column()
   pid: number; // 父菜单id

   @Column()
   label: string;

   @Column()
   value: string; // 

   @Column()
   path: string; // 路由

   @Column()
   auth: boolean; // 是否需要登录

   @Column()
   desc: string;

 }
 