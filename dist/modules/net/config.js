"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestParams = exports.requestHeader = exports.requestHost = exports.ENV_CONST = void 0;
var ENV_NAME;
(function (ENV_NAME) {
    ENV_NAME["PROD"] = "prod";
    ENV_NAME["TEST"] = "test";
    ENV_NAME["DEV"] = "dev";
})(ENV_NAME || (ENV_NAME = {}));
exports.ENV_CONST = {
    PKEY: '563492ad6f91700001000001c79e2acd5ad3461baf2cb018a7d70f48',
    AMAP: "4e013fcd32723446a88ce0880c425a88",
    env: ENV_NAME.TEST,
};
function requestHost(host = 'base') {
    const env = exports.ENV_CONST.env;
    const url = _ENV_HOST[env][host];
    return url;
}
exports.requestHost = requestHost;
function requestHeader(header = {}) {
    return Object.assign(Object.assign({}, header), { Authorization: exports.ENV_CONST.PKEY, token: '' });
}
exports.requestHeader = requestHeader;
function requestParams(params = {}) {
    return Object.assign({}, params);
}
exports.requestParams = requestParams;
const _ENV_HOST = {
    prod: {
        base: 'https://prodbase123.com',
        auth: 'https://prodauth123.com',
        pexels: 'https://api.pexels.com/v1',
    },
    test: {
        base: 'https://testase123.com',
        auth: 'https://testauth123.com',
        pexels: 'https://api.pexels.com/v1',
    },
    dev: {
        base: '/axio',
        auth: '/apis',
        pexels: '/pexels',
    },
};
//# sourceMappingURL=config.js.map