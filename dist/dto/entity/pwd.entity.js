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
exports.Pwd = void 0;
const typeorm_1 = require("typeorm");
let Pwd = class Pwd {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Pwd.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '', length: 24 }),
    __metadata("design:type", String)
], Pwd.prototype, "uid", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '12345678', length: 32 }),
    __metadata("design:type", String)
], Pwd.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint' }),
    __metadata("design:type", Number)
], Pwd.prototype, "date", void 0);
Pwd = __decorate([
    (0, typeorm_1.Entity)()
], Pwd);
exports.Pwd = Pwd;
//# sourceMappingURL=pwd.entity.js.map