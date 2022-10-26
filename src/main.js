import data from './data/pokemon/pokemon.js';
//console.log(data);
//import { example } from './data.js';
//document.getElementsByName(bulbasaur)
const pokemonName = data.pokemon
const contenedor = document.getElementById("card")

pokemonName.forEach((pokemon) => {
    const tarjeta = `<div class="card"><p>${pokemon.name}</p><br><img src="${pokemon.img}"><br><p>Type: ${pokemon.type}</p><br><p>Evolution: ${pokemon.evolution['next-evolution:name']}`
    contenedor.insertAdjacentHTML('beforebegin', tarjeta)
});











// const pokemonName = data.pokemon
// pokemonName.forEach((pokemon) =>
// console.log(pokemon)
// );
// console.log(data)
// //})
