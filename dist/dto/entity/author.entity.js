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
exports.Author = void 0;
const typeorm_1 = require("typeorm");
let Author = class Author {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Author.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", default: '', length: 32 }),
    __metadata("design:type", String)
], Author.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", default: '', length: 64 }),
    __metadata("design:type", String)
], Author.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", default: '', length: 200 }),
    __metadata("design:type", String)
], Author.prototype, "desc", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", default: '1', length: 100 }),
    __metadata("design:type", String)
], Author.prototype, "icon", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", default: '', length: 200 }),
    __metadata("design:type", String)
], Author.prototype, "about", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", default: '', length: 100 }),
    __metadata("design:type", String)
], Author.prototype, "link", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Author.prototype, "tag", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Author.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Author.prototype, "classify", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Author.prototype, "star", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Author.prototype, "num", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Author.prototype, "fans", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", default: '', length: 20 }),
    __metadata("design:type", String)
], Author.prototype, "birth", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", default: '', length: 20 }),
    __metadata("design:type", String)
], Author.prototype, "create_date", void 0);
Author = __decorate([
    (0, typeorm_1.Entity)()
], Author);
exports.Author = Author;
//# sourceMappingURL=author.entity.js.map