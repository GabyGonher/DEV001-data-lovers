
// import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';

const cadaPokemon = data.pokemon


export const filtraTipos = (type) => {    
    // console.log(type)
    return cadaPokemon.filter((element) => {
        return element.type.includes(type);
    });
}

   