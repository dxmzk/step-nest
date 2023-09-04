/**
 * Author: Meng
 * Date: 2023-
 * Desc: 
 */

import { Catch, ArgumentsHost } from '@nestjs/common';
import { BaseWsExceptionFilter } from '@nestjs/websockets';

@Catch()
export class SocketExceptionsFilter extends BaseWsExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    super.catch(exception, host);
    console.warn('-----> SocketExceptionsFilter:', host, exception);
  }
}