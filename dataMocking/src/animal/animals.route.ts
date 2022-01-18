import { Animal, AnimalType } from './animals.model';
import { Router } from 'express';

const route = Router();

// Read all data
route.get('/animals', (req, res) => {
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
route.get('/animal/:id', (req, res) => {
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
route.post('/animal', (req, res) => {
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

export default route;
