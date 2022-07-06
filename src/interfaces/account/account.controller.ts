/**
 * Create By: Meng
 * Create Date: 2022-03
 * Desc:
 */
import { Body, Controller, Get, Header, Post, Query, Request } from '@nestjs/common';
import { AccountService } from './account.service';
import AppResult from '../../modules/AppResult';
import { LoginBody, RegisterBody } from '../../dto/body/index';
import Errors from 'src/modules/exception/Error';
import { parasToken } from 'src/utils/user_utils';

@Controller('account')
export class AccountController {
  constructor(private readonly appService: AccountService) {}

  // 注册
  @Post('register')
  onRegister(@Body() body: RegisterBody): Promise<AppResult> {
    return this.appService.onRegister(body);
  }

  // 登录
  @Post('login')
  onLogin(@Body() body: LoginBody): Promise<AppResult> {
    // 验参
    
    return this.appService.onLogin(body);
  }

  // 重置账号
  @Post('reset')
  onReset(@Body() body: RegisterBody): Promise<AppResult> {
    return this.appService.onReset(body);
  }

  // 用户信息
  @Header('token', '')
  @Get('info')
  queryUserInfo(@Request() req): Promise<AppResult> {

    const headers = req?.raw?.headers||{};
    
    const info = parasToken(headers.token);
    let uid = info.uid;
    if(!uid) {
      throw Errors.ACCOUNT_ERROR;
    }
    return this.appService.queryUserInfo(uid);
  }

  // 退出账号
  @Get('logout')
  onLogout(@Request() req): Promise<AppResult> {
    const headers = req?.raw?.headers||{};
    
    const info = parasToken(headers.token);
    let uid = info.uid;
    if(!uid) {
      throw Errors.ACCOUNT_ERROR;
    }
    return this.appService.onLogout(uid);
  }

  // 删除
  @Get('delete')
  onDelete(@Request() req): Promise<AppResult> {
    const headers = req?.raw?.headers||{};
    
    const info = parasToken(headers.token);
    let uid = info.uid;
    if(!uid) {
      throw Errors.ACCOUNT_ERROR;
    }
    return this.appService.onDelete(uid);
  }

  // 非开放接口
  @Get('users')
  getUsers(@Query('mode') mode: string): Promise<AppResult> {
    return this.appService.getUsers(mode);
  }

}
