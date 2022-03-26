/**
 * Create By: Meng
 * Create Date: 2022-03
 * Desc: 
 */
import { Injectable } from '@nestjs/common';
import AppResult from 'src/modules/AppResult';

@Injectable()
export class ShopService {

  // 
  async queryShops(): Promise<AppResult> {

    return AppResult.succee('');
  }

  // 活动详情
  async queryDetail(id: number): Promise<AppResult> {
    return AppResult.succee('');
  }
}
