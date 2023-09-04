/**
 * Author: Meng
 * Date: 2022-03-09
 * Desc: 优惠券
 */
import { Controller, Get, Query } from '@nestjs/common';
import ResultData from 'src/model/ResultData';
import { CouponService } from './coupon.service';

@Controller('Coupon')
export class CouponController {
  constructor(private readonly service: CouponService) {}

  //
  @Get('test')
  test(): Promise<ResultData> {
    return this.service.onTest();
  }
}
