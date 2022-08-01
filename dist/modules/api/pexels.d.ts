import { Result } from "../net/index";
export declare function queryPhotos(page?: number, size?: number): Promise<Result>;
export declare function searchPhotos(key?: string, page?: number, size?: number): Promise<Result>;
export declare function getHotPhotos(page?: number): Promise<Result>;
export declare function getPhotoInfo(id?: number): Promise<Result>;
