(function miaFunzione(){

    primaFunzione();
    secondaFunzione();
    terzaFunzione();

})();


let primaFunzione = () => {

    setTimeout(()=>{
        console.log('Finito 3s');
    },3000);
}

let secondaFunzione = () => {

    setTimeout(()=>{
        console.log('Finito 2s');
    },2000);
}

let terzaFunzione = () => {

    setTimeout(()=>{
        console.log('Finito 1s');
    },1000);
}









// let primaFunzione = () => {
//     return new Promise(function(resolve,reject){
    
//         setTimeout(()=>{
//             console.log('Finito 3s');
//             resolve(true);
//         },3000);
//     });
// }

// let secondaFunzione = () => {
//     return new Promise(function(resolve,reject){
    
//         setTimeout(()=>{
//             console.log('Finito 2s');
//             resolve(true);
//         },2000);
//     });
// }

// let terzaFunzione = () => {
//     return new Promise(function(resolve,reject){
    
//         setTimeout(()=>{
//             console.log('Finito 1s');
//             resolve(true);
//         },1000);
//     });
// }

// (async function miaFunzione(){

//     await primaFunzione();
//     await secondaFunzione();
//     await terzaFunzione();

// })();