/**
 * Create By: Meng
 * Create Date: 2022-07-06
 * Desc: 权限守卫
 * 与管道和异常过滤器一样，守卫可以是控制范围的、方法范围的或全局范围的。

  @Controller('youcontrol')
  @UseGuards(RoleGuard)
  export class youcontrol {}

  @Post()
  @Roles('admin') // 这个装饰器可以使用单个参数，也可以使用逗号分隔的参数列表。
  async create(@Body() catDto: CatDto) {
    this.appService.create(catDto);
  }
 */
import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    return this._matchRoles(roles, user.roles);
  }

  private _matchRoles(role: string[], user: string): boolean {
    console.log(role, user);
    return false;
  }
}
