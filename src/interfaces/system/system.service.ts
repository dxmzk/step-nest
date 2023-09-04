/**
 * Author: Meng
 * Date: 2022-03-09
 * Desc: 系统配置
 */
import { Injectable } from '@nestjs/common';
import ResultData from '../../model/ResultData';
import AppWebSocketServer from '../../services/websocket/app_websocket';

@Injectable()
export class SystemService {
  constructor() {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      this.init();
    }, 3000);
  }

  private init() {}

  async queryAllClient(): Promise<ResultData> {
    const clients = AppWebSocketServer.getClients();
    return ResultData.success(clients);
  }
  //
  async initAction(tag: string): Promise<ResultData> {
    return ResultData.success(tag);
  }
  //
  async queryUpdate(id: number): Promise<ResultData> {
    return ResultData.success(id);
  }
}
