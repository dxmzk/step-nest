/**
 * Create By: Meng
 * Create Date: 2022-03
 * Desc:
 */
import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection, Connection } from 'typeorm';

import { LoginBody, RegisterBody } from '../../dto/body/index';
import { User } from '../../dto/entity/user.entity';
import { Pwd } from '../../dto/entity/pwd.entity';
import AppResult from '../../modules/AppResult';
import Errors from '../../modules/exception/Error';
import { createToken } from '../../utils/userUtils';

@Injectable()
export class AccountService {
  // constructor( @InjectRepository(User) private usersRepository: Repository<User>) {}

  // 登录  验参>获取密码>对比密码>返回用户信息
  async onLogin(body: LoginBody): Promise<AppResult> {
    // 验参
    const params: any = { key: '', value: '' };
    switch (body.mode) {
      case 0:
        params.key = 'user.email = :email';
        params.value = {email: body.email};
        break;
      case 1:
        params.key = 'user.phone = :phone';
        params.value = {phone: body.phone};
        break;
      default:
        params.key = 'user.name = :name';
        params.value = {name: body.name};
        break;
    }
    const con: Connection = getConnection();
    const user: User = await this._getUser(con, params.value, params.key);

    if (!user || !user.uid) {
      throw Errors.PWD_ERR;
    }

    try {
      // 获取密码
      const pwd = await con
        .createQueryBuilder()
        .select('pwd')
        .from(Pwd, 'pwd')
        .where('pwd.id = :id', { id: user.pid })
        .getOne();
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

    con.createQueryBuilder().update(User).set({token: user.token}).where('id = :id', {id: user.id}).execute();

    return AppResult.succee(user);
  }

  // 注册 - 账号无重>验参>保存>返回user
  async onRegister(body: RegisterBody): Promise<AppResult> {
    if (body.name) {
    }
    const con: Connection = getConnection();

    const oneName = await this._getUser(con, {name: body.name});

    if (oneName || oneName.uid) {
      throw Errors.ACCOUNT_REPEAT;
    }

    const uid = 'A' + Date.now();

    const pwd: Pwd = new Pwd();
    pwd.uid = uid;
    pwd.date = Date.now();
    pwd.password = body.password;

    try {
      const pwd2 = await con
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
    return AppResult.succee('');
  }

  // 获取用户信息
  async queryUserInfo(uid: string): Promise<AppResult> {
    let user = null;
    try {
      user = await getConnection()
      .createQueryBuilder()
      .select('user')
      .from(User, 'user')
      .where('user.uid = :uid', { uid })
      .getOne();
      if(!user || !user.id) {
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
      const user = await getConnection()
      .createQueryBuilder()
      .update(User)
      .set({
        token: '',
      })
      .where('uid = :uid', { uid })
      .execute();
    } catch (error) {
      throw Errors.ACCOUNT_ERROR
    }
    
    return AppResult.succee('退出成功');
  }

  // 删除账号
  async onDelete(uid: string): Promise<AppResult> {
    const user = await getConnection()
      .createQueryBuilder()
      .delete()
      .from(User, 'user')
      .where('uid = :uid', { uid })
      .execute();

    return AppResult.succee('');
  }

  // 获取用户
  async getUsers(mode: string): Promise<AppResult> {
    if (mode != 'abcdefg') {
      return AppResult.succee('Are You 二傻!!!');
    }
    const users = await getConnection()
      .createQueryBuilder()
      .select('user')
      .from(User, 'user')
      .getMany();

    return AppResult.succee(users);
  }

  async _getUser(con: Connection, value: object, key = 'user.name = :name') {
    let user = null;
    // console.log(key, value)
    try {
      user = await con
        .createQueryBuilder()
        .select('user')
        .from(User, 'user')
        .where(key, value)
        .getOne();
    } catch (error) {
      console.log(error);
    }
    return user;
  }
}
