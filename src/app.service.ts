/**
 * Create By: Meng
 * Create Date: 2022-02
 * Desc: 带有单个方法的基本服务
 */
import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class AppService {
  

  @Cron('* * 1 * * *')
  handleAppDayCrontab() {
    // 每小时一分执行
    console.log('============> handleAppDayCrontab')
  }

  @Cron('* 1 * * * *')
  handleAppHourCrontab() {
    // 每小时一分执行
    console.log('============> handleAppHourCrontab')
  }
}
