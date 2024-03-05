// En este ejercicio necesitamos filtrar las propiedades del objeto persona para convertir solo los valores de identificación y edad a JSON.

const person = {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25,
};

// const json = JSON.stringify(person,['id','age']);
const json = JSON.stringify(person, (clave, valor) => {
    return clave === 'age' ? undefined : valor;
});


console.log(json); // Should return: { "id": 1, "age": 25 }