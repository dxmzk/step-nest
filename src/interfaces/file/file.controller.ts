/**
 * Create By: Meng
 * Create Date: 2022-08
 * Desc:
 */
import { Controller, Get, Query, Response, StreamableFile } from "@nestjs/common";
const fs = require('fs-extra');

@Controller("file")
export class FileController {
  /**
   StreamableFile是一个持有要返回的流的类。
   你可以传入一个Buffer或者Stream到StreamableFile类的构造函数来创建一个新的StreamableFile实例。
   跨平台支持
    默认情况下，Fastify服务器可以不通过stream.pipe(res)直接发送文件，所以你并不需要使用StreamableFile类。
    但Nest仍然支持在所有这些类型的平台上使用StreamableFile，所以即使你需要在Express和Fastify之间切换，也不需要担心这两个引擎上的兼容性问题。
   */
  // @Get()
  // getFile(@Response({ passthrough: true }) res): StreamableFile {
  //   const file = createReadStream(join(process.cwd(), 'package.json'));
  //   res.set({
  //     "Content-Type": "application/json",
  //     "Content-Disposition": 'attachment; filename="package.json"',
  //   });
  //   return new StreamableFile(file);
  // }

  @Get("down")
  async downloadFile(@Query('id') id: string): Promise<StreamableFile> {
    // const res = fs.readFileSync(`/${process.cwd()}/package.json`, 'utf8');
    // const res = fs.readFileSync(`/${process.cwd()}/package.json`);
    const res = fs.readFileSync(`/${process.cwd()}/test.png`);
    console.log(id);
    // resp.set({
    //   'Content-Type': 'application/json',
    //   'Content-Disposition': 'attachment; filename="package.json"',
    // });
    return new StreamableFile(res);
  }
}
