/**
 * Create By: Meng
 * Create Date: 2022-02
 * Desc: 带有单个方法的基本服务
 */
import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class AppService {
  

  @Cron('* 1 * * * *')
  handleAppCrontab() {
    // 每小时一分执行
  }
}
