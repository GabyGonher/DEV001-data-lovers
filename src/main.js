import data from './data/pokemon/pokemon.js';
import { filtraTipos, ordenarAZ, ordenarZA, filtraBuscador, reduceType } from './data.js';


const cadaPokemon = data.pokemon
const contenedor = document.getElementById("cardList")
const divParaModal = document.getElementById("divParaModal")
const crearModal = (pokemon) => {
    const modal = document.createElement("div");
    modal.className = "modal-container"
    modal.id = "modal-container"
    modal.innerHTML =

        `  <div class= "modal">
            <p class="name-modal">${pokemon.name}</p>
            <p class="img"><img src="${pokemon.img}"></p>
            <p class="text-modal">${pokemon.about}</p><br>
            <div class= "modalInfo">
            <div class="text-modal"> <span class="name-card">Attack</span> ${pokemon["special-attack"].map((ataque) =>
            `<li class="ataqueClass ${ataque}">${ataque.name}</li>`).join("")}</div>
            <div class="text-modal"> <span class="name-card">Weaknesses</span> ${pokemon["weaknesses"].map((debilidad) =>
                `<li class="ataqueClass ${debilidad}">${debilidad}</li>`).join("")}</div> 
            <div class="text-modal"> <span class="name-card">Resistant</span> ${pokemon["resistant"].map((resistencia) =>
                    `<li class="ataqueClass ${resistencia}">${resistencia}</li>`).join("")}</div>  
            <p class="text-modal"> <span class="name-card">Height</span> <br> ${pokemon["size"].height}</p> 
            <p class="text-modal"> <span class="name-card"> Weight</span><br> ${pokemon["size"].height}</p>
            </div>
           <button id="closeModal" class="close">X</button>
        </div>`
    divParaModal.innerHTML = '';
    divParaModal.appendChild(modal)
}

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
                `<span class="typeClass ${type}">${type}</span>`).join(" / ")}</div>
            <p><span class="name-card">Generation</span><br> ${pokemon["generation"].name}</p>
            <button id="${index}" class="open" name="openModal">Learn more</button>
        </div>`
        contenedor.appendChild(tarjeta)


        const open = document.querySelectorAll(".open")



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



const listaTipos = document.querySelectorAll('.menuDesplegable button')
listaTipos.forEach((button) => {

    button.addEventListener("click", function eventos(e) {
        contenedor.setAttribute("filter", e.target.value)
        const resultado = filtraTipos(e.target.value, cadaPokemon)
        tarjetasPokemon(resultado)
    });
});

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


const btnEstadistica = document.getElementById("btnEstadistica")
const divOpaco = document.getElementById("divOpaco")
const closeEstadistica = document.getElementById("closeEstadistica")
btnEstadistica.addEventListener("click", () => {
    divOpaco.classList.add("show");
})
closeEstadistica.addEventListener("click", () => {
    divOpaco.classList.remove("show");
})

const inputBuscar = document.getElementById("inputBuscar")
inputBuscar.addEventListener("keyup", () => {
    const search = filtraBuscador(inputBuscar.value, cadaPokemon);
    // console.log(search);
    tarjetasPokemon(search)
})

document.getElementById("conteoTipos").innerHTML =
    `<p>Grass ${reduceType(cadaPokemon).grass}</p>
<p>Fire ${reduceType(cadaPokemon).fire}</p>
<p>Water ${reduceType(cadaPokemon).water}</p>
<p>Electric ${reduceType(cadaPokemon).electric}</p>
<p>Flying ${reduceType(cadaPokemon).flying}</p>
<p>Normal ${reduceType(cadaPokemon).normal}</p>
<p>Poison ${reduceType(cadaPokemon).poison}</p>
<p>Ice ${reduceType(cadaPokemon).ice}</p>
<p>Fighting ${reduceType(cadaPokemon).fighting}</p>
<p>Ground ${reduceType(cadaPokemon).ground}</p>
<p>Psychic ${reduceType(cadaPokemon).psychic}</p>
<p>Bug ${reduceType(cadaPokemon).bug}</p>
<p>Rock ${reduceType(cadaPokemon).rock}</p>
<p>Ghost ${reduceType(cadaPokemon).ghost}</p>
<p>Dark ${reduceType(cadaPokemon).dark}</p>
<p>Dragon ${reduceType(cadaPokemon).dragon}</p>
<p>Steel ${reduceType(cadaPokemon).steel}</p>
<p>Fairy ${reduceType(cadaPokemon).fairy}</p>
`
