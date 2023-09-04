/**
 * Author: Meng
 * Date: 2022-03-09
 * Desc: 账号操作
 */
import { Body, Controller, Get, Post, Headers } from '@nestjs/common';
import { AccountService } from './account.service';
import ResultData from '../../model/ResultData';
import { LoginBody, RegisterBody, AuthCodeBody } from '../../model/body/index';

@Controller('account')
export class AccountController {
  constructor(private readonly service: AccountService) {}

  // 注册
  @Post('register')
  onRegister(@Body() body: RegisterBody): Promise<ResultData> {
    return this.service.onRegister(body);
  }

  // 登录
  @Post('login')
  onLogin(@Body() body: LoginBody): Promise<ResultData> {
    return this.service.onLogin(body);
  }

  // 重置账号
  @Post('authCode')
  onCreateCode(@Body() body: AuthCodeBody): Promise<ResultData> {
    return this.service.onCreateCode(body);
  }

  // 重置账号
  @Post('reset')
  onReset(@Headers('Token') token: string, @Body() body: LoginBody,): Promise<ResultData> {
    return this.service.onReset(token, body);
  }

  // 用户信息 // @Header("token", "")
  @Get('info')
  queryInfo(@Headers('Token') token: string): Promise<ResultData> {
    return this.service.queryInfo(token);
  }

  // 退出账号
  @Get('logout')
  onLogout(@Headers('Token') token: string): Promise<ResultData> {
    return this.service.onLogout(token);
  }

  // 修改/删除
  @Get('update')
  onUpdate(@Headers('Token') token: string, body: RegisterBody): Promise<ResultData> {
    return this.service.onUpdate(token, body);
  }

  // 修改/删除
  @Get('delete')
  onDelete(@Headers('Token') token: string): Promise<ResultData> {
    return this.service.onDelete(token);
  }
}
