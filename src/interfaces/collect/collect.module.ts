import { Module } from '@nestjs/common';
import { CollectController } from './collect.controller';
import { CollectService } from './collect.service';

@Module({
  providers: [CollectService],
  controllers: [CollectController],
})
export class CollectModule {}
