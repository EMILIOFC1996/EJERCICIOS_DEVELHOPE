// A partir del ejercicio anterior, queremos agregar a nuestra función repeatHello, clearInterval después de 5 segundos, ¿podrías hacer eso?

// La función de devolución de llamada debe ser una función de flecha, ¿puedes explicar también por qué?

function repeatHelloque (callback) {
    let time= setInterval(callback,1000);
    setTimeout(()=>clearInterval(time),5000);

}

repeatHelloque(()=>console.log("hello"));