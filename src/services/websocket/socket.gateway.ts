/**
 * Create By: Meng
 * Create Date: 2022-07-06
 * Desc: https://docs.nestjs.cn/8/websockets
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
import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from "@nestjs/websockets";
import { from, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Server } from "ws";

import constants from "src/config/constants";

@WebSocketGateway(constants.wsPort)
export class SocketGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage("wsevent")
  onEvent(client: any, data: any): Observable<WsResponse<number>> {
    // console.log(client);
    console.log(data);
    return from([1, 2, 3]).pipe(
      map((item) => ({ event: "wsevent", data, item}))
    );
    // return from([1, 2, 3]).pipe(map(item => ({ event: 'wsevent', data: item })));
  }
}
