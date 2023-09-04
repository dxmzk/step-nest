/**
 * Author: Meng
 * Date: 2022-03-09
 * Desc:
 */
import { Controller, Get, Query } from '@nestjs/common';
import ResultData from 'src/model/ResultData';
import { DemoService } from './demo.service';

@Controller('demo')
export class DemoController {
  constructor(private readonly service: DemoService) {}

  //
  @Get('test')
  test(): Promise<ResultData> {
    return this.service.onTest();
  }
}
