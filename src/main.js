
import data from './data/pokemon/pokemon.js';
import { filtraTipos } from './data.js';
import pokemon from './data/pokemon/pokemon.js';

const cadaPokemon = data.pokemon
const contenedor = document.getElementById("cardList")
const divParaModal = document.getElementById("divParaModal")


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
        <button id="openModal" class="open">Learn more</button>
    </div>`
    contenedor.appendChild(tarjeta)

    const modal = document.createElement("div");
    modal.className = "modal-container"
    modal.id = "modal-container"
        modal.innerHTML=
        `<div class= "modal">
            <p class="name">${pokemon.name}</p>
            <img src="${pokemon.img}">
            <p>${pokemon.about}</p>
            <button id="closeModal" class="close">X</button>
        </div>`
        divParaModal.appendChild(modal)

const open = document.getElementById("openModal")
const modal_container = document.getElementById("modal-container")
const close = document.getElementById("closeModal")


open.addEventListener("click", () => {
    modal_container.classList.add("show")
})

close.addEventListener("click", () => {
    modal_container.classList.remove("show")
})

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