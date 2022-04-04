/**
 * Create By: Meng
 * Create Date: 2022-03
 * Desc:
 */
import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { BookBody } from "src/dto/body/book";
import { ListBody } from "src/dto/body/list_body";
import AppResult from "src/modules/AppResult";
import Errors from "src/modules/exception/Error";
import { BookService } from "./book.service";

@Controller("book")
export class BookController {
  constructor(private readonly appService: BookService) {}

  // 图书列表
  @Post("books")
  // queryBooks(@Query('pageNum') num: number, @Query('pageSize') size: number, @Query('keyword') key: string, ): Promise<AppResult> {
  queryBooks(@Body() body: ListBody): Promise<AppResult> {
    console.log(body)
    return this.appService.queryBooks(body);
  }

  // 图书详情
  @Get("detail")
  queryDetail(id: number): Promise<AppResult> {
    return this.appService.queryDetail(id);
  }

  // 创建
  @Post("create")
  createBook(body: BookBody): Promise<AppResult> {
    // 参数校验
    if(body.name || body.author || body.about || body.cover || body.tag) {
      throw Errors.PWD_ERR;
    }
    return this.appService.createBook(body);
  }

  // 更新
  @Post("update")
  updateBook(): Promise<AppResult> {
    return this.appService.updateBook();
  }

  // 删除/撤销
  @Get("deleteOrDown")
  deleteOrDown(id: number): Promise<AppResult> {
    return this.appService.deleteOrDown(id);
  }

  // 获取图书下载地址
  @Get("bookUrl")
  queryBookUrl(id: number): Promise<AppResult> {
    return this.appService.queryBookUrl(id);
  }

  // 获取热销
  @Post("hotBooks")
  queryHotBooks(): Promise<AppResult> {
    return this.appService.queryHotBooks();
  }

  // 获取相似
  @Get("similarBooks")
  querySimilarBook(type: number): Promise<AppResult> {
    return this.appService.querySimilarBook(type);
  }
}
