/**
 * Create By: Meng
 * Create Date: 2022-03
 * Desc: 
 */
import { Injectable } from '@nestjs/common';
import AppResult from 'src/modules/AppResult';

@Injectable()
export class ActivityService {

  // 活动列表
  async queryActivitys(): Promise<AppResult> {
    return AppResult.succee('');
  }

  // 活动详情
  async queryDetail(id: number): Promise<AppResult> {
    return AppResult.succee('');
  }

  // 创建/更新活动
  async createActivity(): Promise<AppResult> {
    return AppResult.succee('');
  }

  // 创建/更新活动
  async updateActivity(): Promise<AppResult> {
    return AppResult.succee('');
  }
}
