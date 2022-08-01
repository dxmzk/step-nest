"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
const config_1 = require("./config");
const axios_1 = require("./axios");
function request({ host = 'base', url = '', method = 'GET', data = {}, headers = {} } = {}) {
    const baseURL = (0, config_1.requestHost)(host);
    headers = (0, config_1.requestHeader)(headers);
    data = (0, config_1.requestParams)(data);
    const options = { baseURL, url, method, headers, data };
    _pointLog('-----------> Request <-----------', options);
    return new Promise((resolve) => {
        let result = { message: '', code: -1, data: null, header: {} };
        (0, axios_1.network)(options).then((res) => {
            _pointLog('-----------> Response <-----------', res.data);
            if (res.status == 200) {
                _parseData(res, result);
                resolve(result);
            }
            else {
                _parseError(res, result);
                resolve(result);
            }
        }).catch((err) => {
            _pointLog('-----------> Error <-----------', err);
            _parseError(err, result);
            resolve(result);
        });
    });
}
exports.request = request;
function _parseData(res, result) {
    result.data = res.data;
    result.header = res.header;
    result.code = 0;
}
function _parseError(data, result) {
    if (data.statusCode) {
        result.code = data.statusCode;
        result.message = data.errMsg;
    }
    else if (data.errMsg) {
        result.code = -10101;
        result.message = data.errMsg;
    }
}
function _pointLog(tag, msg) {
}
//# sourceMappingURL=index.js.map