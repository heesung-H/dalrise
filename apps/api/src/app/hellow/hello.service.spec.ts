import { Test } from '@nestjs/testing';

import { HelloService } from './hello.service';

describe('HelloService', () => {
  let service: HelloService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [HelloService],
    }).compile();

    service = app.get<HelloService>(HelloService);
  });

  describe('getData', () => {
    it('should return "Welcome to api!"', () => {
      expect(service.getData()).toEqual({ message: 'Welcome to api!' });
    });
  });
});
