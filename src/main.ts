/**
 * Create By: Meng
 * Create Date: 2022-02
 * Desc: 应用程序入口文件
 */
import { NestFactory } from "@nestjs/core";
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify";
import fastifyCompress from "@fastify/compress";
import rateLimit from "@fastify/rate-limit";
import fastifyMutipart from 'fastify-multipart'
import { WsAdapter } from "@nestjs/platform-ws";
import { AppModule } from "./app.module";
import constants from "./config/constants";
import { LogInterceptor } from "./modules/interceptor/log_interceptor";
// import AppExceptionFilter from './modules/exception/AppExceptionFilter';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const fastAda = new FastifyAdapter();
  fastAda.register(rateLimit, { global: false, max: 5000, timeWindow: 60000 }); // 请求限制，一分钟5000次
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, fastAda);
  app.register(fastifyMutipart, { addToBody: true }); // fastify文件上传支持库
  // app.useGlobalFilters(new AppExceptionFilter()); // 全局服务错误处理
  // app.useGlobalGuards(new RoleGuard()); // 全局角色守卫
  app.register(fastifyCompress, { encodings: ["gzip", "deflate"] }); // 压缩功能
  app.useGlobalInterceptors(new LogInterceptor()); // 全局日志拦截器
  app.useWebSocketAdapter(new WsAdapter(app)); // WebSocket
  await app.listen(constants.port);
}

bootstrap();
