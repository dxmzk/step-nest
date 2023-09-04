/**
 * Author: Meng
 * Date: 2022-03-09
 * Desc: 记录
 */
import { Controller, Get, Query } from '@nestjs/common';
import ResultData from 'src/model/ResultData';
import { RecordService } from './record.service';

@Controller('Record')
export class RecordController {
  constructor(private readonly service: RecordService) {}

  //
  @Get('test')
  test(): Promise<ResultData> {
    return this.service.onTest();
  }
}
