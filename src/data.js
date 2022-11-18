
export const filtraTipos = (type,arrPokemon) => {  
    const filterType= arrPokemon.filter((element) => 
        element.type.includes(type)
       
         
    )
    console.log(filterType)
     return filterType;
   
   };



   
export const ordenarAZ = (arrPokemon) => {
    
    return arrPokemon.sort((a, b) => {
    a.num - b.num
    if (a.name < b.name) {
        return -1;
    } else { 1 }
});
};

export const ordenarZA = (arrPokemon) => {
    
    return arrPokemon.sort((a, b) => {
    a.num - b.num
    if (b.name < a.name) {
        return -1;
    } else { 1 }
});
};

export const contarTipos = (arrPokemon) =>{
    const pruebita= arrPokemon.map((type) => arrPokemon.type);
    

console.log(pruebita)
}
// export const filtraBuscador = (name) => {
//     // console.log(name)
//     const buscador= arrPokemon.filter((name) => {
//         name.target.matches("")
//     });
//     // console.log(buscador)
//     return buscador
// }

// export const filtraBuscador = (name, arrPokemon) => {
//     // debugger;
//     const buscador = arrPokemon.filter((pokemon) => {
//         buscador.includes(name)

   
// })};












