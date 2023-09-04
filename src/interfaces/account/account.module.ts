import { Module } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
// import { CacheModule } from '@nestjs/cache-manager';

@Module({
  // imports: [CacheModule.register()],
  imports: [],
  controllers: [AccountController],
  providers: [AccountService],
  // providers: [AccountService, JwtService],
})
export class AccountModule {}
