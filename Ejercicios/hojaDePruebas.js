

// Parse significa "convertir" esto lo que hace es convertir una cadena de caracteres a un entero

//console.log(parseInt("5"));
//console.log(parseInt("-47"));

// si queremos convertir un valor que no sea un numero nos saldra la respuesta NaN (Not a number).

// Video 107. Funcion parseInt() con una base.

// podemos convertir una cadena de caracteres numericos decimales a numeros enteros

/*
console.log(parseInt("110111", 2));
console.log(parseInt(110111, 2));

console.log(parseInt("3E0A", 16));
*/

// Video 108.  Operador condicional ternario.

// No permite compactar lo que seria un condicional de una sola linea

/*
function retornarMinimo(x, y) {
  if ( x < y){
    return x;
  } else {
    return y;
  }
}
*/
/*
function retornarMinimo(x, y) {
  return x < y ? x : y;
}
console.log(retornarMinimo(4, 7));
*/
/*
function retornarMaximo(m, f) {
  return m > f ? m : f;
}
console.log(retornarMaximo(32, 27));
*/

// Video 109. Multiples operadores condicionales.

// Haremos multiples operadores condicionales ternarios uno dentro de otro como si fuesen un objeto anidado.

/*
function compararNumeros(a, b) {
  if (a = b){
    return "a y b son iguales";
  } else if (a > b){
    return "a es mayor que b";
  } else {
    return "b es mayor que a"
  }
}
*/
/*
function compararNumeros(a, b) {
  return a === b ? "a y b son iguales" 
  : a > b ? "a es mayor que b"
  : "b es mayor que a"
}
console.log(compararNumeros(11, 27));
console.log(compararNumeros(27, 11 ));
console.log(compararNumeros(15, 15 ));
*/


// Ejemplo #1. 

  