export type AnimalType = {
  id: string;
  name: string;
  age: number;
  species: string;
  isCute: boolean;
  friends: string[];
};

export const Animal: AnimalType[] = [
  {
    id: '0001',
    name: 'dubu',
    age: 4,
    species: 'dog',
    isCute: true,
    friends: ['0002'],
  },
  {
    id: '0002',
    name: 'chichi',
    age: 2,
    species: 'dog',
    isCute: true,
    friends: ['0001', '0003'],
  },
  {
    id: '0003',
    name: 'lean',
    age: 11,
    species: 'cat',
    isCute: true,
    friends: ['0001', '0004', '0005'],
  },
  {
    id: '0004',
    name: 'end',
    age: 1,
    species: 'dog',
    isCute: true,
    friends: ['0003'],
  },
  {
    id: '0005',
    name: 'start',
    age: 10,
    species: 'cat',
    isCute: true,
    friends: ['0001'],
  },
];
