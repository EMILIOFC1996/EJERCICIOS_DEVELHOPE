// La desestructuración devuelve indefinido para las propiedades: nombre, apellido y antiguo. Intente arreglar el código sin cambiar ninguna de las propiedades del objeto en la constante {id, nombre, apellido, antiguo}.

const person = {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
};

const { id, firstName:name, lastName:surname, age:old } = person;
console.log(id, name, surname, old);