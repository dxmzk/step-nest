/**
 * Create By: Meng
 * Create Date: 2022-
 * Desc: 
 */

export class LoginBody {
  readonly email?: string; // 邮箱
  readonly phone?: string; // 手机号
  readonly name?: string; // 手机号
  readonly password?: string; // 密码
  readonly mode: number; // 登录模式 0：邮箱；1：uid;2：手机
}

export class RegisterBody {
  readonly email: string; // 邮箱
  // public phone: string; // 手机号
  readonly password: string; // 密码
  readonly code: number; // 验证码
  readonly name: string; // 名称
  // public mode = 0; // 登录模式 0：手机；1：邮箱
}