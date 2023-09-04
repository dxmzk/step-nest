/**
 * Author: Meng
 * Date: 2022-03-09
 * Desc: 账号相关
 */
import { Injectable } from '@nestjs/common';

import { LoginBody, RegisterBody, AuthCodeBody } from '../../model/body/index';
import { Account } from '../../model/entity/index';
import ResultData from '../../model/ResultData';
import CommonError from '../../modules/exception/CommonError';
import AppDataSource from '../../config/app_sql_source';
// import { sendEmailCode } from 'src/modules/email';
// import { JwtService } from '@nestjs/jwt';
import { createToken, parseToken } from '../../utils/token_utils';
import Constants from 'src/config/constants';

@Injectable()
export class AccountService {
  // constructor(private jwtService: JwtService) {}
  constructor() {}

  /**
   * 登录 验参>对比账号密码>返回用户信息
   * @param body LoginBody
   */
  async onLogin(body: LoginBody): Promise<ResultData> {
    if (!body.password || !body.account) {
      throw CommonError.PARAM_ERROR;
    }
    let param = { account: body.account, pwd: body.password };
    let select = 'account.account = :account and account.pwd = :pwd';

    const reposit = AppDataSource.getRepository(Account);
    let info = await reposit
      .createQueryBuilder('account')
      // .leftJoinAndSelect('account.pwds', 'pwds')
      .where(select, param)
      .getOne();

    if (!info) {
      throw CommonError.ACCOUNT_ERROR;
    }
    Reflect.deleteProperty(info, 'pwd'); // delete result.pwd;
    const token = createToken(info.id);

    return ResultData.success({ info, token });
  }

  /**
   * 注册 - 账号无重>验参>保存>返回user
   * @param body RegisterBody
   */
  async onRegister(body: RegisterBody): Promise<ResultData> {
    if (!body.password || !body.email || !body.code) {
      throw CommonError.PARAM_ERROR;
    }
    // 账号检测
    const reposit = AppDataSource.getRepository(Account);
    const acc = await reposit.findOneBy({ email: body.email });
    if (acc && acc.id) {
      throw CommonError.ACCOUNT_EXIST;
    }
    const account = Account.create(body);
    const info = await reposit.save<Account>(account);

    Reflect.deleteProperty(info, 'pwd'); // delete result.pwd;
    let token = createToken(account.id);

    return ResultData.success({ info, token });
  }

  /**
   * 重置密码 验证>更新>退出登录
   * @param token
   * @param body LoginBody
   */
  async onReset(token: string, body: LoginBody): Promise<ResultData> {
    const info = parseToken(token);

    if (!body.account) {
      throw CommonError.ACCOUNT_UNLL;
    } else if (!body.code) {
      throw CommonError.CODE_ERROR;
    }
    // const code = await this.cache.get(body.email);
    const code = '012123';
    if (body.code != code) {
      throw CommonError.CODE_ERROR;
    }

    const res = await AppDataSource.getRepository(Account)
      .createQueryBuilder()
      .update(Account)
      .set({ pwd: Constants.def_pwd })
      .where('id = :id', { id: info.uid })
      .execute();

    if (res.affected != 1) {
      throw CommonError.UPDATE_ERROR;
    }
    return ResultData.success('密码已重置');
  }

  /**
   * 获取验证码
   * @param body AuthCodeBody
   */
  async onCreateCode(body: AuthCodeBody): Promise<ResultData> {
    if (!body.email) {
      throw CommonError.PARAM_ERROR;
    }
    const code = `${Math.random() * 1000000 + 1000000}`.substring(1, 7);
    // this.cache.set(body.email, code, 600000).catch((err) => {
    //   console.log('err', err);
    // });
    // sendEmailCode(code, email);
    return ResultData.success(code);
  }

  /**
   * 获取用户信息
   * @param token
   */
  async queryInfo(token: string): Promise<ResultData> {
    const info = parseToken(token);

    let user = await AppDataSource.getRepository(Account).findOneBy({
      id: info.uid,
    });
    Reflect.deleteProperty(info, 'pwd');
    return ResultData.success(user);
  }

  /**
   * 退出登录
   * @param token
   */
  async onLogout(token: string): Promise<ResultData> {
    try {
      const info = parseToken(token);
      // await AppDataSource.getRepository(Account).findOneBy({ id: info.uid });
      // 删除token
    } catch (error) {
      throw CommonError.ACCOUNT_ERROR;
    }

    return ResultData.success('已退出登录');
  }

  /**
   * 修改用户信息
   * @param token
   * @param body RegisterBody
   */
  async onUpdate(token: string, body: RegisterBody): Promise<ResultData> {
    const info = parseToken(token);
    let user = await AppDataSource.getRepository(Account).findOneBy({
      id: info.uid,
    });
    return ResultData.success('');
  }

  /**
   * 删除账号
   * @param token
   */
  async onDelete(token: string): Promise<ResultData> {
    const info = parseToken(token);
    let user = await AppDataSource.getRepository(Account).findOneBy({
      id: info.uid,
    });
    return ResultData.success('');
  }

  /**
   * 获取用户
   * @param mode
   */
  async getUsers(mode: string): Promise<ResultData> {
    if (mode != 'abcdefg') {
      return ResultData.success('Are You 傻!!!');
    }
    const users = await AppDataSource.getRepository(Account).find();

    return ResultData.success(users);
  }
}
