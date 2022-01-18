import * as express from 'express';
import { Animal, AnimalType } from './app.model';

const app: express.Express = express();

const data = [1, 2, 3, 4];

app.use((req, res, next) => {
  console.log('logging middleware');
  next();
});

app.get('/', (req: express.Request, res: express.Response) => {
  console.log(req.rawHeaders[1]);
  res.send({ animals: Animal });
});

app.get('/cat', (req, res) => {
  console.log('cat data');
  res.send({ cat: Animal[2] });
});

app.get('/dog', (req, res) => {
  console.log('dog data');
  res.send({ dog: Animal[0] });
});

app.use((req, res, next) => {
  console.log('error middleware');
  res.send({ error: '404 not found error' });
});

app.listen(8000, () => {
  console.log('server is on...');
});
