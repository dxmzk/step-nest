"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuService = void 0;
const common_1 = require("@nestjs/common");
const AppResult_1 = require("../../modules/AppResult");
let MenuService = class MenuService {
    async queryMenu() {
        return AppResult_1.default.succee('');
    }
    async updateMenu(id) {
        return AppResult_1.default.succee('');
    }
    async createMenu(id) {
        return AppResult_1.default.succee('');
    }
    async deleteMenu(id) {
        return AppResult_1.default.succee('');
    }
};
MenuService = __decorate([
    (0, common_1.Injectable)()
], MenuService);
exports.MenuService = MenuService;
//# sourceMappingURL=menu.service.js.map