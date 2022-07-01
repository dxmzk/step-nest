/**
 * Create By: Meng
 * Create Date: 2022-03
 * Desc: 图书
 */
import { Injectable } from "@nestjs/common";
import AppDataSource from "src/config/app_sql_source";
import { BookBody } from "src/dto/body/book";
import { ListBody } from "src/dto/body/list_body";
import { Book } from "src/dto/entity/book.entity";
import AppResult from "src/modules/AppResult";
import Errors from "src/modules/exception/Error";

@Injectable()
export class BookService {
  // 图书列表
  async queryBooks(body: ListBody): Promise<AppResult> {
    const start = (body.pageNum || 0) * (body.pageSize || 10);
    const end = (body.pageNum || 0) * (body.pageSize || 10);
    const books = await  AppDataSource.getRepository(Book)
      .createQueryBuilder("book")
      // .leftJoinAndSelect("user.name", "photo")
      .skip(start)
      .take(end)
      .getMany();
    return AppResult.succee(books);
  }

  // 图书详情
  async queryDetail(id: number): Promise<AppResult> {
    return AppResult.succee("");
  }

  // 创建
  async createBook(body: BookBody): Promise<AppResult> {
    
    const book = AppDataSource.getRepository(Book);
    const count = await book.count();

    const res = await book.save(body)
    return AppResult.succee(res);
  }

  // 更新
  async updateBook(): Promise<AppResult> {
    return AppResult.succee("");
  }

  // 删除/撤销
  async deleteOrDown(id: number): Promise<AppResult> {
    return AppResult.succee("");
  }

  // 获取图书下载地址
  async queryBookUrl(id: number): Promise<AppResult> {
    return AppResult.succee("");
  }

  // 获取热销
  async queryHotBooks(): Promise<AppResult> {
    // const users = await getRepository(Book)
    //   .createQueryBuilder("user")
    //   .leftJoinAndSelect("user.photos", "photo")
    //   .skip(10)
    //   .getMany();
    return AppResult.succee("");
  }

  // 获取相似
  async querySimilarBook(id: number): Promise<AppResult> {
    return AppResult.succee("");
  }
}
