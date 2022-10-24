/**
 * Create By: Meng
 * Create Date: 2022-03
 * Desc: 数据库配置
 */

const mysqlConfig: any = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: 'admin123',
  database: 'test',
  entities: ["dist/**/*.entity{.ts,.js}"],
  synchronize: true,
  retryDelay: 3000, // 两次重试连接的间隔(ms)（默认：3000）
  retryAttempts: 10, // 重试连接数据库的次数（默认：10）
  autoLoadEntities: true, // 如果为true,将自动加载实体(默认：false)
  keepConnectionAlive: false, // 如果为true，在应用程序关闭后连接不会关闭（默认：false)
};

export default mysqlConfig;
