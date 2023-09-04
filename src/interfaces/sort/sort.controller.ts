/**
 * Author: Meng
 * Date: 2022-03-09
 * Desc: 商品分类
 */
import { Controller, Get, Post, Query } from '@nestjs/common';
import ResultData from 'src/model/ResultData';
import { SortService } from './sort.service';

@Controller('sort')
export class SortController {
  constructor(private readonly service: SortService) {}

  //
  @Get('query')
  querySorts(): Promise<ResultData> {
    return this.service.onTest();
  }
  
  //
  @Get('detail')
  sortDetail(): Promise<ResultData> {
    return this.service.onTest();
  }

  //
  @Get('delete')
  sortDelete(): Promise<ResultData> {
    return this.service.onTest();
  }

  //
  @Post('create')
  createSorts(): Promise<ResultData> {
    return this.service.onTest();
  }

  //
  @Post('update')
  updateSorts(): Promise<ResultData> {
    return this.service.onTest();
  }
}
