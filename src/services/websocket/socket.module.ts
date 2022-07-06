/**
 * Create By: Meng
 * Create Date: 2022-
 * Desc: 
 */
 import { Module } from '@nestjs/common';
 import { SocketGateway } from './socket.gateway';
 
 @Module({
   providers: [SocketGateway],
 })
 export class SocketModule {}