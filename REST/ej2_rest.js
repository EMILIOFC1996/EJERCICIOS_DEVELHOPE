// La función de suma tiene una gran cantidad de parámetros. ¿Cómo podemos mejorar el código para que acepte cualquier cantidad de números para sumar como argumento?

function sum(...rest) {
    return rest.reduce((ac,b)=> ac+b);
}

console.log(sum(1, 2, 3, 4, 5));