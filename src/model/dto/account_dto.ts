/**
 * Author: Meng
 * Date: 2022-03-09
 * Desc:
 */
export class AccountDto {
  id: number;
  token: string; //
  birth: string; // 出生年月日
  nickname: string; // 昵称
  account: string; // 账号名
  email: string; // 邮箱
  share_code: string; // 分享码
  icon: string; // 头像
  bg: number; // 背景图
  city: string; // 城市
  about: string; // 简介
  level: number;
  status: number; // 状态
  tag: number; // 类型
  channel: number; // 渠道
  grade: number; // 等级
  roles: number; // 角色从 9 开始
  score: number; // 积分
  create_time: string; // 创建日期 xxxx-MM-dd hh:mm:ss
  last_time: string; // 上次登录日期 时间戳
}
