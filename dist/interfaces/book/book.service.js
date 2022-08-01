"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
const app_sql_source_1 = require("../../config/app_sql_source");
const book_entity_1 = require("../../dto/entity/book.entity");
const AppResult_1 = require("../../modules/AppResult");
const pexels_1 = require("../../modules/api/pexels");
let BookService = class BookService {
    async queryBooks(body) {
        const start = (body.pageNum || 0) * (body.pageSize || 10);
        const end = (body.pageNum || 0) * (body.pageSize || 10);
        const books = await app_sql_source_1.default.getRepository(book_entity_1.Book)
            .createQueryBuilder("book")
            .skip(start)
            .take(end)
            .getMany();
        return AppResult_1.default.succee(books);
    }
    async queryDetail(id) {
        return AppResult_1.default.succee("");
    }
    async createBook(body) {
        const book = app_sql_source_1.default.getRepository(book_entity_1.Book);
        const count = await book.count();
        const res = await book.save(body);
        return AppResult_1.default.succee(res);
    }
    async updateBook() {
        return AppResult_1.default.succee("");
    }
    async deleteOrDown(id) {
        return AppResult_1.default.succee("");
    }
    async queryBookUrl(param) {
        console.log(param);
        const { code, data } = await (0, pexels_1.getHotPhotos)(20);
        if (code == 0) {
        }
        return AppResult_1.default.succee(data);
    }
    async queryHotBooks() {
        return AppResult_1.default.succee("");
    }
    async querySimilarBook(id) {
        return AppResult_1.default.succee("");
    }
};
BookService = __decorate([
    (0, common_1.Injectable)()
], BookService);
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map