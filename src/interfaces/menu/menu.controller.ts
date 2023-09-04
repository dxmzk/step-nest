/**
 * Author: Meng
 * Date: 2022-03-09
 * Desc: 菜单
 */
import {
  Body,
  Controller,
  Get,
  Headers,
  Post,
  UseGuards,
} from '@nestjs/common';
import ResultData from 'src/model/ResultData';
import { MenuBody } from 'src/model/body/index';
import { AuthGuard } from 'src/modules/guards/auth_guard';
import { MenuService } from './menu.service';

@Controller('menu')
@UseGuards(AuthGuard)
export class MenuController {
  constructor(private readonly service: MenuService) {}

  // 查询
  @Get('list')
  queryMenu(@Headers('Token') token: string): Promise<ResultData> {
    return this.service.queryMenu(token);
  }

  // 创建菜单
  @Post('create')
  async createMenu(@Body() body: MenuBody): Promise<ResultData> {
    return this.service.createMenu(body);
  }

  // 更新
  @Post('update')
  async updateMenu(@Body() body: MenuBody): Promise<ResultData> {
    return this.service.updateMenu(body);
  }
}
