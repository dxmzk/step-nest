/**
 * Create By: Meng
 * Create Date: 2022-
 * Desc: 
 */
 import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Request,
  Body,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';
import FileBody from 'src/dto/body/FileBody';

@Controller('/upload')
export class UploadController {
  
  @Post()
  @UseInterceptors(
    // see https://www.techiediaries.com/nestjs-upload-serve-static-file/
    FileInterceptor('upload', {
      storage: diskStorage({
        destination: `./uploads/`,
        filename: (_req, file, cb) => {
          file = file.upload ? file.upload : file;
          return cb(
            null,
            Date.now() + path.extname(file.originalname),
          );
        },
      }),
    }),
  )
  async uploadFile(@UploadedFile() upload, @Request() req) {
    const { filename, path, mimetype } = upload;
    upload.uploaded = 1;
    upload.url = path.replace('public/', 'http://localhost:3000/')
    upload.fileName = filename;

    return upload;
  }

}