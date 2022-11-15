
// import data from './data/pokemon/pokemon.js';
// import { filtraTipos } from './data.js';
// // import pokemon from './data/pokemon/pokemon.js';

// const cadaPokemon = data.pokemon
// const contenedor = document.getElementById("cardList")
// const divParaModal = document.getElementById("divParaModal")


// const tarjetasPokemon= (arrPoke) => {
//     contenedor.innerHTML='';
//     // console.log (arrPoke)
//     arrPoke.forEach((pokemon) => { 

// // const ataques = pokemon.special-attack.forEach(ataques => {
// //     ataques
// //     console.log(ataques)


//    const ataques= pokemon["special-attack"].map(ataque => {
//         return `<li>${ataque.name}</li>`;
//         // return '<li>' + ataque.name + '</li>';
            
//         });  
    


        

// const tarjeta= document.createElement("div");
// tarjeta.className= "card"
//     tarjeta.innerHTML=
//     `<div class= "front">
//         <p class="name">${pokemon.name}</p>
//         <img src="${pokemon.img}">
//         <p class="pk_num">${pokemon.num}</p>
//         <p>Type: ${pokemon.type[0]}</p>
//         <p>Rarity: ${pokemon["pokemon-rarity"]}</p>
//         <button id="openModal" class="open">Learn more</button>
//     </div>`
//     contenedor.appendChild(tarjeta)

//     const modal = document.createElement("div");
//     modal.className = "modal-container"
//     modal.id = "modal-container"
//         modal.innerHTML=
//         `<div class= "modal">
//             <p class="name">${pokemon.name}</p>
//             <img src="${pokemon.img}">
//             <p>${pokemon.about}</p>
//             <p>${pokemon.resistant}</p>
//             <p><ul>${ataques}</ul></p>
//             <button id="closeModal" class="close">X</button>
//         </div>`
//         divParaModal.appendChild(modal)


// const open = document.getElementById("openModal")
// const modal_container = document.getElementById("modal-container")
// const close = document.getElementById("closeModal")


// open.addEventListener("click", () => {
//     modal_container.classList.add("show")
// })

// close.addEventListener("click", () => {
//     modal_container.classList.remove("show")
// })

// })};

// (tarjetasPokemon(cadaPokemon))



// const pruebita= document.querySelectorAll ('.desplegable button')
// function eventos (e){
//     tarjetasPokemon(filtraTipos (e.target.value)
// )}
// pruebita.forEach((button) =>{
//     button.addEventListener("click", eventos)
// })

// cadaPokemon


// const Tipos= document.getElementById("fire")
// Tipos.addEventListener("click", function () { 
//  tarjetasPokemon(filtraTipos("fire"));
        
// });----------------------------------------------

import data from './data/pokemon/pokemon.js';
import { filtraTipos } from './data.js';


const cadaPokemon = data.pokemon
const contenedor = document.getElementById("cardList")
const divParaModal = document.getElementById("divParaModal")


const tarjetasPokemon = (arrPoke) => {
    contenedor.innerHTML = '';
    console.log(arrPoke)
    arrPoke.forEach((pokemon) => {

        const tarjeta = document.createElement("div");
        tarjeta.className = "card"
        tarjeta.innerHTML =
            `<div class= "front">
        <p class="name">${pokemon.name}</p>
        <img src="${pokemon.img}">
        <p class="pk_num">${pokemon.num}</p>
        <div>Type: ${pokemon.type.map((type) => `<span class="typeClass ${type}">${type}</span>`).join(" / ")}</div>
        <p>Rarity: ${pokemon["pokemon-rarity"]}</p>
        <button id="openModal" class="open" name="openModal">Learn more</button>
    </div>`
        contenedor.appendChild(tarjeta)
    })
};

(tarjetasPokemon(cadaPokemon))

const modalesPokemon = (arrPoke) => {

    arrPoke.forEach((pokemon) => {

        const modal = document.createElement("div");
        modal.className = "modal-container"
        modal.id = "modal-container"
        modal.innerHTML =
            `<div class= "modal">
                <p class="name">${pokemon.name}</p>
                <img src="${pokemon.img}">
                <p>${pokemon.about}</p>
                <div>Attack: ${pokemon["special-attack"].map((ataque) => `<span class="ataqueClass ${ataque}"> ${ataque.name}</span>`).join(", ")}</div> 
                <button id="closeModal" class="close">X</button>
            </div>`
        divParaModal.appendChild(modal)

        const open = document.querySelectorAll(".open")
        const modal_container = document.getElementById("modal-container")
        const close = document.getElementById("closeModal")

        open.forEach(arrPoke => {
            arrPoke.addEventListener("click", function eventoModal(e) {
                modal_container.classList.add("show");
                console.log(arrPoke)
            })
        })

        close.addEventListener("click", () => {
            modal_container.classList.remove("show")
        })
    })
}
(modalesPokemon(cadaPokemon))





document.body.addEventListener("click", (e) => {
    console.log("soy un click", e.target);
})

const pruebita = document.querySelectorAll('.desplegable button')

pruebita.forEach((button) => {
    button.addEventListener("click", function eventos(e) {
        tarjetasPokemon(filtraTipos(e.target.value)
        )
    })
})
