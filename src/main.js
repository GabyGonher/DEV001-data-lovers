
import data from './data/pokemon/pokemon.js';
import { filtraTipos } from './data.js';
import pokemon from './data/pokemon/pokemon.js';

const cadaPokemon = data.pokemon
const contenedor = document.getElementById("cardList")
const contenedorTipos= document.getElementById("card-Tipos")


const tarjetasPokemon= (arrPoke) => {
    contenedor.innerHTML='';
    console.log (arrPoke)
    arrPoke.forEach((pokemon) => { 
       

const tarjeta= document.createElement("div");
tarjeta.className= "card"
    tarjeta.innerHTML=
    `<div class= "front">
        <p class="name">${pokemon.name}</p>
        <img src="${pokemon.img}">
        <p class="pk_num">${pokemon.num}</p>
        <p>Type: ${pokemon.type[0]}</p>
        <p>Rarity: ${pokemon["pokemon-rarity"]}</p>
    </div>`

    contenedor.appendChild(tarjeta)


})};

(tarjetasPokemon(cadaPokemon))



const pruebita= document.querySelectorAll ('.sub1 button')
function eventos (e){
    tarjetasPokemon(filtraTipos (e.target.value)
)}
pruebita.forEach((button) =>{
    button.addEventListener("click", eventos)
})

// cadaPokemon


// const Tipos= document.getElementById("fire")
// Tipos.addEventListener("click", function () { 
//  tarjetasPokemon(filtraTipos("fire"));
        
// });