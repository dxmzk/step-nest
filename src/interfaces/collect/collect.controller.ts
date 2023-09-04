/**
 * Author: Meng
 * Date: 2022-03-09
 * Desc: 收藏
 */
import { Controller, Get, Query } from '@nestjs/common';
import ResultData from 'src/model/ResultData';
import { CollectService } from './collect.service';

@Controller('Collect')
export class CollectController {
  constructor(private readonly service: CollectService) {}

  //
  @Get('test')
  test(): Promise<ResultData> {
    return this.service.onTest();
  }
}
