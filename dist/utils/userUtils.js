"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parasToken = exports.createToken = void 0;
const crypto_1 = require("./crypto");
function createToken(uid, name) {
    return (0, crypto_1.aesEncrypt)(`${uid};${name}`);
}
exports.createToken = createToken;
function parasToken(token) {
    const res = { uid: '', name: '' };
    if (token) {
        const info = (0, crypto_1.aesDecrypt)(token);
        if (token.indexOf(';') > 0) {
            const ds = info.split(';');
            res.uid = ds[0];
            res.name = ds[1];
        }
    }
    return res;
}
exports.parasToken = parasToken;
//# sourceMappingURL=userUtils.js.map