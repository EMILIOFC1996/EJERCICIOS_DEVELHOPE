// Defina un método estático llamado fromObject dentro de la clase Persona que toma un objeto literal como parámetro y crea una instancia de un objeto Persona.

class Person {
constructor(firstName, lastName) {
this.firstName = firstName;
this.lastName = lastName;
}
static fromObject(obj){
    let nuevo=new Person(obj.firstName,obj.lastName)
    return nuevo;
}
}
const obj = {
firstName: 'Mario',
lastName: 'Rossi'
};

const person = Person.fromObject(obj);
console.log(person.firstName + " " + person.lastName);
