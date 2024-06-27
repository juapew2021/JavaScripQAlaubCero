/*
   Tabla de verdad del operador AND // AND --> &&
   Para: J $$ P
   | J | P | J && P |
   ---------------------------------
   |  T | T  |   T     |
   |  T | F  |   F     |
   | F  | T  |   F     |
   |  F | F  |   F    |
   La expresión solo es verdadera cuando ambas
   son verdaderas.

*/

var a = 3 ;
var b = 8 ;
var c = 2 ;
var d = 4 ;

//console.log((a < c)&&(c >= d));

/*
   Tabla de verdad del operador OR // OR --> ||
   Para: J $$ P
   | J | P | J && P |
   ---------------------------------
   |  T | T  |   T     |
   |  T | F  |   T     |
   | F  | T  |   T     |
   |  F | F  |   F    |
   La expresión solo es verdadera cuando ambas
   son verdaderas.

*/
var e = 3 ;
var f = 8 ;
var g = 2 ;
var h = 4 ;

//console.log((e < f)||(g >= e));
/*
   Tabla de verdad del operador NOT // NOT --> !J o !P
   Para: !J
   | J | !J|
   ---------------------------------
   |  T | F  |
   |  F | T  |
 
*/
//console.log(!true);
//console.log(!false);

var k = 7 ; 

console.log(!(k == 6));