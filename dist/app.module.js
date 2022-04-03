"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const account_module_1 = require("./interfaces/account/account.module");
const core_1 = require("@nestjs/core");
const menu_module_1 = require("./interfaces/menu/menu.module");
const shop_module_1 = require("./interfaces/shop/shop.module");
const book_module_1 = require("./interfaces/book/book.module");
const author_module_1 = require("./interfaces/author/author.module");
const activity_module_1 = require("./interfaces/activity/activity.module");
const mysql_1 = require("./config/mysql");
const AppExceptionFilter_1 = require("./modules/exception/AppExceptionFilter");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(mysql_1.default),
            account_module_1.AccountModule,
            activity_module_1.ActivityModule,
            author_module_1.AuthorModule,
            book_module_1.BookModule,
            menu_module_1.MenuModule,
            shop_module_1.ShopModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            { provide: core_1.APP_FILTER, useClass: AppExceptionFilter_1.default },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map