/**
 * Create By: Meng
 * Create Date: 2022-03
 * Desc:
 */
import { CACHE_MANAGER, Inject, Injectable } from "@nestjs/common";
import { Cache } from "cache-manager";
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from "typeorm";
import { LoginBody, RegisterBody } from "../../dto/body/index";
import { Users } from "../../dto/entity/users.entity";
import { Pwd } from "../../dto/entity/pwd.entity";
import AppResult from "../../modules/AppResult";
import Errors from "../../modules/exception/Error";
import { createToken } from "../../utils/user_utils";
import AppDataSource from "src/config/app_sql_source";

@Injectable()
export class AccountService {
  // constructor( @InjectRepository(User) private usersRepository: Repository<User>) {}
  constructor(@Inject(CACHE_MANAGER) private cache: Cache) {}

  // 登录  验参>获取密码>对比密码>返回用户信息
  async onLogin(body: LoginBody): Promise<AppResult> {
    // 验参
    const params: any = {};
    switch (body.mode) {
      case 0:
        params.email = body.email;
        break;
      default:
        params.name = body.account;
        break;
    }

    const con = AppDataSource.getRepository(Users);
    const user: Users = await con.findOneBy(params);

    if (!user) {
      throw Errors.ACCOUNT_NOT;
    }

    try {
      // 获取密码
      const pwd = await AppDataSource.getRepository(Pwd).findOneBy({
        uid: user.id,
      });
      if (pwd && pwd.value == body.password) {
        // 登录成功
      } else {
        throw Errors.PWD_ERR;
      }
    } catch (error) {
      console.log(error);
      throw Errors.LOGIN_ERROR;
    }
    return AppResult.succee(user);
  }

  // 注册 - 账号无重>验参>保存>返回user
  async onRegister(body: RegisterBody): Promise<AppResult> {
    if (body.name) {
    }
    const con = AppDataSource.getRepository(Users);

    const oneName = await con.findOneBy({ account: body.account });

    if (oneName) {
      throw Errors.ACCOUNT_REPEAT;
    }
    console.log(body);
    return AppResult.succee('result');
  }

  // 重置密码 验证>更新>退出登录
  async onReset(body: RegisterBody): Promise<AppResult> {
    return AppResult.succee("");
  }

  // 获取验证码
  async onCode(tag: string): Promise<AppResult> {
    const code = Math.round(Math.random() * 100000);
    this.cache.set(tag, code, { ttl: 60000 });
    return AppResult.succee(code);
  }

  // 获取用户信息
  async queryInfo(id: number): Promise<AppResult> {
    let user = null;
    try {
      user = await AppDataSource.getRepository(Users).findOneBy({ id });
      if (!user || !user.id) {
        throw Errors.ACCOUNT_NOT;
      }
    } catch (error) {
      throw Errors.ACCOUNT_PARAM;
    }

    return AppResult.succee(user);
  }

  // 退出登录
  async onLogout(uid: number): Promise<AppResult> {
    try {
    } catch (error) {
      throw Errors.ACCOUNT_ERROR;
    }

    return AppResult.succee("退出成功");
  }

  // 删除账号
  async onDelete(uid: number): Promise<AppResult> {
    await AppDataSource.getRepository(Users)
      .createQueryBuilder()
      .delete()
      .from(Users, "users")
      .where("uid = :uid", { uid })
      .execute();

    return AppResult.succee("");
  }

  // 获取用户
  async getUsers(mode: string): Promise<AppResult> {
    if (mode != "abcdefg") {
      return AppResult.succee("Are You 二傻!!!");
    }
    const users = await AppDataSource.getRepository(Users).find();

    return AppResult.succee(users);
  }
}
