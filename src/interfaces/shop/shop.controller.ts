/**
 * Create By: Meng
 * Create Date: 2022-03
 * Desc:
 */
import { Controller, Get } from "@nestjs/common";
import AppResult from "src/modules/AppResult";
import { ShopService } from "./shop.service";

@Controller("shop")
export class ShopController {
  constructor(private readonly service: ShopService) {}
  //
  @Get("query")
  queryShops(): Promise<AppResult> {
    return this.service.queryShops();
  }

  // 活动详情
  @Get("detail")
  queryDetail(id: number): Promise<AppResult> {
    return this.service.queryDetail(id);
  }
}
