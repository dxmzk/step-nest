/**
 * Create By: Meng
 * Create Date: 2022-03
 * Desc:
 */
import {
  Body,
  Controller,
  Get,
  Header,
  Param,
  Post,
  Query,
  Request,
  UseGuards,
} from "@nestjs/common";
import { AccountService } from "./account.service";
import AppResult from "../../modules/AppResult";
import { LoginBody, RegisterBody } from "../../dto/body/index";
import Errors from "src/modules/exception/Error";
import { parasToken } from "src/utils/user_utils";
import { AuthGuard } from "src/modules/guards/auth_guard";

@Controller("account")
@UseGuards(AuthGuard)
export class AccountController {
  constructor(private readonly service: AccountService) {}

  // 注册
  @Post("register")
  onRegister(@Body() body: RegisterBody): Promise<AppResult> {
    return this.service.onRegister(body);
  }

  // 登录
  @Post("login")
  onLogin(@Body() body: LoginBody): Promise<AppResult> {
    return this.service.onLogin(body);
  }

  // 获取验证码
  @Get("code")
  onCode(@Param("tag") tag: string): Promise<AppResult> {
    return this.service.onCode(tag);
  }

  // 重置账号
  @Post("reset")
  onReset(@Body() body: RegisterBody): Promise<AppResult> {
    return this.service.onReset(body);
  }

  // 用户信息
  @Header("token", "")
  @Get("info")
  queryInfo(@Request() req): Promise<AppResult> {
    const headers = req?.raw?.headers || {};
    const info = parasToken(headers.token);
    let uid = info.uid;
    if (!uid) {
      throw Errors.ACCOUNT_ERROR;
    }
    return this.service.queryInfo(uid);
  }

  // 退出账号
  @Get("logout")
  onLogout(@Request() req): Promise<AppResult> {
    const headers = req?.raw?.headers || {};

    const info = parasToken(headers.token);
    let uid = info.uid;
    if (!uid) {
      throw Errors.ACCOUNT_ERROR;
    }
    return this.service.onLogout(uid);
  }

  // 删除
  @Get("delete")
  onDelete(@Request() req): Promise<AppResult> {
    const headers = req?.raw?.headers || {};

    const info = parasToken(headers.token);
    let uid = info.uid;
    if (!uid) {
      throw Errors.ACCOUNT_ERROR;
    }
    return this.service.onDelete(uid);
  }

  // 非开放接口
  @Get("users")
  getUsers(@Query("mode") mode: string): Promise<AppResult> {
    return this.service.getUsers(mode);
  }
}
