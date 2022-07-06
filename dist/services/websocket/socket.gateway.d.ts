import { WsResponse } from "@nestjs/websockets";
import { Observable } from "rxjs";
import { Server } from "ws";
export declare class SocketGateway {
    server: Server;
    onEvent(client: any, data: any): Observable<WsResponse<number>>;
}
