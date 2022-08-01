"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPhotoInfo = exports.getHotPhotos = exports.searchPhotos = exports.queryPhotos = void 0;
const index_1 = require("../net/index");
function queryPhotos(page = 1, size = 20) {
    return (0, index_1.request)({
        url: `/curated?page=${page}&per_page=${size}`,
        method: "GET",
        host: 'pexels'
    });
}
exports.queryPhotos = queryPhotos;
function searchPhotos(key = "nature", page = 1, size = 20) {
    return (0, index_1.request)({
        url: `/search?query=${key}&page=${page}&per_page=${size}`,
        method: "GET",
        host: 'pexels'
    });
}
exports.searchPhotos = searchPhotos;
function getHotPhotos(page = 20) {
    return (0, index_1.request)({
        url: `/curated?per_page=${page}`,
        method: "GET",
        host: 'pexels'
    });
}
exports.getHotPhotos = getHotPhotos;
function getPhotoInfo(id = 1) {
    return (0, index_1.request)({
        url: `/photos/${id}`,
        method: "GET",
        host: 'pexels'
    });
}
exports.getPhotoInfo = getPhotoInfo;
//# sourceMappingURL=pexels.js.map