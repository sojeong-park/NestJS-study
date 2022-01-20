import { Animal, AnimalType } from './animals.model';
import { Router } from 'express';
import {
  readAllAnimals,
  readAnimal,
  createAnimal,
  updateAnimal,
  patchAnimal,
  deleteAnimal,
} from './animal.service';
import { create } from 'domain';
const route = Router();

// Read all data
route.get('/animals', readAllAnimals);

// Read one data
route.get('/animal/:id', readAnimal);

//Create animal
route.post('/animal', createAnimal);

// update -> PUT
route.put('/animal/:id', updateAnimal);

// 부분적으로 데이터 업데이트 -> PATCH
route.patch('/animal/:id', patchAnimal);

// delete ->DELETE
route.delete('/animal/:id', deleteAnimal);
export default route;
