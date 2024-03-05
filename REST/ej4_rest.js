// Perform a code refactoring by using the Spread Operator. The output of the console.log must be the same.

// function sum(...rest) {
//     return rest.reduce((a, b) => a + b);
// } ==>>Otra forma de reducir la función
function sum(num1, num2, num3) {
    return num1 + num2 + num3;
  }
const numbers = [1, 2, 3];
console.log(sum(...numbers));