import * as express from 'express';
import animalsRouter from './animal/animals.route';

const app: express.Express = express();

// logging middleware
app.use((req, res, next) => {
  console.log('logging middleware');
  next();
});

// json middleware: post로 입력받는 데이터(json)를 식별하기 위한 미들웨어
app.use(express.json());

app.use(animalsRouter);

// 404 middleware
app.use((req, res, next) => {
  console.log('error middleware');
  res.send({ error: '404 not found error' });
});

app.listen(8000, () => {
  console.log('server is on...');
});
