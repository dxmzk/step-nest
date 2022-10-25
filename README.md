
## 简介

地址：https://github.com/nestjs/nest
文档：https://docs.nestjs.cn/
加密库：crypto-js
http://localhost:8397/3000
定时任务：https://docs.nestjs.cn/8/techniques?id=%e5%ae%9a%e6%97%b6%e4%bb%bb%e5%8a%a1
数据卡：https://github.com/typeorm/typeorm

## 开始

```bash
$ npm i -g @nestjs/cli
$ npm install
$ npm run start
$ npm run start:dev
$ npm run start:prod

$ nest g controller name or path/name // 创建服务类
$ nest g service name or path/name    // 创建服务类
$ nest g module name or path/name     // 创建模块
```

## Test

```
$ npm run test
$ npm run test:e2e
$ npm run test:cov
```

### 结构

```bash

├── dist                      # 
│── test                      # 测试代码
│── src                       # 源代码
    │── config                # 配置项
        |── mysql.ts          # - 数据库配置
    │── dto                   # 实体/数据类
        |── body              # - 请求Body
        |── data              # - 
        |── entity            # - 数据库映射实体
    │── interfaces            # 接口模块
        │── account           # - 账号
        │── activity          # - 活动
        │── author            # - 作者
        │── book              # - 书籍
        │── menu              # - 菜单
        │── shop              # - 商店
        │── upload            # - 文件上传
    │── modules               # 模块
        |── exception         # - 错误处理模块
        |── AppResult         # - 数据返回实体类
    │── utils                 # 工具类
        |── crypto            # - 加密
        |── index.ts          # - 
        |── userUtils.ts      # - 用户信息处理
    │── app.controller.ts     # 全局配置
    │── app.module.ts         # 项目入口
    │── app.service.ts        # 全局样式
    │── main.ts               # 入口
├── .eslintrc                 # eslint配置文件
│── .gitignore                # git忽视文件
├── .prettierrc               # 统一风格prettier配置
│── babel.config.js           # babel配置
│── tsconfig.config.json      # babel配置
│── package.json              # 项目依赖等
│── README.md                 # 说明文件
```
