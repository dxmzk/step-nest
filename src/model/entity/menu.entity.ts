/**
 * Author: Meng
 * Date: 2022-03-09
 * Desc:
 */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('menu')
export class MenuEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'int', default: 0})
  pid: number; // 父菜单id

  // @Column({type: 'varchar', default: '', length: 100})
  // icon: string;

  @Column({type: 'varchar', default: '', length: 20})
  label: string;

  @Column({type: 'varchar', default: '', length: 50})
  path: string; // 路由

  @Column({type: 'int', default: 5})
  auth: number; // 需要的权限等级

  @Column({type: 'int', default: 0})
  enable: number;

  @Column({type: 'varchar', default: '', length: 100})
  describe: string;

  public children: Array<MenuEntity>;
}
