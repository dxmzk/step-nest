/**
 * Create By: Meng
 * Create Date: 2022-04
 * Desc: 
 */
import { Controller, Get } from '@nestjs/common';
import { ConfigService } from './config.service';

@Controller('config')
export class ConfigController {
  constructor(private readonly appService: ConfigService) {}

  // 活动列表
  @Get('banner')
  queryBanners() {
    this.appService.queryBanners();
  }

  // 活动列表
  @Get('tabs')
  queryTabs() {
    return this.appService.queryTabs();
  }
  
}
