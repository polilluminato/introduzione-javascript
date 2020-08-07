var arrayNumeri = [1,2,3,4,5,6];
console.log(arrayNumeri);

// for( let i = 0 ; i < arrayNumeri.length ; i++ ){
//     console.log(arrayNumeri[i]);
// }
// arrayNumeri.forEach((single)=>{
//     console.log(single);
// });






//MAP: operazione sulla singola componente dell'array
//  tornando un nuovo array
// let arrayNumeriAlQuadrato = arrayNumeri.map((single)=>{
//     return single**2;
// });
// console.log(arrayNumeriAlQuadrato);








//FILTER: nuovo array con solo i valori che rispettano
//  una certa condizione
// let arrayNumeriPari = arrayNumeri.filter((single)=>{
//     return single % 2 == 0;
// });
// console.log(arrayNumeriPari);







//REDUCE: singolo valore che è la "sintesi" delle componenti dell'array
// let sommaNumeri = arrayNumeri.reduce((total,single)=>{
//     return total + single ;
// });
// console.log(sommaNumeri);
// let sommaNumeriNonDaZero = arrayNumeri.reduce((total,single)=>{
//     return total + single ;
// },1000);
// console.log(sommaNumeriNonDaZero);







//EVERY: controllo se TUTTE le componenti rispettano una condizione
// let tuttiPositivi = arrayNumeri.every((single)=>{
//     return single >= 0;
// });
// console.log(tuttiPositivi);
// let tuttiMaggioriDiTre = arrayNumeri.every((single)=>{
//     return single > 3;
// });
// console.log(tuttiMaggioriDiTre);


//SOME: 


//FIND: 