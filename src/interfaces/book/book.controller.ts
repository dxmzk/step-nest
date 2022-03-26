/**
 * Create By: Meng
 * Create Date: 2022-03
 * Desc:
 */
import { Controller, Get, Post } from "@nestjs/common";
import AppResult from "src/modules/AppResult";
import { BookService } from "./book.service";

@Controller("book")
export class BookController {
  constructor(private readonly appService: BookService) {}

  // 图书列表
  @Get("books")
  queryBooks(): Promise<AppResult> {
    return this.appService.queryBooks();
  }

  // 图书详情
  @Get("detail")
  queryDetail(id: number): Promise<AppResult> {
    return this.appService.queryBooks();
  }

  // 创建
  @Post("create")
  createBook(): Promise<AppResult> {
    return this.appService.queryBooks();
  }

  // 更新
  @Post("update")
  updateBook(): Promise<AppResult> {
    return this.appService.queryBooks();
  }

  // 删除/撤销
  @Get("deleteOrDown")
  deleteOrDown(): Promise<AppResult> {
    return this.appService.queryBooks();
  }

  // 获取图书下载地址
  @Get("bookUrl")
  queryBookUrl(): Promise<AppResult> {
    return this.appService.queryBooks();
  }

  // 获取热销
  @Get("hotBooks")
  queryHotBooks(): Promise<AppResult> {
    return this.appService.queryBooks();
  }

  // 获取相似
  @Get("similarBooks")
  querySimilarBook(): Promise<AppResult> {
    return this.appService.queryBooks();
  }
}
