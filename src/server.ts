import express from 'express';
import cors from 'cors';
import { createConnection } from 'typeorm';

import { UserEntity } from './database/entities/member/user.entity';
import { UserController } from './api/member/user.controller';

class Server {
  private app: express.Application;
  private userController: UserController;

  constructor() {
    this.app = express(); // init the application
    this.userController = new UserController();
    this.configuration();
    this.routes();
  }

  public configuration() {
    this.app.set('port', process.env.PORT || 3001);
    this.app.use(cors());
    this.app.use(express.json());
  }

  public async routes() {
    const connection = await createConnection({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'dalrise',
      password: 'dalrise',
      database: 'dalrise',
      entities: [UserEntity], //['database/entities/**/*.ts'],
      logging: true,
      synchronize: true,
      //name: 'dalrise',
    });

    console.log(connection);

    // this.app.get('/', (req: Request, res: Response) => {
    //   res.send('Hello world=>');
    // });

    //this.app.use(`/api/posts/`, this.userController.router); // Configure the new routes of the controller post
  }

  public start() {
    this.app.listen(this.app.get('port'), () => {
      console.log(`Server is listening ${this.app.get('port')} port.`);
    });
  }
}

export default Server;
//const server = new Server(); // Create server instance
//server.start(); // Execute the server
