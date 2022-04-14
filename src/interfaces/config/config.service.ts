/**
 * Create By: Meng
 * Create Date: 2022-04
 * Desc: 
 */
import { Injectable } from '@nestjs/common';
import AppResult from 'src/modules/AppResult';

@Injectable()
export class ConfigService {

  // 获取banner/轮播图
  async queryBanners(): Promise<AppResult> {
    return AppResult.succee('');
  }

  // 获取tab
  async queryTabs(): Promise<AppResult> {
    return AppResult.succee('');
  }
  
  // 添加banner/轮播图
  async createBanner(): Promise<AppResult> {
    return AppResult.succee('');
  }

  // 添加tab
  async createTab(): Promise<AppResult> {
    return AppResult.succee('');
  }

  // 添加banner/轮播图
  async deleteBanner(): Promise<AppResult> {
    return AppResult.succee('');
  }

  // 添加tab
  async deleteTab(): Promise<AppResult> {
    return AppResult.succee('');
  }
}
