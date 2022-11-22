import { filtraTipos, ordenarAZ, ordenarZA, filtraBuscador, reduceType } from '../src/data.js';

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
let arrayOrdenarAZ = [

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
];

let arrayOrdenarZA = [
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
// PRUEBA PARA FILTRADO TIPOS ....
let arrayBuscador =[
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
];

const objReduce = {
  "water": 2, 
  "fairy": 2

}


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

// PRUEBA PARA SORT ORDENAR AZ......
describe('ordenarAZ', () => {
  it('deberia ser una funcion', () => {
    expect(typeof ordenarAZ).toBe('function');
  });

  it('returns un array que contiene los pokemon ordenados de la A-Z', () => {
    expect(ordenarAZ(arrayParaTest)).toEqual(arrayOrdenarAZ);
  });
});

// PRUEBA PARA SORT ORDENAR ZA......
describe('ordenarZA', () => {
  it('deberia ser una funcion', () => {
    expect(typeof ordenarZA).toBe('function');
  });

  it('returns un array que contiene los pokemon ordenados de la Z-A', () => {
    expect(ordenarZA(arrayParaTest)).toEqual(arrayOrdenarZA);
  });
});

//TEST PARA BUSCADOR .......
describe('filtraBuscador', () => {
  it('debería ser una función', () => {
    expect(typeof filtraBuscador).toBe('function');
  });
  it('Debería retornar "togepi" para "togepi"', () => {
  expect(filtraBuscador('togepi', arrayBuscador)).toEqual(arrayBuscador);
  });
})

// TEST PARA REDUCE 
describe("reduceType", () => {
  it("es una function", () => {
    expect(typeof reduceType).toBe("function");
  });

  it('deberia retornar un objeto con propiedades y valor', () => {
    expect(reduceType(arrayParaTest)).toEqual(objReduce);
  });

});