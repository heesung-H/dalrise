import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { Logger } from '@nestjs/common';
import { ChatMessageDto } from './dto/ChatMessageDto';

@WebSocketGateway({
  namespace: '/chatting',
})
export class ChatGateway
  implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit
{
  private static readonly logger = new Logger(ChatGateway.name);

  @WebSocketServer()
  server: Server;

  afterInit() {
    ChatGateway.logger.debug(`Socket Server Init Complete`);
  }

  handleConnection(socket: Socket) {
    const forwarded = socket.handshake.headers['x-forwarded-for'];
    const isForwardedArray = Array.isArray(forwarded);
    const ip =
      (isForwardedArray ? forwarded[0] : forwarded) || socket.handshake.address;
    socket.ip = ip;
    ChatGateway.logger.debug(
      `${socket.id}(${socket.handshake.query['email']}) is connected!`,
    );
  }

  handleDisconnect(client: Socket) {
    ChatGateway.logger.debug(`${client.id} is disconnected...`);
  }

  @SubscribeMessage('sendMsg')
  async handleMessage(client: Socket, chatMessageDto: ChatMessageDto) {
    ChatGateway.logger.debug(chatMessageDto);
    client.emit('getMsg', chatMessageDto);
  }
}
