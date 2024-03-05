// Escribe un promise. Si la variable llamada numberes mayor que 10, devuelve una resolución; de lo contrario, devuelve un rechazo. Luego gestiona la promesa con theny catchen caso de algún rechazo.

const number =15;
let promise= new Promise((resolve,reject)=>{
    number>10 ? resolve("el numero es mayor"):reject("el numero es menor");

});

promise
.then((number)=>console.log(number))
.catch ((e)=>console.log(e))