// Usando async y await, implemente el código necesario para recuperar la lista Todos presente en la siguiente URL a través de una solicitud http: link . https://jsonplaceholder.typicode.com/todos

async function getTodosPresentes(){
    try{
    let respuesta= await fetch(`https://jsonplaceholder.typicode.com/todos` );
    
    let list=await respuesta.json();
    let completed= list.filter(presente=>presente.completed === true)//se ha supuesto que "completed=true" es que está presente.
    console.log(completed);
    }catch (e){
        console.log(e)
    }

}

getTodosPresentes();