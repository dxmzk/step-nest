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

    throw Error('asdadsa是短发发色');
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

  // 删除/撤销活动
  // 创建/更新活动
  async deleteOrDown(id: number): Promise<AppResult> {
    return AppResult.succee('');
  }

  // 添加标签
  async createOrUpadteTag(): Promise<AppResult> {
    return AppResult.succee('');
  }

  // 删除标签
  async deleteTag(id: number): Promise<AppResult> {
    return AppResult.succee('');
  }
}
