/**
 * Create By: Meng
 * Create Date: 2022-
 * Desc: 
 * express配置可用 FileInterceptor
 * fastify不可用 FileInterceptor
 */
import {
  Controller,
  Post,
  // UseInterceptors,
  // UploadedFile,
  // UploadedFiles,
  Request
} from "@nestjs/common";
// import { FileInterceptor, FilesInterceptor, FileFieldsInterceptor, AnyFilesInterceptor } from "@nestjs/platform-express";

@Controller("/upload")
export class UploadController {

  /**
   * Fastify 可用的文件上传
   */
  @Post("img")
  uploadImg(@Request() res) {
    const multipart = res.body;
    // multipart['editormd-image-file']
    console.log(multipart);
  }

  /////////////      一下都是 Express 配置 才可用的      ////////////////

  // /**
  //  * FileInterceptor() 接收两个参数：
  //   一个 fieldName (指向包含文件的 HTML 表单的字段)
  //   可选 options 对象, 类型为 MulterOptions 。这个和被传入 multer 构造函数的对象是同一个对象。
  //  */
  // @Post("file")
  // @UseInterceptors(FileInterceptor("file"))
  // uploadFile(@UploadedFile() file: Express.Multer.File) {
  //   console.log(file);
  // }

  // /**
  //  * FileInterceptor() 接收三个参数:
  //   fieldName:（保持不变）
  //   maxCount:可选的数字，定义要接受的最大文件数
  //   options:可选的 MulterOptions 对象 ，同上
  //   使用 FilesInterceptor() 时，使用 @UploadedFiles() 装饰器从 request 中提取文件
  //  */
  // @Post("files")
  // @UseInterceptors(FilesInterceptor("files"))
  // uploadFiles(@UploadedFiles() files: Array<Express.Multer.File>) {
  //   console.log(files);
  // }

  // /**
  //  多个文件
  //   要上传多个文件（全部使用不同的键），请使用 FileFieldsInterceptor() 装饰器。这个装饰器有两个参数:
  //   uploadedFields：对象数组，其中每个对象指定一个必需的 name 属性和一个指定字段名的字符串值(如上所述)，以及一个可选的 maxCount 属性(如上所述)
  //   options: 可选的 MulterOptions 对象，如上所述
  //   使用 FileFieldsInterceptor() 时，使用 @UploadedFiles() 装饰器从 request 中提取文件
  //  */
  // @Post("uploadFields")
  // @UseInterceptors(
  //   FileFieldsInterceptor([
  //     { name: "avatar", maxCount: 1 },
  //     // { name: "background", maxCount: 1 },
  //   ])
  // )
  // uploadFileFields( @UploadedFiles() files: { avatar?: Express.Multer.File[];  background?: Express.Multer.File[]; }) {
  //   console.log(files);
  // }

  // /**
  //  任何文件
  //   要使用任意字段名称键上载所有字段，请使用 AnyFilesInterceptor() 装饰器。该装饰器可以接受如上所述的可选选项对象。
  //   使用 AnyFilesInterceptor() 时，使用 @UploadedFiles() 装饰器从 request 中提取文件
  //  */
  // @Post('upload')
  // @UseInterceptors(AnyFilesInterceptor())
  // uploadAnyFile(@UploadedFiles() files: Array<Express.Multer.File>) {
  //   console.log(files);
  // }

}
