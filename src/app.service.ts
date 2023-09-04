/**
 * Author: Meng
 * Date: 2023-08-10
 * Modify: 2023-08-10
 * Desc:
 */

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '这不是 404！';
  }
}
