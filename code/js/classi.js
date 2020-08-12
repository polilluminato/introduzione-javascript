// class Animale{
//     constructor(name){
//         this.name = name;
//     }

//     printNomeConSaluto(){
//         console.log(`Ciao ${this.name}`);
//     }
// }
// var myAnimal = new Animale('Jack');
// console.log(myAnimal.name);
// myAnimal.printNomeConSaluto();






// class Rettangolo{

//     #base; #altezza;

//     constructor(base,altezza){
//         this.#base = base;
//         this.#altezza = altezza;
//     }

//     //Getter
//     get area(){
//         return this.#base*this.#altezza;
//     }

//     //Funzione
//     calcolaArea(){
//         return this.#base*this.#altezza;
//     }
//     calcolaPerimetro(){
//         return (this.#base*2)+(this.#altezza*2);
//     }
// }
// var myRectangle = new Rettangolo(10,20);
// //console.log(myRectangle.base);
// console.log(myRectangle.area);
// console.log(myRectangle.calcolaArea());








//Estendere una classe
// class Quadrato extends Rettangolo {
//     constructor(lato) {
//       super(lato,lato); 
//     }
// }
// var myQuadrato = new Quadrato(20);
// console.log(myQuadrato.area);
// console.log(myQuadrato.calcolaArea());
// console.log(myQuadrato.calcolaPerimetro());









// class Quadrato extends Rettangolo {
//     #lato;
//     constructor(lato) {
//       super(lato,lato); 
//       this.#lato = lato;
//     }

//     calcolaPerimetro(){
//         return this.#lato*5;
//     }
// }
// var myQuadrato = new Quadrato(20);
// console.log(myQuadrato.area);
// console.log(myQuadrato.calcolaArea());
// console.log(myQuadrato.calcolaPerimetro());

//Vedi se parlare dei metodo privati e pubblici