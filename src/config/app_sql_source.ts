/**
 * Author: Meng
 * Date: 2022-03-09
 * Desc:
 * 配置参考：https://typeorm.io/data-source-options
 */

import { DataSource, QueryFailedError } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: 'admin123',
  database: 'shop3',
  entities: ['dist/**/*.entity{.ts,.js}'],
  // cache: true,
  cache: {
    duration: 600000, // 30 seconds
  },
  logging: false,
  synchronize: false, // 是否在每次启动时自动同步数据库。小心不要在生产中使用否则会丢失数据。
  subscribers: [],
  migrations: [],
});

/**
 * 与数据库建立初始连接，注册所有实体,
 * 并 "同步" 数据库模式，调用新创建的数据库的 "initialize()" 方法
 * 只需调用一次
 */
AppDataSource.initialize()
  .then((res) => {})
  .catch(parseError);

function parseError(error) {
  console.log('typeorm error:', error);
}

export default AppDataSource;
