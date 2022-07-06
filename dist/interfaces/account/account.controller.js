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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountController = void 0;
const common_1 = require("@nestjs/common");
const account_service_1 = require("./account.service");
const index_1 = require("../../dto/body/index");
const Error_1 = require("../../modules/exception/Error");
const user_utils_1 = require("../../utils/user_utils");
let AccountController = class AccountController {
    constructor(appService) {
        this.appService = appService;
    }
    onRegister(body) {
        return this.appService.onRegister(body);
    }
    onLogin(body) {
        return this.appService.onLogin(body);
    }
    onReset(body) {
        return this.appService.onReset(body);
    }
    queryUserInfo(req) {
        var _a;
        const headers = ((_a = req === null || req === void 0 ? void 0 : req.raw) === null || _a === void 0 ? void 0 : _a.headers) || {};
        const info = (0, user_utils_1.parasToken)(headers.token);
        let uid = info.uid;
        if (!uid) {
            throw Error_1.default.ACCOUNT_ERROR;
        }
        return this.appService.queryUserInfo(uid);
    }
    onLogout(req) {
        var _a;
        const headers = ((_a = req === null || req === void 0 ? void 0 : req.raw) === null || _a === void 0 ? void 0 : _a.headers) || {};
        const info = (0, user_utils_1.parasToken)(headers.token);
        let uid = info.uid;
        if (!uid) {
            throw Error_1.default.ACCOUNT_ERROR;
        }
        return this.appService.onLogout(uid);
    }
    onDelete(req) {
        var _a;
        const headers = ((_a = req === null || req === void 0 ? void 0 : req.raw) === null || _a === void 0 ? void 0 : _a.headers) || {};
        const info = (0, user_utils_1.parasToken)(headers.token);
        let uid = info.uid;
        if (!uid) {
            throw Error_1.default.ACCOUNT_ERROR;
        }
        return this.appService.onDelete(uid);
    }
    getUsers(mode) {
        return this.appService.getUsers(mode);
    }
};
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [index_1.RegisterBody]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "onRegister", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [index_1.LoginBody]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "onLogin", null);
__decorate([
    (0, common_1.Post)('reset'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [index_1.RegisterBody]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "onReset", null);
__decorate([
    (0, common_1.Header)('token', ''),
    (0, common_1.Get)('info'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "queryUserInfo", null);
__decorate([
    (0, common_1.Get)('logout'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "onLogout", null);
__decorate([
    (0, common_1.Get)('delete'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "onDelete", null);
__decorate([
    (0, common_1.Get)('users'),
    __param(0, (0, common_1.Query)('mode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "getUsers", null);
AccountController = __decorate([
    (0, common_1.Controller)('account'),
    __metadata("design:paramtypes", [account_service_1.AccountService])
], AccountController);
exports.AccountController = AccountController;
//# sourceMappingURL=account.controller.js.map