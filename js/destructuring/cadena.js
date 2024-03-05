// Realice una refactorización de código utilizando los literales de plantilla.

class Person { constructor(firstName, lastName) { this.firstName = firstName; this.lastName = lastName; } }

const developer = new Person("Mario", "Rossi"); 

console.log(`${developer.firstName} ${ developer.lastName}`); 
// console.log(developer.firstName + " " + developer.lastName); 
