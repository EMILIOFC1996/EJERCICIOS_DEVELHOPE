const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".
person2.firstName="Simon"

console.log(person1);
console.log(person2);
//Se cambia en los dos objetos porque tanto person1 como person2 esta´n apuntando al mismo objeto .
