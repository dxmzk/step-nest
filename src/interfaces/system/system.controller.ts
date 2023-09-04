/**
 * Author: Meng
 * Date: 2022-03-09
 * Desc: 系统配置
 */
import { Controller, Get, Query } from "@nestjs/common";
import ResultData from "src/model/ResultData";
import { SystemService } from "./system.service";

@Controller("system")
export class SystemController {
  constructor(private readonly service: SystemService) {}

  // 获取客户端最新版本
  @Get("clients")
  queryAllClient(): Promise<ResultData> {
    return this.service.queryAllClient();
  }

  // 
  @Get("action")
  initAction(@Query('tag') tag: string): Promise<ResultData> {
    return this.service.initAction(tag);
  }

  //
  @Get("update")
  queryUpdate(): Promise<ResultData> {
    return this.service.queryUpdate(0);
  }
}
