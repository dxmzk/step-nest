/**
 * Create By: Meng
 * Create Date: 2022-03
 * Desc: 
 */
import { Injectable } from '@nestjs/common';
import AppResult from 'src/modules/AppResult';

@Injectable()
export class MenuService {

  // 查询
  async queryMenu(): Promise<AppResult> {

    return AppResult.succee('');
  }

  // 更新
  async updateMenu(id: number): Promise<AppResult> {
    return AppResult.succee('');
  }

   // 创建菜单
   async createMenu(id: number): Promise<AppResult> {
    return AppResult.succee('');
  }

  // 删除菜单
  async deleteMenu(id: number): Promise<AppResult> {
    console.log('deleteMenu: ',id);
    return AppResult.succee('');
  }
}
