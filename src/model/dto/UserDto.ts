/**
 * Author: Meng
 * Date: 2022-09
 * Desc:
 */
export class UserDto {
  id: number;
  code: string; //
  token: string; //
  nickname: string; // 昵称
  account: string; // 账号名
  email: string; // 邮箱
  icon: string; // 头像
  style: string; // 背景图
  city: string; // 城市
  about: string; // 简介
  memo: string; // 备注
  level: number;
  status: number; // 状态
  tag: number; // 类型
  grade: number; // 等级
  roles: number; // 角色从 9 开始
  score: number; // 积分
  birth: string; // 出生年月日
  create_time: string; // 创建日期 xxxx-MM-dd hh:mm:ss
  last_time: string; // 上次登录日期 时间戳
}
