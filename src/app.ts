import express from 'express';

import config from './config/environment';
import { createConnection } from 'typeorm';
import expressConfig from './config/express';
import registerRoutes from './routes';
export default async function (app: express.Application) {
  // 1. db 연결
  await createConnection(config.mysql)
    .then(function () {
      console.log('db connected!!!');
    })
    .then(startServer)
    .catch(err => {
      console.log('Server failed to start due to error: %s', err);
    });

  // 2. express 설정
  expressConfig(app);

  // 3. router 설정
  registerRoutes(app);

  // Start server
  function startServer() {
    app.listen(config.port, config.ip, function () {
      console.log(
        'Express server listening on %d, in %s mode',
        config.port,
        app.get('env'),
      );
    });
  }

  app.listen(3001, () => {
    console.log('SERVER RUNNING ON PORT 3001');
  });
}
