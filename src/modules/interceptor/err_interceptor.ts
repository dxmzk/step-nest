/**
 * Create By: Meng
 * Create Date: 2022-07-06
 * Desc:
 */

import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import Errors from "../exception/Error";

@Injectable()
export class ErrInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log("ErrInterceptor Before...");
    return next.handle().pipe(map(data => (Errors.UNKNOWN_ERROR)));
  }
}
