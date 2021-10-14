import express from 'express';

import config from './config/environment';
import { createConnection } from 'typeorm';
import expressConfig from './config/express';
import expressRoutes from './routes';
export default async function (app: express.Application) {
  console.log(config.mysql);

  // 1. db 연결
  await createConnection(config.mysql);

  // 2. express 설정
  expressConfig(app);

  // 3. router 설정
  expressRoutes(app);

  app.listen(3001, () => {
    console.log('SERVER RUNNING ON PORT 3001');
  });
}
