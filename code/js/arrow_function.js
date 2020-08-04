//Definizione classica
// function saluti(){
//     console.log("Ciao a tutti");
// }
// var funzioneSaluti = saluti;
// funzioneSaluti();





//Definizione compatta
// var funzioneSaluti = function saluti(){
//     console.log("Ciao a tutti");
// }
// funzioneSaluti();





//Arrow function
// var funzioneSaluti = ()=>{
//     console.log("Ciao a tutti");
// }
// funzioneSaluti();





//Arrow function compatta
// var funzioneSaluti = () => console.log("Ciao a tutti");
// funzioneSaluti();





//Arrow function parametri
// var funzioneSalutoConNome = (nome) => {
//     console.log(`Ciao ${nome}`);
// }
// funzioneSalutoConNome('Alberto');




// var pokemon = [{
//         name: 'Bulbasaur',
//         tipo: 'Erba'
//     },{
//         name : 'Charmender',
//         tipo: 'Fuoco'
//     },{
//         name : 'Squirtle',
//         tipo: 'Acqua'
//     }];

// for(let i = 0; i < pokemon.length ; i++ ){
//     console.log("Pokemon) " + pokemon[i]["name"] + " - Tipo) " + pokemon[i]["tipo"] );
// }




// pokemon.map((single)=>{
//     console.log(`Pokemon) ${single.name} - Tipo) ${single.tipo}`)
// });