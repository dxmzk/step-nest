/**
 * Author: Meng
 * Date: 2022-03-09
 * Desc: 商品分类
 */
import { Injectable } from '@nestjs/common';
import ResultData from '../../model/ResultData';

@Injectable()
export class SortService {
  constructor() {}

  //
  async onTest(): Promise<ResultData> {
    return ResultData.success('tag');
  }
}
