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
import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this._validateRequest(request);
  }

  private _validateRequest(request={}): boolean {
    return false
  }
}
