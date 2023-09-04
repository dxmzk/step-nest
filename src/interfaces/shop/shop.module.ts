import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ShopController } from './shop.controller';
import { ShopService } from './shop.service';

@Module({
  providers: [ShopService, JwtService],
  controllers: [ShopController]
})
export class ShopModule {}
