"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.download = exports.network = void 0;
function network(options) {
    return fetch(options.url, options)
        .then((data) => data.json());
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