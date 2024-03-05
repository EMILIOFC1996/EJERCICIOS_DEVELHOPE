/* 
fibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci
tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma 
y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado 
de la suma del último elemento y el anterior.

Ejemplo: fibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 
*/
function fibonacci(n) {
    console.log(n);
    if (n == 0) {
        return 0;
    } if (n == 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2)
    }

}
let resultado = fibonacci(7);
console.log(resultado);