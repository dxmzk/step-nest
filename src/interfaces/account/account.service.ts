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
import { User } from "../../dto/entity/user.entity";
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
      case 1:
        params.phone = body.phone;
        break;
      default:
        params.name = body.name;
        break;
    }

    const con = AppDataSource.getRepository(User);
    const user: User = await con.findOneBy(params);

    if (!user || !user.uid) {
      throw Errors.PWD_ERR;
    }

    try {
      // 获取密码
      const pwd = await AppDataSource.getRepository(Pwd).findOneBy({
        id: user.pid,
      });
      if (pwd && pwd.password == body.password) {
        // 登录成功
      } else {
        throw Errors.PWD_ERR;
      }
    } catch (error) {
      console.log(error);
      throw Errors.LOGIN_ERROR;
    }

    user.token = createToken(user.uid, user.name);

    con
      .createQueryBuilder()
      .update(User)
      .set({ token: user.token })
      .where("id = :id", { id: user.id })
      .execute();

    return AppResult.succee(user);
  }

  // 注册 - 账号无重>验参>保存>返回user
  async onRegister(body: RegisterBody): Promise<AppResult> {
    if (body.name) {
    }
    const con = AppDataSource.getRepository(User);

    const oneName = await con.findOneBy({ name: body.name });

    if (oneName || oneName.uid) {
      throw Errors.ACCOUNT_REPEAT;
    }

    const uid = "A" + Date.now();

    const pwd: Pwd = new Pwd();
    pwd.uid = uid;
    pwd.date = Date.now();
    pwd.password = body.password;

    try {
      const pwd2 = await AppDataSource.getRepository(Pwd)
        .createQueryBuilder()
        .insert()
        .into(Pwd)
        .values(pwd)
        .execute();
      if (pwd2 && pwd2.identifiers && pwd2.identifiers.length > 0) {
        pwd.id = pwd2.identifiers[0].id;
      }
    } catch (error) {
      // console.log(error)
      throw Errors.PWD_PARAM;
    }

    const user: User = new User();
    user.uid = uid;
    (user.pid = pwd.id), (user.name = body.name);
    user.nickname = body.name;
    user.email = body.email;
    user.icon = `${Math.random() * 30}`;
    user.token = createToken(uid, body.name);

    let result = null;
    try {
      result = await con
        .createQueryBuilder()
        .insert()
        .into(User)
        .values(user)
        .execute();

      if (result.generatedMaps && result.generatedMaps.length > 0) {
        result = result.generatedMaps[0];
      }
    } catch (error) {
      // console.log(error)
      throw Errors.ACCOUNT_ERROR;
    }
    body == null;
    return AppResult.succee(result);
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
  async queryInfo(uid: string): Promise<AppResult> {
    let user = null;
    try {
      user = await AppDataSource.getRepository(User).findOneBy({ uid });
      if (!user || !user.id) {
        throw Errors.ACCOUNT_NOT;
      }
    } catch (error) {
      throw Errors.ACCOUNT_PARAM;
    }

    return AppResult.succee(user);
  }

  // 退出登录
  async onLogout(uid: string): Promise<AppResult> {
    try {
      // await AppDataSource.getRepository(User).update({
      //   token: '',
      //   uid
      // });
    } catch (error) {
      throw Errors.ACCOUNT_ERROR;
    }

    return AppResult.succee("退出成功");
  }

  // 删除账号
  async onDelete(uid: string): Promise<AppResult> {
    await AppDataSource.getRepository(User)
      .createQueryBuilder()
      .delete()
      .from(User, "user")
      .where("uid = :uid", { uid })
      .execute();

    return AppResult.succee("");
  }

  // 获取用户
  async getUsers(mode: string): Promise<AppResult> {
    if (mode != "abcdefg") {
      return AppResult.succee("Are You 二傻!!!");
    }
    const users = await AppDataSource.getRepository(User).find();

    return AppResult.succee(users);
  }
}
