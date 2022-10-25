/**
 * Create By: Meng
 * Create Date: 2022-03
 * Desc: 
 */

import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import AppResult from 'src/modules/AppResult';
import { ActivityService } from './activity.service';

@Controller('activity')
export class ActivityController {
  constructor(private readonly service: ActivityService) {}
  // 活动列表
  @Get('activitys')
  queryActivitys(): Promise<AppResult> {
    return this.service.queryActivitys();
  }

  // 活动详情
  @Get('detail')
  queryDetail(@Query('id') id: number): Promise<AppResult>  {
    return this.service.queryDetail(id);
  }

  // 创建/更新活动
  @Post('create')
  createActivity(): Promise<AppResult>  {
    return this.service.createActivity();
  }

  // 创建/更新活动
  @Post('update')
  updateActivity(): Promise<AppResult>  {
    return this.service.updateActivity();
  }

}
