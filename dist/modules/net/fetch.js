"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.download = exports.network = void 0;
function network(options) {
    if (options.method == 'GET') {
        delete options.body;
    }
    return fetch(options.url, options)
        .then((data) => {
        console.log('------------>');
        return data.json();
    });
}
exports.network = network;
function download(options) {
    return fetch(options.url, options)
        .then((data) => data.blob() || data.json());
}
exports.download = download;
exports.default = {
    network,
    download
};
//# sourceMappingURL=fetch.js.map