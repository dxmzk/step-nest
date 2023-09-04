/**
 * Author: Meng
 * Date: 2022-03-09
 * Desc: 会员
 */
import { Injectable } from '@nestjs/common';
import ResultData from '../../model/ResultData';

@Injectable()
export class MemberService {
  constructor() {}

  //
  async onTest(): Promise<ResultData> {
    return ResultData.success('tag');
  }
}
