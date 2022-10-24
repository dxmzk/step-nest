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
  queryDetail(@Query('id') id: number) {

  }

  // 创建/更新活动
  @Post('create')
  createActivity() {

  }

  // 创建/更新活动
  @Post('update')
  upadteActivity() {

  }

  // 删除/撤销活动
  // 创建/更新活动
  @Post('change')
  changeActivity(@Param('id') id: number) {

  }

  // 添加标签
  @Post('create_tag')
  createTag() {

  }

  // 添加标签
  @Post('update_tag')
  upadteTag() {

  }

  // 删除标签
  @Get('delete_tag')
  deleteTag(@Query('id') id: number) {

  }
}
