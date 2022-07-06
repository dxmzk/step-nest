/**
 * Create By: Meng
 * Create Date: 2022-02
 * Desc: 应用程序的根模块。
 */
import { Module } from "@nestjs/common";
import { APP_FILTER } from "@nestjs/core";
import { ScheduleModule } from "@nestjs/schedule";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import { AccountModule } from "./interfaces/account/account.module";
import { MenuModule } from "./interfaces/menu/menu.module";
import { ShopModule } from "./interfaces/shop/shop.module";
import { BookModule } from "./interfaces/book/book.module";
import { AuthorModule } from "./interfaces/author/author.module";
import { ActivityModule } from "./interfaces/activity/activity.module";
import { SystemModule } from './interfaces/system/system.module';
import { ConfigModule } from './interfaces/config/config.module';

import { SocketModule } from './services/websocket/socket.module';
// import Mysql from "./config/mysql";
import AppExceptionFilter from "./modules/exception/AppExceptionFilter";


@Module({
  imports: [
    // TypeOrmModule.forRoot(Mysql),
    ScheduleModule.forRoot(),
    AccountModule,
    ActivityModule,
    AuthorModule,
    BookModule,
    MenuModule,
    ShopModule,
    SystemModule,
    ConfigModule,
    SocketModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_FILTER, useClass: AppExceptionFilter }
  ],
})
export class AppModule {}
