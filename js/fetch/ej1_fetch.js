// Usando async y await, implemente el código necesario para recuperar la lista Todos presente en la siguiente URL a través de una solicitud http: link .

// https://jsonplaceholder.typicode.com/todos

async function nombreUno(){
    let pedido= await fetch("https://jsonplaceholder.typicode.com/todos");
    const datos =  await pedido.json();
    console.log(datos);
}

nombreUno();
