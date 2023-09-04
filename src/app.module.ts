/**
 * Author: Meng
 * Date: 2022-03-09
 * Desc: 应用程序的根模块。
 */
import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { ScheduleModule } from '@nestjs/schedule';

import AppExceptionFilter from './modules/exception/AppExceptionFilter';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AccountModule } from './interfaces/account/account.module';
// import { FileModule } from './interfaces/file/file.module';
import { MenuModule } from './interfaces/menu/menu.module';
import { GoodsModule } from './interfaces/goods/goods.module';
import { SocketModule } from './services/websocket/socket.module';
import { SystemModule } from './interfaces/system/system.module';
import { jwt_config } from './modules/auth/auth_config';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    jwt_config(),
    AccountModule,
    MenuModule,
    // ShopModule,
    GoodsModule,
    SocketModule,
    SystemModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_FILTER, useClass: AppExceptionFilter },
  ],
})
export class AppModule {}
