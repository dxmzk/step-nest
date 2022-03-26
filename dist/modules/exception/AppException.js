"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
class AppException extends common_1.HttpException {
    constructor(msg, code) {
        super(msg, code);
    }
    static init(msg, code) {
        return new AppException(msg, code);
    }
}
exports.default = AppException;
//# sourceMappingURL=AppException.js.map