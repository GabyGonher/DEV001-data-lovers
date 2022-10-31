
import data from './data/pokemon/pokemon.js';

const cadaPokemon = data.pokemon

export const filtraTipos = cadaPokemon.filter (function (pokemon) {
  return pokemon.type[0] === "grass"
});

console.log(filtraTipos)




// export const anotherExample = () => {
//   return 'OMG';
// };
