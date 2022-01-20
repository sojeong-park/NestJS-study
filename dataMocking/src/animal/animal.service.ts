import exp from 'constants';
import { Request, Response } from 'express';
import { request } from 'http';
import { Animal, AnimalType } from './animals.model';

// Read all data
export const readAllAnimals = (req: Request, res: Response) => {
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
};

// Read one data
export const readAnimal = (req: Request, res: Response) => {
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
};

//Create animal
export const createAnimal = (req: Request, res: Response) => {
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
};

// update -> PUT
export const updateAnimal = (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const data = req.body;
    let result;
    Animal.forEach((animal) => {
      if (animal.id === id) {
        animal = data;
        result = animal;
      }
    });
    res.status(200).send({
      success: true,
      data: {
        animal: result,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

// patch
export const patchAnimal = (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const data = req.body;
    let result;
    Animal.forEach((animal) => {
      if (animal.id === id) {
        animal = { ...animal, ...data };
        result = animal;
      }
    });
    res.status(200).send({
      success: true,
      data: {
        animal: result,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

// delete
export const deleteAnimal = (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deleted = Animal.filter((animal) => animal.id !== id);

    res.status(200).send({
      success: true,
      data: {
        animal: deleted,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};
