function fizzBuzz(valor) {
    const resultado=  valor%3===0 && valor%5===0 ? `fizzbuzz`: valor%5===0 ? `buzz`: valor%3===0  ? `fizz`: `el valor ${valor} no es divisible por ninguno`;
    return resultado;
   
  }
  
  console.log(fizzBuzz(12))
  console.log(fizzBuzz(25))
  console.log(fizzBuzz(15))