import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MenuController } from './menu.controller';
import { MenuService } from './menu.service';

@Module({
  providers: [MenuService, JwtService],
  controllers: [MenuController]
})
export class MenuModule {}
