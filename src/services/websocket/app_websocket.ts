/**
 * Author: Meng
 * Date: 2023-
 * Desc: websocket 服务
 * https://github.com/websockets/ws
 */
import WebSocket, { Server, WebSocketServer } from 'ws';

import Constants from 'src/config/constants';
import { MsgEntity, SendDto } from './socket_res';
import { IncomingMessage } from 'http';

export default class AppWSServer {
  public static instance: WebSocketServer;

  private static socket_clients = new Map<string, any>();
  private static ping_interval = 10000;
  private static reset_interval = 2000;
  private static max_reset = 60;
  private static cur_reset = 0;
  private static isRuning = false;

  /**
   * 获取WebSocket实例
   */
  public static getInstance(): WebSocketServer {
    if (!AppWSServer.instance) {
      AppWSServer.init();
    }
    return AppWSServer.instance;
  }

  /**
   * 初始化服务
   */
  public static init() {
    AppWSServer.socket_clients.clear();
    if (AppWSServer.instance) {
      AppWSServer.instance.close();
    }
    AppWSServer.cur_reset = 0;
    const wss = new WebSocketServer({
      port: Constants.ws_port,
      perMessageDeflate: {
        zlibDeflateOptions: {
          chunkSize: 1024,
          memLevel: 7,
          level: 3,
        },
        zlibInflateOptions: {
          chunkSize: 10 * 1024,
        },
        clientNoContextTakeover: true, // Defaults to negotiated value.
        serverNoContextTakeover: true, // Defaults to negotiated value.
        serverMaxWindowBits: 10, // Defaults to negotiated value.

        concurrencyLimit: 10, // Limits zlib concurrency for perf.
        threshold: 1024, // Size (in bytes) below which messages
      },
    });
    AppWSServer.instance = wss;
    AppWSServer.connection(wss);
  }

  /**
   * 监听websocket连接
   * @param wss WebSocketServer
   */
  private static connection(wss: WebSocketServer) {
    try {
      wss.on('connection', (ws: Server<any>, request: IncomingMessage) => {
          // wss.on('connection', (ws: any, request: IncomingMessage) => {
          // console.log('request: ', request.headers); // headers.host request.rawHeaders
          let uid = AppWSServer._parseUser(request.url);
          const server = { ws, uid, isAlive: true };
          AppWSServer.socket_clients.set(uid, server);

          ws.on('message', (data: any) => {
            const msgData = data.toString();
            console.log('Socket message: ', msgData);
            AppWSServer.sendMsg(uid, JSON.parse(msgData));
          });

          ws.on('pong', () => {
            server.isAlive = true;
            // console.warn('AppWebSocket pong ------> res');
          });
          // ws.on('ping', (res: any) => {console.warn('AppWebSocket ping ------>', res);});
          ws.on('error', (err: Error) => {
            console.warn('AppWebSocket error ------>', err);
          });
        },
      );
      // wss.on('headers', (err: any) => { console.warn('AppWebSocket wss headers ------>', err); });
      wss.on('error', (err: Error) => {
        console.warn('AppWebSocket wss error ------>', err);
      });
      wss.on('close', (err: Error) => {
        console.warn('AppWebSocket wss close ------>', err);
        AppWSServer.isRuning = false;
        AppWSServer.reset();
      });
      AppWSServer.isRuning = true;
      AppWSServer.pinging();
      console.warn('------> AppWebSocket pinging');
    } catch (error) {
      console.warn('AppWebSocket catch ------>', error);
      AppWSServer.isRuning = false;
      AppWSServer.reset();
    }
  }

  /**
   * 发送消息
   * @param data
   */
  public static send(data: SendDto) {
    if (data.toId) {
    }
  }

  /**
   * 发送消息
   * @param uid
   * @param data
   * @returns
   */
  private static sendMsg(uid: string, data: MsgEntity) {
    if (!AppWSServer.instance) {
      return;
    }
    const clients = AppWSServer.socket_clients;
    try {
      if (clients.has(data.toId)) {
        const server = clients.get(data.toId);
        const ws = server.ws || {};
        if (server.isAlive) {
          // if (ws && ws.OPEN == ws.readyState) {
          ws.send(JSON.stringify(data), { binary: false });
        } else {
          const ws = clients.get(uid).ws || {};
          const dto = new SendDto(uid, data.toId, '设备不在线', -1);
          ws.send(JSON.stringify(dto), { binary: false });
        }
        // clients.forEach((client) => { if(client.OPEN == client.readyState) { client.send(JSON.stringify(data), { binary: true }); }  });
      } else {
        const ws = clients.get(uid).ws || {};
        const dto = new SendDto('', uid, '对方已下线', -2);
        ws.send(JSON.stringify(dto), { binary: false });
        console.warn('AppWebSocket send uid notfound ', data.toId);
      }
    } catch (error) {
      console.warn('AppWebSocket sendMsg------>', error);
    }
  }

  /**
   * 获取客户端
   */
  public static getClients(): Array<string> {
    const keys = [];
    AppWSServer.socket_clients.forEach((_, key) => {
      keys.push(key);
    });
    return keys;
  }

  /**
   * 重启服务
   */
  private static reset() {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      if (AppWSServer.cur_reset < AppWSServer.max_reset) {
        AppWSServer.init();
      }
      AppWSServer.cur_reset += 1;
    }, AppWSServer.reset_interval);
  }

  /**
   * 心跳
   */
  private static pinging() {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      if (AppWSServer.isRuning) {
        AppWSServer.pinging();
      }
    }, AppWSServer.ping_interval);
    const clients = AppWSServer.socket_clients;
    try {
      clients.forEach((value: any, key: string) => {
        const ws = value.ws || {};
        const isAlive = value.isAlive;
        value.isAlive = false;
        if (isAlive == true) {
          ws.ping();
        } else {
          console.warn(`------> AppWSServer remove ${key}`);
          ws.terminate();
          AppWSServer.socket_clients.delete(key);
        }
      });
    } catch (error) {
      console.warn('------> AppWSServer pinging error', error);
    }
  }

  /**
   * 解析连接账号
   * @param url
   */
  private static _parseUser(url: string): string {
    let uid = Date.now().toString();
    try {
      if (url.includes('/?')) {
        const query = url.split('?')[1];
        uid = query.split('=')[1];
      }
    } catch (error) {
      console.warn('AppWebSocket request.url', error);
    }
    return uid;
  }

  /**
   * 注册 emit
   */
  // public static emit( event: string, request: any, socket: any, head: any, client?: any) {
  //   AppWSServer.instance.handleUpgrade(request, socket, head, function done(ws: WebSocket) {
  //       AppWSServer.instance.emit(event, ws, request, client);
  //     },
  //   );
  // }
}
