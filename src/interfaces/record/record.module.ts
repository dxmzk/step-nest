import { Module } from '@nestjs/common';
import { RecordController } from './record.controller';
import { RecordService } from './record.service';

@Module({
  providers: [RecordService],
  controllers: [RecordController],
})
export class RecordModule {}
