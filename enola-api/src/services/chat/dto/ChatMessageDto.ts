import { IsString } from 'class-validator';

export class ChatMessageDto {
  @IsString()
  readonly email: string;

  @IsString()
  readonly icrId: string;

  @IsString()
  readonly chatMsg: string;
}
