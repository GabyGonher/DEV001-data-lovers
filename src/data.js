import data from './data/pokemon/pokemon.js';

const cadaPokemon = data.pokemon




// export const filtraTipos = (type,cadaPokemon) => {  
//     const filterType= cadaPokemon.filter((element) => 
//         element.type.includes(type)

//     );
//     console.log(filterType);
//     return filterType;
// };

export const filtraTipos = (type) => {
    // console.log(type)
    return cadaPokemon.filter((element) => {
        return element.type.includes(type);
    });
}

// export const ordenarNum = cadaPokemon.sort((a, b) => {
//     return a.num - b.num
// });console.log(ordenarNum)

export const ordenarAZ = () => {
    
    return cadaPokemon.sort((a, b) => {
    a.num - b.num
    if (a.name < b.name) {
        return -1;
    } else { 1 }
});
};

export const ordenarZA = () => {
    
    return cadaPokemon.sort((a, b) => {
    a.num - b.num
    if (b.name < a.name) {
        return -1;
    } else { 1 }
});
};

export const filtraBuscador = (name) => {
    console.log(name)
    const buscador= cadaPokemon.filter((name) => {
        name.target.matches("")
    });
    // console.log(buscador)
    return buscador
}


// const filtraBuscador = (name) => {
//     console.log(name)
//     return cadaPokemon.filter((element) => {
//         return element.name.includes(pikachu);
//     });
// }
