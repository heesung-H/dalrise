import 'socket.io';
import { Room } from './src/services/chat/dto/chat.room';
import { User } from './src/services/chat/dto/chat.user';

declare module 'socket.io' {
  interface Socket {
    ip: string;
    user?: User;
    room?: Room;
  }
}
