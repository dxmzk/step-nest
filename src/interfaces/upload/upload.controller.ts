/**
 * Create By: Meng
 * Create Date: 2022-
 * Desc:
 */
import {
  Controller,
  Get,
  Post,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
  Response,
  StreamableFile,
} from "@nestjs/common";
import { createReadStream } from 'fs';
import { join } from 'path';
import { FileInterceptor, FilesInterceptor, FileFieldsInterceptor, AnyFilesInterceptor } from "@nestjs/platform-express";
// import { diskStorage } from 'multer';
// import * as path from 'path';
// import FileBody from 'src/dto/body/FileBody';

@Controller("/upload")
export class UploadController {
  /**
   * FileInterceptor() 接收两个参数：
    一个 fieldName (指向包含文件的 HTML 表单的字段)
    可选 options 对象, 类型为 MulterOptions 。这个和被传入 multer 构造函数 (此处有更多详细信息) 的对象是同一个对象。
   */
  @Post("file")
  @UseInterceptors(FileInterceptor("file"))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }

  /**
   * FileInterceptor() 接收三个参数:
    fieldName:（保持不变）
    maxCount:可选的数字，定义要接受的最大文件数
    options:可选的 MulterOptions 对象 ，同上
    使用 FilesInterceptor() 时，使用 @UploadedFiles() 装饰器从 request 中提取文件
   */
  @Post("files")
  @UseInterceptors(FilesInterceptor("files"))
  uploadFiles(@UploadedFiles() files: Array<Express.Multer.File>) {
    console.log(files);
  }

  /**
   多个文件
    要上传多个文件（全部使用不同的键），请使用 FileFieldsInterceptor() 装饰器。这个装饰器有两个参数:
    uploadedFields：对象数组，其中每个对象指定一个必需的 name 属性和一个指定字段名的字符串值(如上所述)，以及一个可选的 maxCount 属性(如上所述)
    options: 可选的 MulterOptions 对象，如上所述
    使用 FileFieldsInterceptor() 时，使用 @UploadedFiles() 装饰器从 request 中提取文件
   */
  @Post("upload")
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: "avatar", maxCount: 1 },
      { name: "background", maxCount: 1 },
    ])
  )
  uploadFileFields( @UploadedFiles() files: { avatar?: Express.Multer.File[];  background?: Express.Multer.File[]; }) {
    console.log(files);
  }

  /**
   任何文件
    要使用任意字段名称键上载所有字段，请使用 AnyFilesInterceptor() 装饰器。该装饰器可以接受如上所述的可选选项对象。
    使用 AnyFilesInterceptor() 时，使用 @UploadedFiles() 装饰器从 request 中提取文件
   */
  @Post('upload')
  @UseInterceptors(AnyFilesInterceptor())
  uploadAnyFile(@UploadedFiles() files: Array<Express.Multer.File>) {
    console.log(files);
  }

  
  /**
   StreamableFile是一个持有要返回的流的类。
   你可以传入一个Buffer或者Stream到StreamableFile类的构造函数来创建一个新的StreamableFile实例。
   跨平台支持
    默认情况下，Fastify服务器可以不通过stream.pipe(res)直接发送文件，所以你并不需要使用StreamableFile类。
    但Nest仍然支持在所有这些类型的平台上使用StreamableFile，所以即使你需要在Express和Fastify之间切换，也不需要担心这两个引擎上的兼容性问题。
   */
  @Get()
  getFile(@Response({ passthrough: true }) res): StreamableFile {
    const file = createReadStream(join(process.cwd(), 'package.json'));
    res.set({
      'Content-Type': 'application/json',
      'Content-Disposition': 'attachment; filename="package.json"',
    });
    return new StreamableFile(file);
  }
}
