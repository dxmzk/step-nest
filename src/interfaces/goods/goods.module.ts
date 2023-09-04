import { Module } from '@nestjs/common';
import { GoodsController } from './goods.controller';
import { GoodsService } from './goods.service';

@Module({
  providers: [GoodsService],
  controllers: [GoodsController],
})
export class GoodsModule {}
