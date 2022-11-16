import data from './data/pokemon/pokemon.js';
import { filtraTipos, ordenarAz } from './data.js';


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
            arrPoke.addEventListener("click", function eventoModal() {
                modal_container.classList.add("show");
                // console.log(arrPoke)
            })
        })

        close.addEventListener("click", () => {
            modal_container.classList.remove("show")
        })
    })
}
(modalesPokemon(cadaPokemon))


// document.body.addEventListener("click", (e) => {
//     // console.log("soy un click", e.target);
// })


const listaTipos = document.querySelectorAll('.menuDesplegable button')

listaTipos.forEach((button) => {
    button.addEventListener("click", function eventos(e) {
        tarjetasPokemon(filtraTipos(e.target.value))
        
    });
});

const buttonOrdenar = document.getElementById('buttonOrdenar')
buttonOrdenar.addEventListener("click", function eventos (e)  {
    tarjetasPokemon(ordenarAz (e.target.value)    
)});
