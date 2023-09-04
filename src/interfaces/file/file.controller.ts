/**
 * Author: Meng
 * Date: 2022-03-09
 * Desc:
 */
import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  StreamableFile,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileService } from './file.service';
import { FileBody } from '../../model/body/index';

const fs = require('fs-extra');

@Controller('file')
export class FileController {
  constructor(
    private readonly service: FileService,
  ) {}

  // 单文件上传
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@Body() body: FileBody, @UploadedFile() file: Express.Multer.File) {
    const env = (body||{env: 'test'}).env;
    const code = (file.originalname || '').split('.')[0];
    return this.service.uploadAliOss(code, env, file);
  }

  @Get('download')
  async downloadFile(@Query('id') id: string): Promise<StreamableFile> {
    // const res = fs.readFileSync(`/${process.cwd()}/package.json`, 'utf8');
    const res = fs.createReadStream(`/${process.cwd()}/test.png`);
    return new StreamableFile(res);
  }
}
