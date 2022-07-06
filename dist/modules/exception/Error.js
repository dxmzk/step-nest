"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AppException_1 = require("./AppException");
const Errors = {
    PWD_PARAM: AppException_1.default.init('密码规则有误！', 200001),
    PWD_ERR: AppException_1.default.init('账号密码有误！', 200002),
    ACCOUNT_PARAM: AppException_1.default.init('账号参数有误！', 200010),
    ACCOUNT_REPEAT: AppException_1.default.init('账号重复！', 200011),
    ACCOUNT_OUTOF: AppException_1.default.init('账号字符过长！', 200012),
    ACCOUNT_ERROR: AppException_1.default.init('账号有误！', 200013),
    ACCOUNT_NOT: AppException_1.default.init('账号不存在！', 200014),
    LOGIN_ERROR: AppException_1.default.init('账号规则有误！', 200020),
    PARAM_ERROR: AppException_1.default.init('参数有误', 200100),
    UNKNOWN_ERROR: AppException_1.default.init('未知异常', 100101),
};
exports.default = Errors;
//# sourceMappingURL=Error.js.map