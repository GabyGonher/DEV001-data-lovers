import data from './data/pokemon/pokemon.js';
import { filtraTipos, ordenarAZ, ordenarZA, filtraBuscador } from './data.js';



const cadaPokemon = data.pokemon
const contenedor = document.getElementById("cardList")
const divParaModal = document.getElementById("divParaModal")


const tarjetasPokemon = (arrPoke) => {
    contenedor.innerHTML = '';
    // console.log(arrPoke)
    arrPoke.forEach((pokemon) => {

        const tarjeta = document.createElement("div");
        tarjeta.className = "card"
        tarjeta.innerHTML =
        `<div class= "front">
            <p class="name">${pokemon.name}</p>
            <p class="img" ><img src="${pokemon.img}"></p>
            <p class="pk_num">${pokemon.num}</p>
            <div><span class="name-card">Type</span><br> ${pokemon.type.map((type) => `<span class="typeClass ${type}">${type}</span>`).join(" / ")}</div>
            <p><span class="name-card">Generation</span><br> ${pokemon["generation"].name}</p>
            <button id="openModal" class="open" name="openModal">Learn more</button>
        </div>`
        contenedor.appendChild(tarjeta)


        const modal = document.createElement("div");
        modal.className = "modal-container"
        modal.id = "modal-container"
        modal.innerHTML =
        `<div class= "modal">
            <p class="name-modal">${pokemon.name}</p>
            <p class="img"><img src="${pokemon.img}"></p>
            <p class="text-modal">${pokemon.about}</p>
            <div class="text-modal">Attack ${pokemon["special-attack"].map((ataque) =>
                `<li class="ataqueClass ${ataque}"> ${ataque.name}</li>`)}</div> 
            <p class="text-modal">Height ${pokemon["size"].height}</p>
            <p class="text-modal">Weight ${pokemon["size"].height}</p>
            <button id="closeModal" class="close">X</button>
        </div>`
        divParaModal.appendChild(modal)

        const open = document.querySelectorAll(".open")
        const modal_container = document.getElementById("modal-container")
        const close = document.getElementById("closeModal")

        open.forEach(arrPoke => {
            arrPoke.addEventListener("click", function eventoModal() {
                modal_container.classList.add("show");
                // console.log(arrPoke)
            })
        })

        close.addEventListener("click", () => {
            modal_container.classList.remove("show")
        })
    })

};

(tarjetasPokemon(cadaPokemon))


const listaTipos = document.querySelectorAll('.menuDesplegable button')

listaTipos.forEach((button) => {
    button.addEventListener("click", function eventos(e) {
        tarjetasPokemon(filtraTipos(e.target.value))
    });

});

const buttonOrdenarAZ = document.getElementById('buttonOrdenarAZ')
buttonOrdenarAZ.addEventListener("click", function () {
    tarjetasPokemon(ordenarAZ())

});

const buttonOrdenarZA = document.getElementById('buttonOrdenarZA')
buttonOrdenarZA.addEventListener("click", function () {
    tarjetasPokemon(ordenarZA())

});

const inputBuscar= document.getElementById("inputBuscar")
inputBuscar.addEventListener("keyup", () => {
    const valor = inputBuscar.value
    filtraBuscador (valor)
        }
    );

