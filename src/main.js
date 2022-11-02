
import data from './data/pokemon/pokemon.js';
import { filtraTipos } from './data.js';

const cadaPokemon = data.pokemon
const contenedor = document.getElementById("card")




cadaPokemon.forEach((pokemon) => {

    // const evoluciones = pokemon.evolution['next-evolution']
    // console.log(evoluciones)

    // if (evoluciones === ("next-evolution" ||  "prev-evolution")){
    //     console.log(evoluciones)
    // } else {
    //     console.log ("no tiene evolución")
    // }
    // console.log(evoluciones)

    const tarjeta =
        `<div class="card">
    <div class= "front">
    <p class="name">${pokemon.name}</p>
    <img src="${pokemon.img}">
    <p class="pk_num">${pokemon.num}</p>
    <p>Type: ${pokemon.type[0]}</p>
    <p>Rarity: ${pokemon["pokemon-rarity"]}</p>
    </div>`
    // <div class="back">
    // <p>Generation: ${pokemon.generation['name']}</p><br>
    // <p>About: ${pokemon.about}</p>
    // </div>
    contenedor.insertAdjacentHTML('beforebegin', tarjeta)


    const Tipos = document.getElementById("grass")
    Tipos.addEventListener("click", function () {
        document.getElementsByClassName('contenedor')[0].innerHTML = ""




    })

})