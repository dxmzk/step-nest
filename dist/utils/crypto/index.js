"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aesDecrypt = exports.aesEncrypt = void 0;
const crypto_js_1 = require("crypto-js");
const AES_KEY = 'ASD12J31KJ2B3ZCKJXUY5ZO2';
function aesEncrypt(str) {
    return crypto_js_1.AES.encrypt(str, AES_KEY).toString();
}
exports.aesEncrypt = aesEncrypt;
function aesDecrypt(str) {
    let data = '';
    try {
        data = crypto_js_1.AES.decrypt(str, AES_KEY).toString(crypto_js_1.enc.Utf8);
    }
    catch (error) {
        console.log(error);
        data = '';
    }
    return data;
}
exports.aesDecrypt = aesDecrypt;
//# sourceMappingURL=index.js.map