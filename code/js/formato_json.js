// var unicorno = new Object();
// console.log(unicorno);






//Assegnare informazioni
// unicorno.simbolo = '🦄';
// unicorno['numero_corni'] = 1;
// unicorno['numero_zampe'] = 4;
// unicorno.nome = 'Qualtia';
// console.log(unicorno)







//Oggetto dentro un oggetto
// unicorno.indirizzo = new Object();
// unicorno.indirizzo.nazione = 'Regno Incantato';
// unicorno.indirizzo.popolazione = 1000;
// unicorno.indirizzo.estensione = 123456789;
// console.log(unicorno)







//Assegnare funzioni
// unicorno.poteri = new Object();
// unicorno.poteri.corre = function(){
//     console.log('Sto correndo');   
// }
// console.log(unicorno);
// unicorno.poteri.corre();


// var correVelocissimo = function(){
//     console.log('Sto correndo velocissimo');
// }
// unicorno.poteri.correVelocissimo = correVelocissimo;
// unicorno.poteri.correVelocissimo();







//Object Literal
// var squirtle = {
//     nome: 'Squirtle',
//     simbolo: '🐢',
//     numero: 7,
//     tipo: 'acqua',
//     altezza: 50,
//     peso: 9,
//     pagina_wiki: 'https://wiki.pokemoncentral.it/Squirtle',
//     mosse : {
//         pistolacqua : {
//             tipo : 'acqua',
//             potenza: 40,
//             precisione: 100,
//             pp: 25
//         }
//     }
// }
// console.log(squirtle);








//JSON stringify
// var unicornoComeStringa;
// unicornoComeStringa = JSON.stringify(unicorno);
// console.log(unicornoComeStringa);
// console.log(typeof unicornoComeStringa);
// console.log(typeof unicorno);








//JSON parse
// var albertoComeStringa = '{"nome": "Alberto", "cognome": "Bonacina", "eta": 32}';
// var albertoComeOggetto = JSON.parse(albertoComeStringa);
// console.log(albertoComeStringa);
// console.log(typeof albertoComeStringa);
// console.log(albertoComeOggetto);
// console.log(typeof albertoComeOggetto);