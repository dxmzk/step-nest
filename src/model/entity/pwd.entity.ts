/**
 * Create By: Meng
 * Create Date: 2022-03
 * Desc:
 */
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pwd {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "int" })
  uid: number;

  @Column({ default: "12345678", length: 32 })
  value: string;

  @Column({ default: "", length: 32 })
  token: string;
}
