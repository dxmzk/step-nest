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
exports.ConfigController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../../modules/guards/auth_guard");
const config_service_1 = require("./config.service");
let ConfigController = class ConfigController {
    constructor(appService) {
        this.appService = appService;
    }
    queryBanners() {
        return this.appService.queryBanners();
    }
    queryTabs() {
        return this.appService.queryTabs();
    }
    createBanner() {
        return this.appService.createBanner();
    }
    createTab() {
        return this.appService.createTab();
    }
    deleteBanner() {
        return this.appService.deleteBanner();
    }
    deleteTab() {
        return this.appService.deleteTab();
    }
};
__decorate([
    (0, common_1.Get)("banners"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ConfigController.prototype, "queryBanners", null);
__decorate([
    (0, common_1.Get)("tabs"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ConfigController.prototype, "queryTabs", null);
__decorate([
    (0, common_1.Post)("create_banner"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ConfigController.prototype, "createBanner", null);
__decorate([
    (0, common_1.Post)("create_tab"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ConfigController.prototype, "createTab", null);
__decorate([
    (0, common_1.Post)("delete_banner"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ConfigController.prototype, "deleteBanner", null);
__decorate([
    (0, common_1.Post)("delete_tab"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ConfigController.prototype, "deleteTab", null);
ConfigController = __decorate([
    (0, common_1.Controller)("config"),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:paramtypes", [config_service_1.ConfigService])
], ConfigController);
exports.ConfigController = ConfigController;
//# sourceMappingURL=config.controller.js.map