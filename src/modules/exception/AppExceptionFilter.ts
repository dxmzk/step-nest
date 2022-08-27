/**
 * Create By: Meng
 * Create Date: 2022-03-06
 * Desc: 请求异常错误处理
 */

import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export default class AppExceptionFilter implements ExceptionFilter {

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    // console.log(exception);
    // const request = ctx.getRequest<Request>();
    let code = 100101;
    let message: string = '未知异常';
    if (exception instanceof HttpException) {
      code = exception.getStatus();
      message = exception.message;
    }
    const result = {
      code,
      message,
      data: null, // timestamp: Date.now(),
    };

    if(response.json) {
      response.json(result);
    }else if(response.send) {
      response.send(result);
    }
  }
}
