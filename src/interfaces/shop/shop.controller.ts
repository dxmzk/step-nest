/**
 * Author: Meng
 * Date: 2022-03-09
 * Desc: 店铺
 */
import { Controller, Get, Post, UseGuards } from "@nestjs/common";
import ResultData from "src/model/ResultData";
import { AuthGuard } from "src/modules/guards/auth_guard";
import { ShopService } from "./shop.service";

@Controller("shop")
@UseGuards(AuthGuard)
export class ShopController {
  constructor(private readonly service: ShopService) {}

  // 活动列表
  @Get("banners")
  queryBanners(): Promise<ResultData> {
    return this.service.queryBanners();
  }

  // 添加banner/轮播图
  @Post("create_banner")
  createBanner(): Promise<ResultData> {
    return this.service.createBanner();
  }

  // 获取分类
  @Get("classify")
  queryClassify(): Promise<ResultData> {
    return this.service.queryBanners();
  }

}
