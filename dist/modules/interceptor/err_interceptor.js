"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const Error_1 = require("../exception/Error");
let ErrInterceptor = class ErrInterceptor {
    intercept(context, next) {
        console.log("ErrInterceptor Before...");
        return next.handle().pipe((0, operators_1.map)(data => (Error_1.default.UNKNOWN_ERROR)));
    }
};
ErrInterceptor = __decorate([
    (0, common_1.Injectable)()
], ErrInterceptor);
exports.ErrInterceptor = ErrInterceptor;
//# sourceMappingURL=err_interceptor.js.map