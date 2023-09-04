/**
 * Author: Meng
 * Date: 2022-03-09
 * Desc: 看板
 */
import { Controller, Get, Query } from '@nestjs/common';
import ResultData from 'src/model/ResultData';
import { BoardService } from './board.service';

@Controller('Board')
export class BoardController {
  constructor(private readonly service: BoardService) {}

  //
  @Get('test')
  test(): Promise<ResultData> {
    return this.service.onTest();
  }
}
