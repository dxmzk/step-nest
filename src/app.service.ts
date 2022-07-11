/**
 * Create By: Meng
 * Create Date: 2022-02
 * Desc: 带有单个方法的基本服务
 */
import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class AppService {
  

  // 每个小时 一分 执行
  @Cron('* * 1 * * *')
  handleAppDayCrontab() {
    console.log('============> handleAppDayCrontab')
  }

  // 每天 一点 执行
  @Cron('* 1 * * * *')
  handleAppHourCrontab() {
    console.log('============> handleAppHourCrontab', Date.now())
  }
}
