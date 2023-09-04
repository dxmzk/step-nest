/**
 * Author: Meng
 * Date: 2022-03-09
 * Desc: 优惠券
 */
import { Injectable } from '@nestjs/common';
import ResultData from '../../model/ResultData';

@Injectable()
export class CouponService {
  constructor() {}

  //
  async onTest(): Promise<ResultData> {
    return ResultData.success('tag');
  }
}
