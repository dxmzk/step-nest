/**
 * Create By: Meng
 * Create Date: 2022-
 * Desc: 
 */
 import { Module } from '@nestjs/common';
 import { UploadController } from './upload.controller';
 import { UploadService } from './upload.service';
//  import { MulterModule } from '@nestjs/platform-express';
 
 @Module({
   controllers: [UploadController],
   providers: [UploadService],
 })
 export class UploadModule {}