/**
 * Author: Meng
 * Date: 2022-07-06
 * Desc: 日志拦截器
 */

import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LogInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();

    const request = context.switchToHttp().getRequest(); // 参数获取
    const headerStr = JSON.stringify(request.headers);
    const paramStr = request.method == 'GET' ? '' : `, params:${JSON.stringify(request.body)}`; // JSON.stringify(request.query)
    const resLog = `Request url: ${request.url}${paramStr},\n header:${headerStr}\n`;

    console.log(resLog);

    return next.handle().pipe(
      tap((res) => {
        console.log(`Request Use Time: ${Date.now() - now}ms`);
      }),
    );
  }
}
