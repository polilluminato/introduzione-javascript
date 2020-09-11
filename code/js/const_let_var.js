// const miaCostante = 3.14159;
// console.log(miaCostante);
// miaCostante = 2.71828;






// var miaCostante = 3.14159;
// console.log(miaCostante);
// miaCostante = 2.71828;
// console.log(miaCostante);






//Function scope di var
// var i = 5;
// console.log('PRIMA) ' + i);

// function printaLoop(){
//     for(var i = 0 ; i < 3 ; i++){
//         console.log('\tDENTRO) ' + i);
//     }
// }
// printaLoop();

// console.log('DOPO) ' + i);







//Block Scope di var
// var i = 5;
// console.log('PRIMA) ' + i);

// for(var i = 0 ; i < 3 ; i++) {
//     console.log('\t\DENTRO) ' + i);
// }

// console.log('DOPO) ' + i);






//Esempio con block scope di let
// let i = 5;
// console.log('PRIMA) ' + i);

// for(let i = 0 ; i < 3 ; i++) {
//     console.log('\tDENTRO) ' + i);
// }

// console.log('DOPO) ' + i);




//Riassegnamento e creazione
// var mioNumero = 5;
// mioNumero = 7;

// var mioSecondoNumero = 6;
// var mioSecondoNumero = 7;


// let mioNumero = 5;
// mioNumero = 7;

// let mioSecondoNumero = 6;
// let mioSecondoNumero = 7;








//Hoisting di let e var
// console.log(pippo);
// var pippo;
// pippo = 5;
// console.log(pippo);



// console.log(pippo);
// let pippo;
// pippo = 5;
// console.log(pippo);