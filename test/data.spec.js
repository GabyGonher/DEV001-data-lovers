import { filtraTipos } from '../src/data.js';

let arrayParaTest = [
  {
    "num": "175",
    "name": "togepi",
    "generation": {
      "num": "generation ii",
      "name": "johto"
    },
    "pokemon-rarity": "normal",
    "type": [
      "fairy"
    ],
  },

  {
    "num": "173",
    "name": "cleffa",
    "generation": {
      "num": "generation ii",
      "name": "johto"
    },
    "pokemon-rarity": "normal",
    "type": [
      "fairy"
    ],
  },

  {
    "num": "008",
    "name": "wartortle",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "water"
    ],
  },

  {
    "num": "060",
    "name": "poliwag",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "water"
    ],
  },
];

let pokesFairy = [
  {
    "num": "175",
    "name": "togepi",
    "generation": {
      "num": "generation ii",
      "name": "johto"
    },
    "pokemon-rarity": "normal",
    "type": [
      "fairy"
    ],
  },

  {
    "num": "173",
    "name": "cleffa",
    "generation": {
      "num": "generation ii",
      "name": "johto"
    },
    "pokemon-rarity": "normal",
    "type": [
      "fairy"
    ],
  },
];

let pokesWater = [
  {
    "num": "008",
    "name": "wartortle",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "water"
    ],
  },

  {
    "num": "060",
    "name": "poliwag",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "water"
    ],
  },
];


describe('filtraTipos', () => {
  it('deberia ser una funcion', () => {
    expect(typeof filtraTipos).toBe('function');
  });

  it('returns un array que contiene los Pokémon tipo fairy', () => {
    expect(filtraTipos("fairy", arrayParaTest)).toEqual(pokesFairy);
  });

  it('returns un array que contiene los Pokémon tipo water', () => {
    expect(filtraTipos("water", arrayParaTest)).toEqual(pokesWater);
  });
});


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
