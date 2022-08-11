/// <reference types="multer" />
import { StreamableFile } from "@nestjs/common";
export declare class UploadController {
    uploadFile(file: Express.Multer.File): void;
    uploadFiles(files: Array<Express.Multer.File>): void;
    uploadFileFields(files: {
        avatar?: Express.Multer.File[];
        background?: Express.Multer.File[];
    }): void;
    uploadAnyFile(files: Array<Express.Multer.File>): void;
    getFile(res: any): StreamableFile;
}
