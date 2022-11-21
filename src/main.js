import data from './data/pokemon/pokemon.js';
import { filtraTipos, ordenarAZ, ordenarZA, filtraBuscador, arrTipos } from './data.js';


const cadaPokemon = data.pokemon
const contenedor = document.getElementById("cardList")
const divParaModal = document.getElementById("divParaModal")
const crearModal = (pokemon) => {
    const modal = document.createElement("div");
    modal.className = "modal-container"
    modal.id = "modal-container"
    modal.innerHTML =
        `<div class= "modal">
            <p class="name-modal">${pokemon.name}</p>
            <p class="img"><img src="${pokemon.img}"></p>
            <p class="text-modal">${pokemon.about}</p>
            <div class="text-modal">Attack ${pokemon["special-attack"].map((ataque) =>
            `<li class="ataqueClass ${ataque}">${ataque.name}</li>`)}</div> 
            <p class="text-modal">Height ${pokemon["size"].height}</p>
            <p class="text-modal">Weight ${pokemon["size"].height}</p>
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
    console.log(search);
    tarjetasPokemon(search)
})

document.getElementById("conteoTipos").innerHTML = 
`<p>Grass ${arrTipos(cadaPokemon).grass}</p>
<p>Fire ${arrTipos(cadaPokemon).fire}</p>
<p>Water ${arrTipos(cadaPokemon).water}</p>
<p>Electric ${arrTipos(cadaPokemon).electric}</p>
<p>Flying ${arrTipos(cadaPokemon).flying}</p>
<p>Normal ${arrTipos(cadaPokemon).normal}</p>
<p>Poison ${arrTipos(cadaPokemon).poison}</p>
<p>Ice ${arrTipos(cadaPokemon).ice}</p>
<p>Fighting ${arrTipos(cadaPokemon).fighting}</p>
<p>Ground ${arrTipos(cadaPokemon).ground}</p>
<p>Psychic ${arrTipos(cadaPokemon).psychic}</p>
<p>Bug ${arrTipos(cadaPokemon).bug}</p>
<p>Rock ${arrTipos(cadaPokemon).rock}</p>
<p>Ghost ${arrTipos(cadaPokemon).ghost}</p>
<p>Dark ${arrTipos(cadaPokemon).dark}</p>
<p>Dragon ${arrTipos(cadaPokemon).dragon}</p>
<p>Steel ${arrTipos(cadaPokemon).steel}</p>
<p>Fairy ${arrTipos(cadaPokemon).fairy}</p>
`



























