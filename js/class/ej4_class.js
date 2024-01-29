// Defina una clase llamada Personque tome tres parámetros en el constructor ( firstName, lastNamey age). Cree los métodos getters y setters para cada propiedad y un método getter llamado fullNameque devuelva el nombre completo.

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    //  firstName
    get firstName() {
        return this.firstName;
    }
    set firstName(value) {
        this.firstName = value;
    }

    //  lastName
    get lastName() {
        return this.lastName;
    }
    set lastName(value) {
        this.lastName = value;
    }

    // age
    get age() {
        return this._age;
    }
    set age(value) {
        this.age = value;
    }

    get fullName() {
        return this.firstName + " " + this.lastName;

    }

}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);