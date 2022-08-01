/**
 * Create By: Meng
 * Create Date: 2022-07-06
 * Desc: 日志拦截器
 */

import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable()
export class LogInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log("LogInterceptor Start...");
    // console.log(context.switchToHttp().getRequest()); // 参数获取
    // console.log(context.getHandler()[0]); // 方法返回对将要调用的处理程序的引用

    const now = Date.now();

    return next.handle().pipe(tap((res) => {
      console.log(`LogInterceptor End... ${Date.now() - now}ms` );
      // console.log(res.data)
     }));
  }
}
