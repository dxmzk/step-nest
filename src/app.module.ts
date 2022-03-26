/**
 * Create By: Meng
 * Create Date: 2022-02
 * Desc: 应用程序的根模块。
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './interfaces/account/account.module';
import Mysql from './config/mysql';
import { APP_FILTER } from '@nestjs/core';
import { MenuController } from './interfaces/menu/menu.controller';
import { MenuModule } from './interfaces/menu/menu.module';
import { ShopService } from './interfaces/shop/shop.service';
import { ShopModule } from './interfaces/shop/shop.module';
import { BookModule } from './interfaces/book/book.module';
import { ActivityController } from './interfaces/activity/activity.controller';
import { ActivityService } from './interfaces/activity/activity.service';
import { ActivityModule } from './interfaces/activity/activity.module';
import { AuthorModule } from './interfaces/author/author.module';
import AppExceptionFilter from './modules/exception/AppExceptionFilter';

@Module({
  imports: [AccountModule, TypeOrmModule.forRoot(Mysql), MenuModule, ShopModule, BookModule, ActivityModule, AuthorModule],
  controllers: [AppController, MenuController, ActivityController],
  providers: [
    AppService,
    { provide: APP_FILTER, useClass: AppExceptionFilter },
    ShopService,
    ActivityService,
  ],
})
export class AppModule {}
