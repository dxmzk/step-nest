import { Module } from '@nestjs/common';
import { SortController } from './sort.controller';
import { SortService } from './sort.service';

@Module({
  providers: [SortService],
  controllers: [SortController],
})
export class SortModule {}
