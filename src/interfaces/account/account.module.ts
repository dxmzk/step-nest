import { Module, CacheModule } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { User } from 'src/dto/entity/user.entity';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';

@Module({
  // imports: [TypeOrmModule.forFeature([User])],
  imports: [CacheModule.register()],
  controllers: [AccountController],
  providers: [AccountService]
})
export class AccountModule {}
