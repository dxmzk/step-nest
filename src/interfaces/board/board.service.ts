/**
 * Author: Meng
 * Date: 2022-03-09
 * Desc: 看板
 */
import { Injectable } from '@nestjs/common';
import ResultData from '../../model/ResultData';

@Injectable()
export class BoardService {
  constructor() {}

  //
  async onTest(): Promise<ResultData> {
    return ResultData.success('tag');
  }
}
