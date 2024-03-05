// Crea el fromJsonmétodo que toma un json como parámetro y devuelve un objeto de tipo Person.

class Person {
    constructor(id, firstName, lastName, age) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;

    }
    static fromJson(elememt) {
        return JSON.parse(elememt);
    }
    toJson() {
        return JSON.stringify(this);
    }
}


const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
// const persona1=  new Person(2,"emilio","fernandez",27);
// console.log(persona1.toJson());
const developer = Person.fromJson(json);
console.log(developer);