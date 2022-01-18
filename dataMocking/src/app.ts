import * as express from 'express';
import { Animal, AnimalType } from './animal/animals.model';

const app: express.Express = express();

const data = [1, 2, 3, 4];

// logging middleware
app.use((req, res, next) => {
  console.log('logging middleware');
  next();
});

// json middleware: post로 입력받는 데이터(json)를 식별하기 위한 미들웨어
app.use(express.json());

// Read all data
app.get('/animals', (req, res) => {
  try {
    const animals = Animal;
    res.status(200).send({
      success: true,
      data: {
        animals,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

// Read one data
app.get('/animal/:id', (req, res) => {
  try {
    const id = req.params.id;
    const cat = Animal.find((cat) => {
      return cat.id === id;
    });
    res.status(200).send({
      success: true,
      data: {
        cat,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

//Create animal
app.post('/animal', (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    Animal.push(data);

    res.status(200).send({
      success: true,
      data: {
        Animal,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

// 404 middleware
app.use((req, res, next) => {
  console.log('error middleware');
  res.send({ error: '404 not found error' });
});

app.listen(8000, () => {
  console.log('server is on...');
});
