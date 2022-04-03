"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopController = void 0;
const common_1 = require("@nestjs/common");
const shop_service_1 = require("./shop.service");
let ShopController = class ShopController {
    constructor(appService) {
        this.appService = appService;
    }
    queryShops() {
        return this.appService.queryShops();
    }
    queryDetail(id) {
        return this.appService.queryDetail(id);
    }
};
__decorate([
    (0, common_1.Get)("query"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ShopController.prototype, "queryShops", null);
__decorate([
    (0, common_1.Get)("detail"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ShopController.prototype, "queryDetail", null);
ShopController = __decorate([
    (0, common_1.Controller)("shop"),
    __metadata("design:paramtypes", [shop_service_1.ShopService])
], ShopController);
exports.ShopController = ShopController;
//# sourceMappingURL=shop.controller.js.map