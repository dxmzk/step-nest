/**
 * Create By: Meng
 * Create Date: 2022-03
 * Desc: 
 */
import { Controller, Get, Post } from '@nestjs/common';
import AppResult from 'src/modules/AppResult';
import { MenuService } from './menu.service';

@Controller('menu')
export class MenuController {
  constructor(private readonly appService: MenuService) {}

  // 查询
  @Get('query')
  queryMenu(): Promise<AppResult> {
    return this.appService.queryMenu();
  }

  // 更新
  @Post('update')
  async updateMenu(id: number): Promise<AppResult> {
    return this.appService.updateMenu(id);
  }

   // 创建菜单
   @Post('create')
   async createMenu(id: number): Promise<AppResult> {
    return this.appService.createMenu(id);
  }

  // 删除菜单
  @Get('delete')
  async deleteMenu(id: number): Promise<AppResult> {
    return this.appService.deleteMenu(id);
  }
}
