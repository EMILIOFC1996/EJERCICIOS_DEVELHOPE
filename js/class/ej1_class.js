class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const developer = new Person('Mario', 'Rossi');
console.log(developer.firstName + " " + developer.lastName); // Salida: Mario Rossi
console.log(developer); 

