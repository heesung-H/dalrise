import { Router, Request, Response } from 'express';
import { UserService } from './user.service';

export class UserController {
  router: Router;
  private userService: UserService;

  constructor() {
    this.userService = new UserService(); // Create a new instance of PostController
    this.router = Router();
    this.routes();
  }

  index = async (req: Request, res: Response) => {
    const users = await this.userService.index();
    //res.send(users).json();
    return res.json(users);
  };

  public routes() {
    this.router.get('/', this.index);
    // this.router.post('/', this.create);
    // this.router.put('/:id', this.update);
    // this.router.delete('/:id', this.delete);
  }
}
