
// import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';

const cadaPokemon = data.pokemon

// export const filtraTipos = cadaPokemon.filter(function (pokemon) {
//   return pokemon.type[0] === "grass"

  
  
// });

// console.log(filtraTipos)


/* export const filtraTipos = (type) => {
    const filtradoTipo = cadaPokemon.filter(pokemon) => {
        pokemon.type.includes(nameType)
        return filtradoTipo
    }} */


export const filtraTipos = (type) => {    
    return cadaPokemon.filter((element) => {
        return element.type.includes(type);
    });
}

    //     (pokemon.type[0]=== "grass");
    // console.log(filtraTipos)





// export const filterByType = ()meType, pokemonData)=> {
//     const filterType = pokemonData.filter((pokemon =>
//     pokemon.type.includes(nameType)
//     return filterType



  



// console.log(filtraTipos)




// contenedor.insertAdjacentHTML(filtra)

// const filtraTipos= (element) => {
//   const id = element.id;
// cadaPokemon.filter 

// }