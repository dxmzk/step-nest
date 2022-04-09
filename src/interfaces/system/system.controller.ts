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
  constructor(private readonly appService: SystemService) {}

  //
  @Get("config")
  queryConfig(): Promise<AppResult> {
    return this.appService.queryConfig(0);
  }
  //
  @Get("update")
  queryUpdate(): Promise<AppResult> {
    return this.appService.queryUpdate(0);
  }
}
