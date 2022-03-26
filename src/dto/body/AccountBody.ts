/**
 * Create By: Meng
 * Create Date: 2022-
 * Desc: 
 */

export class LoginBody {
  public email?: string; // 邮箱
  public phone?: string; // 手机号
  public name?: string; // 手机号
  public password?: string; // 密码
  public mode = 0; // 登录模式 0：邮箱；1：uid;2：手机
}

export class RegisterBody {
  public email: string; // 邮箱
  // public phone: string; // 手机号
  public password: string; // 密码
  public code: number; // 验证码
  public name: string; // 名称
  // public mode = 0; // 登录模式 0：手机；1：邮箱
}