import * as express from 'express';
import animalsRouter from './animal/animals.route';

class Server {
  public app: express.Application;

  constructor() {
    const app: express.Application = express();
    this.app = app;
  }

  private setRoute() {
    this.app.use(animalsRouter);
  }

  private setMiddleware() {
    // logging middleware
    this.app.use((req, res, next) => {
      console.log('logging middleware');
      next();
    });

    // json middleware: post로 입력받는 데이터(json)를 식별하기 위한 미들웨어
    this.app.use(express.json());

    this.setRoute();

    // 404 middleware
    this.app.use((req, res, next) => {
      console.log('error middleware');
      res.send({ error: '404 not found error' });
    });
  }

  public listen() {
    this.setMiddleware();
    this.app.listen(8000, () => {
      console.log('server is on...');
    });
  }
}

function init() {
  const server = new Server();
  server.listen();
}

init();
