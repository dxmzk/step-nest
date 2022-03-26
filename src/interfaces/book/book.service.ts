/**
 * Create By: Meng
 * Create Date: 2022-03
 * Desc: 图书
 */
import { Injectable } from "@nestjs/common";
import AppResult from "src/modules/AppResult";

@Injectable()
export class BookService {
  // 图书列表
  async queryBooks(): Promise<AppResult> {
    return AppResult.succee("");
  }

  // 图书详情
  async queryDetail(id: number): Promise<AppResult> {
    return AppResult.succee("");
  }

  // 创建
  async createBook(): Promise<AppResult> {
    return AppResult.succee("");
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
  async queryHotBooks(id: number): Promise<AppResult> {
    return AppResult.succee("");
  }

  // 获取相似
  async queryAimilarBook(id: number): Promise<AppResult> {
    return AppResult.succee("");
  }
}
