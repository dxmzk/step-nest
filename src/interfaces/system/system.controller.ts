/**
 * Create By: Meng
 * Create Date: 2022-04
 * Desc: 
 */
import { Controller, Get, Query } from "@nestjs/common";
import AppResult from "src/modules/AppResult";
import { SystemService } from "./system.service";

@Controller("system")
export class SystemController {
  constructor(private readonly service: SystemService) {}

  //
  @Get("config")
  queryConfig(): Promise<AppResult> {
    return this.service.queryConfig(0);
  }
  //
  @Get("update")
  queryUpdate(): Promise<AppResult> {
    return this.service.queryUpdate(0);
  }
}
