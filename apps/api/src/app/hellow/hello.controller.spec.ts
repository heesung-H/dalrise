import { Test, TestingModule } from '@nestjs/testing';

import { HelloController } from './hello.controller';
import { HelloService } from './hello.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [HelloController],
      providers: [HelloService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to api!"', () => {
      const appController = app.get<HelloController>(HelloController);
      expect(appController.getData()).toEqual({ message: 'Welcome to api!' });
    });
  });
});
