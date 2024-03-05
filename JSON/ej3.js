// En estos ejercicios algo sale mal. Aunque hayamos creado una copia de persona1, modificar la propiedad ciudad de persona2 también cambia el valor de persona1. Esto sucede porque hemos creado una copia superficial. ¿Cómo podemos arreglar el código para poder modificar los valores de persona2 sin cambiar los valores de persona1?

const person1 = {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25,
    address: {
        state: 'Italy',
        city: 'Rome',
        street: 'Via Romano, 12'
    }
};

const person2 = JSON.parse(JSON.stringify(person1));
person2.address.city = 'Milan';
//const person3 = {...person1};
// person3.address = {...person1.address};
// person3.address.city='sevilla;' ==> Prueba sin metodo JSON

console.log(person1);
console.log(person2);
