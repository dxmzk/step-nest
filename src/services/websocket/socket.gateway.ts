/**
 * Author: Meng
 * Date: 2022-07-06
 * Desc: https://docs.nestjs.cn/9/websockets
 * 
 * const socket = new WebSocket('ws://localhost:8080');
      socket.onopen = function() {
        console.log('Connected');
        socket.send(
          JSON.stringify({
            event: 'wsevent',
            data: 'test',
          }),
        );
        socket.onmessage = function(data) {
          console.log(data);
        };
      };
 */
import { UseFilters } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';

import Constants from 'src/config/constants';
import { SocketExceptionsFilter } from './socket.exception';
import { SocketRes } from './socket_res';

// @WebSocketGateway(Constants.ws_port, { transports: ['websocket'] })
// @WebSocketGateway(Constants.ws_port)
export class SocketGateway {
  private socket_clients = new Map<string, any>();

  /**
   * 消息格式{"event":"wse","data":"你个傻哈哈"}
   */
  // @UseFilters(new SocketExceptionsFilter())
  @SubscribeMessage('wse')
  async onEvent(
    @ConnectedSocket() client: any,
    @MessageBody() data: any,
  ): Promise<SocketRes> {
    // console.log(client);
    console.log(data);
    return SocketRes.succee('OK');
  }

  /**
   * 消息格式{"event":"robot","data":"你个傻哈哈"}
   */
  @SubscribeMessage('robot')
  async onRobot(client: any, data: any): Promise<SocketRes> {
    if(!this.socket_clients.has(client)) {
      this.socket_clients.set(data.fromId, client);
    }
    
    return SocketRes.succee('OK');
  }

  /**
   * 消息格式{"event":"notify","data":"你个傻哈哈"}
   */
  @UseFilters(new SocketExceptionsFilter())
  @SubscribeMessage('notify')
  async onNotify(
    @ConnectedSocket() client: any,
    @MessageBody() data: any,
  ): Promise<SocketRes> {
    // console.log(client);
    console.log(data);
    return SocketRes.succee('OK');
  }
}
