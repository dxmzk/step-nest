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
exports.Activity = void 0;
const typeorm_1 = require("typeorm");
let Activity = class Activity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Activity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", default: '', length: 64 }),
    __metadata("design:type", String)
], Activity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", default: '', length: 100 }),
    __metadata("design:type", String)
], Activity.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", default: '' }),
    __metadata("design:type", String)
], Activity.prototype, "desc", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", default: '' }),
    __metadata("design:type", String)
], Activity.prototype, "guide", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", default: 0 }),
    __metadata("design:type", Number)
], Activity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", default: 0 }),
    __metadata("design:type", Number)
], Activity.prototype, "tag", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", default: 0 }),
    __metadata("design:type", Number)
], Activity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", default: '', length: 20 }),
    __metadata("design:type", String)
], Activity.prototype, "create_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", default: '', length: 20 }),
    __metadata("design:type", String)
], Activity.prototype, "start_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", default: '', length: 20 }),
    __metadata("design:type", String)
], Activity.prototype, "end_date", void 0);
Activity = __decorate([
    (0, typeorm_1.Entity)()
], Activity);
exports.Activity = Activity;
//# sourceMappingURL=activity.entity.js.map