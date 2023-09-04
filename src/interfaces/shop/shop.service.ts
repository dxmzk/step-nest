/**
 * Author: Meng
 * Date: 2022-03-09
 * Desc: 店铺
 */
import { Injectable } from '@nestjs/common';
import ResultData from 'src/model/ResultData';

@Injectable()
export class ShopService {
  // 获取banner/轮播图
  async queryBanners(): Promise<ResultData> {
    return ResultData.success('');
  }

  // 获取tab
  async queryTabs(): Promise<ResultData> {
    return ResultData.success('');
  }

  // 添加banner/轮播图
  async createBanner(): Promise<ResultData> {
    return ResultData.success('');
  }
}
