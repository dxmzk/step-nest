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
exports.UploadController = void 0;
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const path_1 = require("path");
const platform_express_1 = require("@nestjs/platform-express");
let UploadController = class UploadController {
    uploadFile(file) {
        console.log(file);
    }
    uploadFiles(files) {
        console.log(files);
    }
    uploadFileFields(files) {
        console.log(files);
    }
    uploadAnyFile(files) {
        console.log(files);
    }
    getFile(res) {
        const file = (0, fs_1.createReadStream)((0, path_1.join)(process.cwd(), 'package.json'));
        res.set({
            'Content-Type': 'application/json',
            'Content-Disposition': 'attachment; filename="package.json"',
        });
        return new common_1.StreamableFile(file);
    }
};
__decorate([
    (0, common_1.Post)("file"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("file")),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UploadController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Post)("files"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)("files")),
    __param(0, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], UploadController.prototype, "uploadFiles", null);
__decorate([
    (0, common_1.Post)("upload"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: "avatar", maxCount: 1 },
        { name: "background", maxCount: 1 },
    ])),
    __param(0, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UploadController.prototype, "uploadFileFields", null);
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.AnyFilesInterceptor)()),
    __param(0, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], UploadController.prototype, "uploadAnyFile", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Response)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", common_1.StreamableFile)
], UploadController.prototype, "getFile", null);
UploadController = __decorate([
    (0, common_1.Controller)("/upload")
], UploadController);
exports.UploadController = UploadController;
//# sourceMappingURL=upload.controller.js.map