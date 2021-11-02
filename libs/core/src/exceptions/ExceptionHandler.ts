import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { QueryFailedError } from 'typeorm';

@Catch()
export class ExceptionHandler implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    console.log(exception);
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    let status = 0;
    let message = exception.message;
    // throw new HttpException('dd', HttpStatus.FORBIDDEN);
    // throw 'test';
    if (typeof exception === 'string') {
      status = 500; // throw 'test';
      message = exception;
    } else {
      status = exception.getStatus();
    }

    response.status(status).json({
      statusCode: status,
      message: message,
      path: request.url,
    });
  }
}
