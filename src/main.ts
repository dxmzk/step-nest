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
import { WsAdapter } from "@nestjs/platform-ws";
import csrf from '@fastify/csrf-protection';
import fastifyCompress from "@fastify/compress";
import rateLimit from "@fastify/rate-limit";
import helmet from '@fastify/helmet';
import fastifyMutipart from '@fastify/multipart';

import { AppModule } from "./app.module";
import constants from "./config/constants";
import { LogInterceptor } from "./modules/interceptor/log_interceptor";
// import { RoleGuard } from "./modules/guards/role_guard";
// import AppExceptionFilter from './modules/exception/AppExceptionFilter';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const fastAda = new FastifyAdapter();
  fastAda.register(rateLimit, { global: false, max: 5000, timeWindow: 60000 }); // 请求限制，一分钟5000次
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, fastAda);
  app.register(fastifyMutipart, { addToBody: true }); // fastify文件上传支持库
  // app.useGlobalFilters(new AppExceptionFilter()); // 全局服务错误处理
  app.register(csrf); // 减轻跨站点请求伪造（CSRF 或 XSRF）一种恶意利用网站攻击
  app.register(helmet, { global: true }); // 保护应用免受一些众所周知的 Web 漏洞的影响
  app.register(fastifyCompress, { encodings: ["gzip", "deflate"] }); // 压缩功能
  // app.useGlobalGuards(new RoleGuard()); // 全局角色守卫
  app.useGlobalInterceptors(new LogInterceptor()); // 全局日志拦截器
  app.useWebSocketAdapter(new WsAdapter(app)); // WebSocket
  await app.listen(constants.port);
}

bootstrap();
