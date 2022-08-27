/**
 * Author: Meng
 * Date: 2022-08
 * Desc: https://docs.nestjs.cn/9/middlewares
 * 中间件不能在 @Module() 装饰器中列出。我们必须使用模块类的 configure() 方法来设置它们。中间件的模块必须实现 NestModule 接口。
 *  export class AppModule implements NestModule {
      configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware)
          .exclude(
            { path: 'cats', method: RequestMethod.GET },
            { path: 'cats', method: RequestMethod.POST },
            'cats/(.*)',
          )
          .forRoutes(CatsController);
      }
    }
    如果我们想一次性将中间件绑定到每个注册路由，我们可以使用由INestApplication实例提供的 use()方法：
    const app = await NestFactory.create(AppModule);
    app.use(logger);
 * 
 */
 import { Injectable, NestMiddleware } from '@nestjs/common';
 import { Request, Response, NextFunction } from 'express';
 
 @Injectable()
 export class LoggerMiddleware implements NestMiddleware {
   use(req: Request, res: Response, next: NextFunction) {
     console.log('Request...');
     next();
   }
 }