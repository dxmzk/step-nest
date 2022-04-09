import { Module } from '@nestjs/common';
import { SystemController } from './system.controller';
import { SystemService } from './system.service';

@Module({
  providers: [SystemService],
  controllers: [SystemController]
})
export class SystemModule {}
