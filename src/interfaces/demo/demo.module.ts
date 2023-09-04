import { Module } from '@nestjs/common';
import { DemoController } from './demo.controller';
import { DemoService } from './demo.service';

@Module({
  providers: [DemoService],
  controllers: [DemoController],
})
export class DemoModule {}
