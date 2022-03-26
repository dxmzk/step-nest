import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorController } from './author.controller';

@Module({
  providers: [AuthorService],
  controllers: [AuthorController]
})
export class AuthorModule {}
