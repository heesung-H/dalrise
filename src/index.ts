import express from 'express';
import cors from 'cors';
//import { createConnection } from 'typeorm';

function test(a: string) {
  console.log(a + 'test');
}
//123
const main = async () => {
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.listen(3001, () => {
    console.log('SERVER RUNNING ON PORT 3001');

    test('aaaa');
  });
};

main().catch(err => {
  console.log(err);
});
