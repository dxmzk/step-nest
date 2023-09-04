/**
 * Author: Meng
 * Date: 2022-03-09
 * Desc: 
 */
 import { Module } from '@nestjs/common';
 import { SocketGateway } from './socket.gateway';
 
 @Module({
   providers: [SocketGateway],
 })
 export class SocketModule {}