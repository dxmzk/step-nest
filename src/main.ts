/**
 * Author: Meng
 * Date: 2022-03-09
 * Desc:
 */
import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { WsAdapter } from '@nestjs/platform-ws';
import rateLimit from 'express-rate-limit';
// import * as csurf from 'tiny-csrf';
// import * as cookieParser from 'cookie-parser';
import helmet from 'helmet';
import * as compression from 'compression';

import { AppModule } from './app.module';
import Constants, { RunEnv } from './config/constants';
import { LogInterceptor } from './modules/interceptor/log_interceptor';
import AppWebSocketServer from './services/websocket/app_websocket';

// 服务
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setting(app);
  await app.listen(Constants.port);
}
// app 配置
function setting(app: INestApplication) {
  app.enableCors(); // 开启跨源资源共享（CORS）请求资源
  // app.use(cookieParser('cookie-parser-secret'));
  // app.use(csurf(Constants.aes_key));
  app.use(helmet());
  app.use(compression()); // 启用压缩
  if(Constants.run_env != RunEnv.Prod) {
    // app.useGlobalInterceptors(new LogInterceptor()); // 全局日志拦截器
  }
  app.useWebSocketAdapter(new WsAdapter(app));
  // 请求限速
  app.use(
    rateLimit({
      windowMs: 1000, // 15 minutes
      max: 10000, // Limit each IP to 3000 requests per `window` (here, per 1 minutes)
      standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
      legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    }),
  );
  AppWebSocketServer.init(); // 启动WebSocket
}
// console.log(process.env);
bootstrap();
