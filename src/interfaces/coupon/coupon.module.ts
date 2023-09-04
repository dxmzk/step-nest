import { Module } from '@nestjs/common';
import { CouponController } from './coupon.controller';
import { CouponService } from './coupon.service';

@Module({
  providers: [CouponService],
  controllers: [CouponController],
})
export class CouponModule {}
