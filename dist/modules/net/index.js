"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
const config_1 = require("./config");
const fetch_1 = require("./fetch");
function request({ host = 'base', path = '', method = 'GET', data = {}, headers = {}, toast = true, loading = true, loadStr = '加载中...' } = {}) {
    loading && _showLoading(loading, loadStr);
    const url = (0, config_1.requestHost)(host) + path;
    headers = (0, config_1.requestHeader)(headers);
    data = (0, config_1.requestParams)(data);
    const options = { url, method, headers, path, body: data };
    _pointLog('-----------> Request <-----------', options);
    return new Promise((resolve) => {
        let result = { message: '', code: -1, data: null, header: {} };
        (0, fetch_1.network)(options).then((res) => {
            _pointLog('-----------> Response <-----------', res.data);
            if (res.statusCode == 200) {
                result = _parseData(res, result);
                resolve(result);
            }
            else {
                result = _parseError(res, result);
                resolve(result);
            }
        }).catch((err) => {
            _pointLog('-----------> Error <-----------', err);
            result = _parseError(err, result);
            resolve(result);
        }).finally(() => {
            loading && _showLoading(false);
            if (toast && result.code != 0) {
                _showToast(result.message);
            }
        });
    });
}
exports.request = request;
function _parseData(res, result) {
    result.data = res.data;
    result.header = res.header;
    result.code = 0;
    return result;
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
    return result;
}
function _showToast(title = '', icon = 'none') {
    console.log(title, icon);
}
function _showLoading(loading, title = '加载中...') {
    if (loading) {
        console.log(title);
    }
    else {
    }
}
function _pointLog(tag, msg) {
    if (config_1.ENV_CONST.env != 'prod') {
        console.log(tag);
        console.log(msg);
    }
}
//# sourceMappingURL=index.js.map