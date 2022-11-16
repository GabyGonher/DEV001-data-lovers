import data from './data/pokemon/pokemon.js';

const cadaPokemon = data.pokemon




// export const filtraTipos = (type,cadaPokemon) => {  
//     const filterType= cadaPokemon.filter((element) => 
//         element.type.includes(type)
        
//     );
//     console.log(filterType);
//     return filterType;
// };

export const filtraTipos = (type) => {
    // console.log(type)
    return cadaPokemon.filter((element) => {
        return element.type.includes(type);
    });
}


   export const ordenarAz = (cadaPokemon) => {
        let arrayOrdenar = [...cadaPokemon]
        const pokemonAz = arrayOrdenar.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
              
            }
        });
            return pokemonAz;
        
            
    };
// console.log(ordenarAz)


// const filtraBuscador = (name) => {
//     console.log(name)
//     return cadaPokemon.filter((element) => {
//         return element.name.includes(pikachu);
//     });
// }
