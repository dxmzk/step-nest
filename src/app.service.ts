/**
 * Create By: Meng
 * Create Date: 2022-02
 * Desc: 带有单个方法的基本服务
 */
import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class AppService {
  

  /**
    * * * * * *
    | | | | | |
    | | | | | day of week
    | | | | month
    | | | day of month
    | | hour
    | minute
   second (optional)
  */
 
  // 每天的一点钟执行 
  @Cron('1 1 1 * * *')
  handleAppDayCrontab() {
    console.log('============> handleAppDayCrontab')
  }

  // 每个小时的第一分执行
  @Cron('1 1 * * * *')
  handleAppHourCron() {
    console.log('============> handleAppHourCron', Date.now())
  }

  // 每分钟执行一次/ 每分的第59秒执行
  @Cron('59 * * * * *')
  handleMinuteCron() {
    console.log('============> handleMinuteCron', Date.now())
  }
}
