 function sumUntil(maxValue) {
  let result=maxValue;
   while(maxValue !=0){
  maxValue--;
  result+= maxValue
  }
  return result;
 }
 //Con bucle for
// function sumUntil(maxValue) {
// let suma = 0;
// for ( i = maxValue; i>=0; i--) {
//   suma += i;
// }
// return suma;
//  }

console.log(sumUntil(5));