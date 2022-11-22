//Función para filtrar por tipos
export const filtraTipos = (type, arrPokemon) => {
    const filterType = arrPokemon.filter((element) =>
        element.type.includes(type)
    )
    return filterType;
};

//Función para ordenar de la A a la Z
export const ordenarAZ = (arrPokemon) => {
    return arrPokemon.sort((a, b) => {
        a.num - b.num
        if (a.name < b.name) {
            return -1;
        } else { 1 }
    });
};

//Función para ordenar de la Z a la A
export const ordenarZA = (arrPokemon) => {
    return arrPokemon.sort((a, b) => {
        a.num - b.num
        if (b.name < a.name) {
            return -1;
        } else { 1 }
    });
};

//Función para el buscador
export const filtraBuscador = (name, arrPokemon) => {
    const buscador = arrPokemon.filter(pokemon => pokemon.name.includes(name));
    return buscador
}

//Función reduce para mostrar estadística
export const reduceType = (arrPokemon) => {
    const tiposFlat = arrPokemon.map((pokemon) => pokemon.type).flat()
    const contarTipos = tiposFlat.reduce(function (obj, tipos) {
        if (!obj[tipos]) {
            obj[tipos] = 1;
        } else {
            obj[tipos]++
        }

        return obj;
    }, {});
    return contarTipos
}

