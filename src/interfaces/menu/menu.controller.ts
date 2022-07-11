/**
 * Create By: Meng
 * Create Date: 2022-03
 * Desc: 
 */
import { Controller, Get, Param, Post } from '@nestjs/common';
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

  // 删除菜单
  @Get(':id')
  async delete3Menu(@Param('id') id: number): Promise<AppResult> {
    return this.appService.deleteMenu(id);
  }


  // @Post()
  // create(@Body() createDto: CreateDto) {
  //   return 'This action adds a new ';
  // }
  
  // @Get()
  // findAll(@Query() query: ListAllEntities) {
  //   return `This action returns all (limit: ${query.limit} items)`;
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return `This action returns a #${id} `;
  // }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() updateDto: UpdateDto) {
  //   return `This action updates a #${id} `;
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return `This action removes a #${id} `;
  // }
}
