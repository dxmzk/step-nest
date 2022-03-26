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
import { AppModule } from './app.module';
// import AppExceptionFilter from './modules/exception/AppExceptionFilter';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  // app.useGlobalFilters(new AppExceptionFilter());
  await app.listen(8197);
}
bootstrap();
