/**
 * Create By: Meng
 * Create Date: 2022-02
 * Desc: 带有单个路由的基本控制器示例
 */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly service: AppService) {}

  @Get()
  getHome() {
    return 'ok'
  }
}
