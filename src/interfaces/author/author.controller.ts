import { Controller, Get, Post, Query } from "@nestjs/common";
import AppResult from "src/modules/AppResult";
import { AuthorService } from "./author.service";

@Controller("author")
export class AuthorController {
  constructor(private readonly appService: AuthorService) {}

  //
  @Get("authors")
  queryAuthor(@Query('pageSize') size: number, @Query('pageNum') num: number, ): Promise<AppResult> {
    return this.appService.queryAuthor();
  }

  //
  @Get("detail")
  authorDetail(): Promise<AppResult> {
    return this.appService.authorDetail();
  }

  // 添加
  @Post("create")
  createAuthor(): Promise<AppResult> {
    return this.appService.createAuthor();
  }

  // 更新
  @Post("update")
  updateAuthor(id: number): Promise<AppResult> {
    return this.appService.updateAuthor();
  }

  // 删除
  @Get("delete")
  async deleteAuthor(@Query("id") id: number): Promise<AppResult> {
    return this.appService.deleteAuthor(id);
  }
}
