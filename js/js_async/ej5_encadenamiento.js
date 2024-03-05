// Escribe un primero promise que tome como parámetro la variable isLogged. Si la variable es verdadera, devolvemos un número aleatorio de la resolución; de lo contrario, enviamos un error. Escribimos un segundo promise que toma como parámetro una variable de tipo número. Si el parámetro de entrada es mayor que 0.5, en la resolución debemos devolver los siguientes datos: {name: "John", age: 24}, de lo contrario debemos enviar un error. Una vez hecho esto, intente encadenar las promesas para eventualmente devolver el objeto final.{name: "John", age: 24}

const isLogged = true;

let promesa = new Promise((resolve, reject) => {

    isLogged  ? resolve(Math.random()) : reject("error");
});

function promesa2(numero){

    return new Promise((resolve, reject) => {
        if ( typeof numero === "number" && numero >= 0.5) {
            resolve({name: "John", age: 24});
        } else {
            reject(`el numero ${numero} es menor a 0.5`);
        }
        
    });
};

promesa
.then ((numero) => promesa2(numero))
.then ((objeto)=> console.log(objeto))
.catch ((error)=> console.log(error))


