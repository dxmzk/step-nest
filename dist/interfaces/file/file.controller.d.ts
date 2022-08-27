import { StreamableFile } from "@nestjs/common";
export declare class FileController {
    downloadFile(id: string): Promise<StreamableFile>;
}
