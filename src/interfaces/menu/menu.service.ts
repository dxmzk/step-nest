/**
 * Create By: Meng
 * Create Date: 2022-03
 * Desc: 
 */
import { Injectable } from '@nestjs/common';
import AppResult from 'src/modules/AppResult';

@Injectable()
export class MenuService {

  // 
  async queryMenu(): Promise<AppResult> {

    return AppResult.succee('');
  }

  // 
  async updateMenu(id: number): Promise<AppResult> {
    return AppResult.succee('');
  }

}
