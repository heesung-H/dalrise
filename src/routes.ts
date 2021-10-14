import express from 'express';
import { UserController } from './api/member/user.controller';

export default function (app: express.Application) {
  app.use(`/api/member/`, new UserController().router);
}
