/**
 * Author: Meng
 * Date: 2022-03-09
 * Desc: 订单
 */
import { Controller, Get, Query } from '@nestjs/common';
import ResultData from 'src/model/ResultData';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly service: OrderService) {}

  //
  @Get('test')
  test(): Promise<ResultData> {
    return this.service.onTest();
  }
}
