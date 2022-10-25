/**
 * Create By: Meng
 * Create Date: 2022-
 * Desc: 
 */

export class LoginBody {
  readonly email?: string; // 邮箱
  readonly account?: string; // 账号
  readonly password?: string; // 密码
  // readonly mode: number; // 登录模式 0：邮箱；1：uid;
}

export class RegisterBody {
  readonly account?: string; // 账号
  readonly email: string; // 邮箱
  readonly password: string; // 密码
  readonly code: number; // 验证码
  readonly name: string; // 昵称
}