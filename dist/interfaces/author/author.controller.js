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
exports.AuthorController = void 0;
const common_1 = require("@nestjs/common");
const author_service_1 = require("./author.service");
let AuthorController = class AuthorController {
    constructor(appService) {
        this.appService = appService;
    }
    queryAuthor(size, num) {
        return this.appService.queryAuthor();
    }
    authorDetail() {
        return this.appService.authorDetail();
    }
    createAuthor() {
        return this.appService.createAuthor();
    }
    updateAuthor(id) {
        return this.appService.updateAuthor();
    }
    async deleteAuthor(id) {
        return this.appService.deleteAuthor(id);
    }
};
__decorate([
    (0, common_1.Get)("authors"),
    __param(0, (0, common_1.Query)('pageSize')),
    __param(1, (0, common_1.Query)('pageNum')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "queryAuthor", null);
__decorate([
    (0, common_1.Get)("detail"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "authorDetail", null);
__decorate([
    (0, common_1.Post)("create"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "createAuthor", null);
__decorate([
    (0, common_1.Post)("update"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "updateAuthor", null);
__decorate([
    (0, common_1.Get)("delete"),
    __param(0, (0, common_1.Query)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "deleteAuthor", null);
AuthorController = __decorate([
    (0, common_1.Controller)("author"),
    __metadata("design:paramtypes", [author_service_1.AuthorService])
], AuthorController);
exports.AuthorController = AuthorController;
//# sourceMappingURL=author.controller.js.map