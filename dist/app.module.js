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
const mysql_1 = require("./config/mysql");
const core_1 = require("@nestjs/core");
const menu_controller_1 = require("./interfaces/menu/menu.controller");
const menu_module_1 = require("./interfaces/menu/menu.module");
const shop_service_1 = require("./interfaces/shop/shop.service");
const shop_module_1 = require("./interfaces/shop/shop.module");
const book_module_1 = require("./interfaces/book/book.module");
const activity_controller_1 = require("./interfaces/activity/activity.controller");
const activity_service_1 = require("./interfaces/activity/activity.service");
const activity_module_1 = require("./interfaces/activity/activity.module");
const AppExceptionFilter_1 = require("./modules/exception/AppExceptionFilter");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [account_module_1.AccountModule, typeorm_1.TypeOrmModule.forRoot(mysql_1.default), menu_module_1.MenuModule, shop_module_1.ShopModule, book_module_1.BookModule, activity_module_1.ActivityModule],
        controllers: [app_controller_1.AppController, menu_controller_1.MenuController, activity_controller_1.ActivityController],
        providers: [
            app_service_1.AppService,
            { provide: core_1.APP_FILTER, useClass: AppExceptionFilter_1.default },
            shop_service_1.ShopService,
            activity_service_1.ActivityService,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map