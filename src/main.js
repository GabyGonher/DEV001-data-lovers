import data from './data/pokemon/pokemon.js';
import { filtraTipos, ordenarAZ, ordenarZA, filtraBuscador, reduceType } from './data.js';


const cadaPokemon = data.pokemon
const contenedor = document.getElementById("cardList")
const divParaModal = document.getElementById("divParaModal")

//Creamos modal para cada Pokemon
const crearModal = (pokemon) => {
    const modal = document.createElement("div");
    modal.className = "modal-container"
    modal.id = "modal-container"
    modal.innerHTML =

        `  <div class= "modal">
            <div><button id="closeModal" class="close">X</button></div>
            <p class="name-modal">${pokemon.name}</p>
            <p class="img"><img src="${pokemon.img}"></p>
            <p class="text-modal">${pokemon.about}</p><br>
            <div class= "modalInfo">
            <p class="text-modal"> <span class="name-card">Height</span><br> ${pokemon["size"].height}</p>
            <p class="text-modal"> <span class="name-card"> Weight</span><br> ${pokemon["size"].height}</p>
            <div class="text-modal"> <span class="name-card">Attack</span><br> ${pokemon["special-attack"].map((ataque) =>
            `<li class="ataqueClass ${ataque}">${ataque.name}</li>`).join("")}</div>
            <div class="text-modal"> <span class="name-card">Weaknesses</span><br> ${pokemon["weaknesses"].map((debilidad) =>
                `<li class="ataqueClass ${debilidad}">${debilidad}</li>`).join("")}</div> 
            <div class="text-modal"> <span class="name-card">Resistant</span><br> ${pokemon["resistant"].map((resistencia) =>
                `<li class="ataqueClass ${resistencia}">${resistencia}</li>`).join("")}</div> 
            </div>
            
        </div>`
    divParaModal.innerHTML = '';
    divParaModal.appendChild(modal)
}

//Generamos tarjetas para cada Pokemon
const tarjetasPokemon = (arrPoke) => {
    contenedor.innerHTML = '';
    arrPoke.forEach((pokemon, index) => {

        const tarjeta = document.createElement("div");
        tarjeta.className = "card"
        tarjeta.innerHTML =
            `<div class= "front">
            <p class="name">${pokemon.name}</p>
            <p class="img" ><img src="${pokemon.img}"></p>
            <p class="pk_num">${pokemon.num}</p>
            <div><span class="name-card">Type</span><br> ${pokemon.type.map((type) =>
                `<span class="ataqueClass ${type}">${type}</span>`).join(" / ")}</div>
            <p><span class="name-card">Generation</span><br> ${pokemon["generation"].name}</p>
            <button id="${index}" class="open" name="openModal">Learn more</button>
        </div>`
        contenedor.appendChild(tarjeta)


        const open = document.querySelectorAll(".open")


//Función para que al abrir el modal se muestre el pokemon que corresponde
        open.forEach(btn => {
            btn.addEventListener("click", function eventoModal(e) {
                const pokeIndex = parseInt(e.target.id)
                const selectedPoke = arrPoke[pokeIndex]
                crearModal(selectedPoke)
                const modal_container = document.getElementById("modal-container")
                modal_container.classList.add("show");
                // console.log(arrPoke)
                const close = document.getElementById("closeModal")
                close.addEventListener("click", () => {
                    modal_container.classList.remove("show")
                })
            })
        })
    })
};
(tarjetasPokemon(cadaPokemon))


//Función que muestra el array por tipos según lo seleccionado por el usuario
const listaTipos = document.querySelectorAll('.menuDesplegable button')
listaTipos.forEach((button) => {
    button.addEventListener("click", function eventos(e) {
        contenedor.setAttribute("filter", e.target.value)
        const resultado = filtraTipos(e.target.value, cadaPokemon)
        tarjetasPokemon(resultado)
    });
});

//Función que ordene de la A a la Z
const buttonOrdenarAZ = document.getElementById('buttonOrdenarAZ')
buttonOrdenarAZ.addEventListener("click", function () {
    if (contenedor.getAttribute("filter") == "none") {
        tarjetasPokemon(ordenarAZ(cadaPokemon))
    }
    else {
        const filtroElegido = contenedor.getAttribute("filter")
        const resultado = filtraTipos(filtroElegido, cadaPokemon)
        tarjetasPokemon(ordenarAZ(resultado))
    }
});

//Función que ordena de la Z a la A
const buttonOrdenarZA = document.getElementById('buttonOrdenarZA')
buttonOrdenarZA.addEventListener("click", function () {
    if (contenedor.getAttribute("filter") == "none") {
        tarjetasPokemon(ordenarZA(cadaPokemon))
    }
    else {
        const filtroElegido = contenedor.getAttribute("filter")
        const resultado = filtraTipos(filtroElegido, cadaPokemon)
        tarjetasPokemon(ordenarZA(resultado))
    }
});

//Función que muestra el pokemon según el input del buscador
const inputBuscar = document.getElementById("inputBuscar")
inputBuscar.addEventListener("keyup", () => {
    const search = filtraBuscador(inputBuscar.value, cadaPokemon);
    // console.log(search);
    tarjetasPokemon(search)
})

//Creamos el modal para estadística
const btnEstadistica = document.getElementById("btnEstadistica")
const divOpaco = document.getElementById("divOpaco")
const closeEstadistica = document.getElementById("closeEstadistica")
btnEstadistica.addEventListener("click", () => {
    divOpaco.classList.add("show");
})
closeEstadistica.addEventListener("click", () => {
    divOpaco.classList.remove("show");
})


//Se muestra el resultado de la estadística por tipos
document.getElementById("conteoTipos").innerHTML =
    `<p class="statTitle">Number of Pokémon per type</p>
    <div class="modalInfoEstats name-card">
        <p class="open">Grass<br> ${reduceType(cadaPokemon).grass}</p>
        <p class="open">Fire<br> ${reduceType(cadaPokemon).fire}</p>
        <p class="open">Water<br> ${reduceType(cadaPokemon).water}</p>
        <p class="open">Electric<br> ${reduceType(cadaPokemon).electric}</p>
        <p class="open">Flying<br> ${reduceType(cadaPokemon).flying}</p>
        <p class="open">Normal<br> ${reduceType(cadaPokemon).normal}</p>
        <p class="open">Poison<br> ${reduceType(cadaPokemon).poison}</p>
        <p class="open">Ice<br> ${reduceType(cadaPokemon).ice}</p>
        <p class="open">Fighting<br> ${reduceType(cadaPokemon).fighting}</p>
        <p class="open">Ground<br> ${reduceType(cadaPokemon).ground}</p>
        <p class="open">Psychic<br> ${reduceType(cadaPokemon).psychic}</p>
        <p class="open">Bug<br> ${reduceType(cadaPokemon).bug}</p>
        <p class="open">Rock<br> ${reduceType(cadaPokemon).rock}</p>
        <p class="open">Ghost<br> ${reduceType(cadaPokemon).ghost}</p>
        <p class="open">Dark<br> ${reduceType(cadaPokemon).dark}</p>
        <p class="open">Dragon<br> ${reduceType(cadaPokemon).dragon}</p>
        <p class="open">Steel<br> ${reduceType(cadaPokemon).steel}</p>
        <p class="open">Fairy<br> ${reduceType(cadaPokemon).fairy}</p>
    </div>`
