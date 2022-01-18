import * as express from 'express';
import { Animal, AnimalType } from './app.model';

const app: express.Express = express();

const data = [1, 2, 3, 4];

app.get('/', (req: express.Request, res: express.Response) => {
  console.log(req.rawHeaders[1]);
  res.send({ animals: Animal });
});

app.listen(8000, () => {
  console.log('server is on...');
});
