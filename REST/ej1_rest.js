// ¿Sabes cómo "fusionar" el valor de la newNumber variable numberStoresin utilizar el método de matriz push?

let numberStore = [0, 1, 2];
let newNumber = 3;

//numberStore.push(newNumber);
let resultado =[...numberStore,newNumber]
console.log(resultado);
// console.log([...numberStore,newNumber]); --> Otro metodo solo imprimir union matrices.