/**
 * Author: Meng
 * Date: 2022-03-09
 * Desc: 账号数据body
 */

// 登录参数
export class LoginBody {
  readonly account?: string; // 账号
  readonly code?: string; // 验证吗
  readonly password?: string; // 密码
  // readonly mode: number; // 登录模式 0：邮箱；1：uid;
}

// 注册参数
export class RegisterBody {
  readonly email: string; // 邮箱
  readonly password: string; // 密码
  readonly nickname: string; // 昵称
  readonly icon: string; // 验证码
  readonly code: string; // 验证码
  readonly share: string; // 分享码
  readonly channel: number; // 渠道
}

// 验证码参数
export class AuthCodeBody {
  readonly email: string; // 邮箱
  readonly tag: string; // 
}