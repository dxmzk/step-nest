/**
 * Author: Meng
 * Date: 2022-03-09
 * Desc: 会员
 */
import { Controller, Get, Query } from '@nestjs/common';
import ResultData from 'src/model/ResultData';
import { MemberService } from './member.service';

@Controller('Member')
export class MemberController {
  constructor(private readonly service: MemberService) {}

  //
  @Get('test')
  test(): Promise<ResultData> {
    return this.service.onTest();
  }
}
