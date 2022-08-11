/**
 * Create By: Meng
 * Create Date: 2022-02
 * Desc: 应用程序入口文件
 */
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import fastifyCompress from '@fastify/compress';
import fastifyRateLimit from '@fastify/rate-limit';
import { WsAdapter } from '@nestjs/platform-ws';
import { AppModule } from './app.module';
import constants from './config/constants';
import { LogInterceptor } from './modules/interceptor/log_interceptor';
// import AppExceptionFilter from './modules/exception/AppExceptionFilter';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  // app.useGlobalFilters(new AppExceptionFilter()); // 全局服务错误处理
  // app.useGlobalGuards(new RoleGuard()); // 全局角色守卫
  app.register(fastifyCompress, { encodings: ['gzip', 'deflate'] }); // 压缩功能
  app.useGlobalInterceptors(new LogInterceptor()); // 全局日志拦截器
  app.useWebSocketAdapter(new WsAdapter(app)); // WebSocket
  // app.use(fastifyRateLimit()); // 为了保护您的应用程序免受暴力攻击，您必须实现某种速率限制
  await app.listen(constants.port);
}

bootstrap();
