/**
 * Create By: Meng
 * Create Date: 2022-03
 * Desc: 图书作者
 */
import { Injectable } from "@nestjs/common";
import AppResult from "src/modules/AppResult";

@Injectable()
export class AuthorService {

  // 作者列表
  async queryAuthor(): Promise<AppResult> {
    return AppResult.succee("");
  }

  // 详情
  async authorDetail(): Promise<AppResult> {
    return AppResult.succee("");
  }

  // 添加
  async createAuthor(): Promise<AppResult> {
    return AppResult.succee("");
  }

  // 更新
  async updateAuthor(): Promise<AppResult> {
    return AppResult.succee("");
  }

  // 删除
  async deleteAuthor(id: number): Promise<AppResult> {
    return AppResult.succee("");
  }
}
