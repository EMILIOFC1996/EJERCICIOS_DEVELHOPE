
const isLogged = 1;

let promesa = new Promise((resolve, reject) => {

    isLogged  ? resolve(Math.random()) : reject(new Error("Usuario no registrado"));
});

function promesa2(numero){

    return new Promise((resolve, reject) => {
        if ( typeof numero === "number" && numero >= 0.5) {
            resolve({name: "John", age: 24});
        } else {
            reject(new Error(`el numero ${numero} es menor a 0.5`));
        }
        
    });
};

promesa
.then ((numero) => promesa2(numero))
.then ((objeto)=> console.log(objeto))
.catch ((error)=> console.error(error.name +" : "+ error.message))
.finally(()=>console.log(`Promesa Finalizada`))
