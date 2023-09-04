/**
 * Author: Meng
 * Date: 2022-03-09
 * Desc: 活动
 */
import { Controller, Get, Query } from '@nestjs/common';
import ResultData from 'src/model/ResultData';
import { ActivityService } from './activity.service';

@Controller('Activity')
export class ActivityController {
  constructor(private readonly service: ActivityService) {}

  //
  @Get('test')
  test(): Promise<ResultData> {
    return this.service.onTest();
  }
}
