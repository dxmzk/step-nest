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
exports.Book = void 0;
const typeorm_1 = require("typeorm");
let Book = class Book {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Book.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", default: '', length: 32 }),
    __metadata("design:type", String)
], Book.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", default: '', length: 64 }),
    __metadata("design:type", String)
], Book.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", default: '', length: 200 }),
    __metadata("design:type", String)
], Book.prototype, "desc", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Book.prototype, "size", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", default: '1', length: 100 }),
    __metadata("design:type", String)
], Book.prototype, "cover", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", default: '', length: 200 }),
    __metadata("design:type", String)
], Book.prototype, "about", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", default: '', length: 100 }),
    __metadata("design:type", String)
], Book.prototype, "link", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Book.prototype, "format", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Book.prototype, "tag", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Book.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Book.prototype, "star", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Book.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Book.prototype, "num", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Book.prototype, "collect", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", default: '', length: 20 }),
    __metadata("design:type", String)
], Book.prototype, "create_date", void 0);
Book = __decorate([
    (0, typeorm_1.Entity)()
], Book);
exports.Book = Book;
//# sourceMappingURL=book.entity.js.map