/// <reference types="multer" />
export declare class UploadController {
    uploadImg(res: any): void;
    uploadFile(file: Express.Multer.File): void;
    uploadFiles(files: Array<Express.Multer.File>): void;
    uploadFileFields(files: {
        avatar?: Express.Multer.File[];
        background?: Express.Multer.File[];
    }): void;
    uploadAnyFile(files: Array<Express.Multer.File>): void;
    testUpload(): Promise<any>;
}
