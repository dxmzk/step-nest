"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppResult {
    constructor(code, message, data) {
        this.code = 0;
        this.message = '请求失败';
        this.data = null;
        this.code = code;
        this.message = message;
        this.data = data;
    }
    static succee(data) {
        return new AppResult(0, '成功', data);
    }
    static list(list, total, pageSize, pageNum) {
        const hasMore = total > pageSize * pageNum;
        const data = {
            list,
            total: 0,
            pageSize,
            pageNum,
            hasMore,
        };
        return AppResult.succee(data);
    }
    static fail(code, message) {
        return new AppResult(code, message, null);
    }
    static error(code, message) {
        return new AppResult(code, message, null);
    }
}
exports.default = AppResult;
//# sourceMappingURL=AppResult.js.map