/**
 * Create By: Meng
 * Create Date: 2022-07-06
 * Desc: 权限守卫
 * 与管道和异常过滤器一样，守卫可以是控制范围的、方法范围的或全局范围的。
 * 这个装饰器可以使用单个参数，也可以使用逗号分隔的多个守卫。

  @Controller('youcontrol')
  @UseGuards(AuthGuard)
  export class youcontrol {}
 */
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this._validateRequest(request);
  }

  // 校验是否等录或者登录过期
  private _validateRequest(request: any): boolean {
    console.log('================>AuthGuard validateRequest');
    console.log(request.url);
    console.log(request.params);

//      返回 false 的守卫会抛出一个 HttpException 异常。{"statusCode": 403,"message": "Forbidden resource"}

//      如果您想要向最终用户返回不同的错误响应，你应该抛出一个异常。
//      throw new UnauthorizedException(); // 由守卫引发的任何异常都将由异常层(全局异常过滤器和应用于当前上下文的任何异常过滤器)处理

    throw new UnauthorizedException();

    return false
  }
}
