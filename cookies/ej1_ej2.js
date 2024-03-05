const user = {
    id: 1,
    name: "John",
    age: 25,
  };

function guardarUsuario(usuario){
const datosJSON= JSON.stringify(usuario);
 localStorage.setItem(`usuario`,datosJSON);
console.log(datosJSON);
}



function recuperarUsuario() {
    const datosJSON = localStorage.getItem('usuario');
    if (datosJSON) {
         const usuario = JSON.parse(datosJSON);
        console.log('Usuario recuperado de localStorage:');
        console.log(usuario);
    } else {
        console.log('No se encontraron datos de usuario en localStorage.');
    }
}

guardarUsuario(user); // Guardamos el usuario en localStorage
recuperarUsuario();   // Recuperamos e imprimimos los datos del usuario