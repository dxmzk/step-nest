/**
 * Create By: Meng
 * Create Date: 2022-03
 * Desc: 
 */

import { Controller, Get, Post, Query } from '@nestjs/common';
import AppResult from 'src/modules/AppResult';

@Controller('activity')
export class ActivityController {

  // 活动列表
  @Get('activitys')
  queryActivitys() {

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
  @Get('deleteOrDown')
  deleteOrDown(@Query('id') id: number) {

  }

  // 添加标签
  @Post('createTag')
  createTag() {

  }

  // 添加标签
  @Post('updateTag')
  upadteTag() {

  }

  // 删除标签
  @Get('deleteTag')
  deleteTag(@Query('id') id: number) {

  }
}
