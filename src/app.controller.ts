/**
 * Author: Meng
 * Date: 2023-08-10
 * Modify: 2023-08-10
 * Desc:
 */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
