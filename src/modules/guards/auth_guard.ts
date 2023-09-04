/**
 * Author: Meng
 * Date: 2022-07-06
 * Desc: 权限守卫
 * 与管道和异常过滤器一样，守卫可以是控制范围的、方法范围的或全局范围的。
 * 这个装饰器可以使用单个参数，也可以使用逗号分隔的多个守卫。

  @Controller('you controller')
  @UseGuards(AuthGuard)
  export class you.controller {}
 */
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import CommonError from '../exception/CommonError';
import Log3 from '../log/Log3';

// 忽略校验
const ignore_route = ['/account/login', '/account/register'];

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private jwtService: JwtService) {}

  // 
  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    return this._validateRequest(request);
  }

  // 校验是否等录或者登录过期
  private _validateRequest(request: any): boolean {
    const url: string = request.url;
    if (ignore_route.filter((e) => url.includes(e)).length > 0) {
      return true;
    }
    return this._parseToken(request.headers);
  }

  // 解析Token
  private _parseToken(headers: any): boolean {
    if (headers && headers.token) {
      try {
        const token = this.jwtService.decode(headers.token);
        return token != null;
      } catch (error) {
        Log3.ex(error, 'AuthGuard parseToken');
        throw CommonError.TOKEN_ERROR;
      }
    }else {
      throw CommonError.NOT_LOGIN; // UnauthorizedException
      // return false;
    }
  }
}