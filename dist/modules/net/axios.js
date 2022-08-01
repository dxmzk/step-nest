"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.network = void 0;
const axios_1 = require("axios");
const instance = axios_1.default.create({
    timeout: 20000,
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
});
function network(options) {
    instance.defaults.baseURL = options.host;
    return new Promise((resolve, reject) => {
        instance.request(options).then((response) => {
            resolve(response);
        }).catch((err) => {
            reject(err);
        });
    });
}
exports.network = network;
//# sourceMappingURL=axios.js.map