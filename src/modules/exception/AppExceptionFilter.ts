/**
 * Author: Meng
 * Date: 2022-03-09
 * Desc: 请求异常错误处理
 */

import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { QueryFailedError, TypeORMError } from 'typeorm';

import AppException from './AppException';
import CommonError from './CommonError';
import Log3 from '../log/Log3';

@Catch()
export default class AppExceptionFilter implements ExceptionFilter {

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();

    let code = CommonError.UNKNOWN_ERROR.code;
    let message: string = CommonError.UNKNOWN_ERROR.msg;

    // if (exception instanceof AppException) {
    //   code = exception.code;
    //   message = exception.msg;
    // } 
    if (exception instanceof HttpException) {
      code = exception.getStatus();
      message = exception.message;
    }else if (exception instanceof TypeORMError) {
      code = CommonError.SQL_ERROR.code;
      message = CommonError.SQL_ERROR.message;
    }

    const result = { code, message, data: null };
    
    try {
      Log3.ex(exception, 'AppExceptionFilter');
      const request = ctx.getRequest<Request>();
      const headerStr = JSON.stringify(request.headers);
      const paramStr = request.method == 'GET' ? '' : `,\n param:${JSON.stringify(request.body)}`; // JSON.stringify(request.query)
      const reLog = `url: ${request.url}${paramStr},\n header:${headerStr},\n result:${JSON.stringify(result)}`;
      Log3.e(reLog, 'AppExceptionFilter');
    } catch (error) {
      Log3.ex(error, 'AppExceptionFilter');
    }

    const response = ctx.getResponse<Response>();
    if (response.json) {
      response.json(result);
    } else if (response.send) {
      response.send(result);
    }
  }
}
