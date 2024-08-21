// Se haran algunos ejercicios de los videos mas representativos sobre los temas vistos.

// Video 27. concatenar cadenas de caratecteres
/*
var miProfesion = "Progamador de software" + " y " + "Cocinero en cocina fusion"
console.log(miProfesion);
var miProfesion = "Progamador de software" + " y " + " " + "Cocinero en cocina fusion"
console.log(miProfesion);
*/

// Video 28. Construir cadena con variables

/*
var animal = "cuervo"
var mensaje = " el " + animal + " es mi animal favorito"
console.log(mensaje);
*/

// Video 29. Agregar variables a cadena de caracteres

/*
var subscripcion = " Inscribete y estudia con nosotros"
var mensajeFinal = " en las instalaciones de QAlaub"
subscripcion += mensajeFinal;
console.log(subscripcion);
*/

// Video 30. Longitud de una cadena de caracteres

/* Con la propiedad (.length) que nos permitira medir la cantidad de caracteres que tenemos dentro de una cadena.
toma en cuenta los numeros, letras, signos, simbolos y espacios. ahora veremos un ejemplo */

/*
let abecedario;
abecedario = "ABCD"
console.log(abecedario.length);
*/

// Ahora agregamos un signo y espacio

/*
let abecedarios;
abecedarios = " A, B, C, D, 21, *";
console.log(abecedarios.length);
*/

// Video 31. Notacion de corchetes. 1. caracter
/* 
var colorDeOjos = "VERDES"


cadena   V E R D E S
indice   0 1 2 3 4 5


console.log(colorDeOjos[2]);
*/

// Video 32. Inmutabilidad de cadena de caracteres

/*
 var cambioInmutable = "c puede cambiar 1 caracter individual d la cadena de karacteres asignada?";
 console.log(cambioInmutable);
 cambioInmutable[0] = "se"; // Error
 console.log(cambioInmutable);
 cambioInmutable = " Podemos cambiar la cadena completamente para arreglar cualquier error"
 console.log(cambioInmutable);
*/

// Video 34. Notacion de corchetes. Ultimo caracter
 // Cuando deseamos tomar el ultimo caracter de nuestra cadena podemos medirlo con la propiedad (.length )- 1 

 /*
var colorDeOjos;
colorDeOjos = "VERDES"
console.log(colorDeOjos[colorDeOjos.length - 1]);
 */

// Video 35. Notacion de corchetes de derecha a izquierda

 /* Cuando deseamos tomar el penultimo caracter de nuestra cadena podemos medirlo con la propiedad (.length )- 2
 colorDeOjos.length es de 6. El penultimo caracter es 4 */
 /*
 var colorDeOjos;
 colorDeOjos = "VERDES"
 console.log(colorDeOjos[colorDeOjos.length - 2]);}
*/

 // De esta manera podemos tomar cualquier caracter de derecha a izquierda
 /*
 var n = 3;
 console.log(colorDeOjos[colorDeOjos.length - n]);
*/

 // Video 36. Concatenar cadenas de texto

 /*
var miSustantivo = "vaca";
var miAdjetivo = "flaca" ;
var miVerbo = "come" ;
var miAdverbio = "despacio" ;

// La vaca flaca come muy despacio

var titulo = "La " + miSustantivo + " " + miAdjetivo + " " + miVerbo + " muy " + miAdverbio + "" ;

console.log(titulo);
*/

// Video 37. Arreglos (Arrays)
/*
var miArreglo =  [30 , " personas"];
console.log("Al concierto de Vicente Fernandez entraron : "  + miArreglo[0] +  miArreglo[1]);

var especies = ["humanos" ,"animales" , "peces"];
console.log(especies);
var cualidadFisica = [ "Color de piel" , " Cuadrupedos" , " respirar bajo agua"];
console.log(cualidadFisica);
*/

// Video 38. Arreglos anidados

/*
var especies = [["humanos", "Color de piel"] , ["animales" , "cuadrupedos"]];
console.log(especies);

var fechaDeNacimiento = [[26, "nov", 2001], [15, "abril", 1995]];
console.log(fechaDeNacimiento);
*/

// Video 39. Acceder a los elementos de un arreglo

 /*
var misNumeros = [ 21, 12, 8];

   Arreglo : [ 21, 12, 8]
   Indice  :   0   1   2

console.log(misNumeros[2]);
var suma = misNumeros[0] + misNumeros[1];
console.log(suma); 
*/

// Video 40. Modificar elementos de un arreglo  

/*
var misNumeros = [12, 21, 8];
misNumeros[0] = 6;
console.log(misNumeros);
misNumeros[2] = " ocho ";
console.log(misNumeros);
misNumeros[1] = ["dame", 5];
console.log(misNumeros);
*/

// Video 41. Acceder a arreglos multidimensionales

/*
var grupoDeLetras = [["A" , "B" , "C"] , ["D" , "E" , "F"], ["G", "H", "I"]];

  Arreglo :        [["A" , "B" , "C"] , ["D" , "E" , "F"], ["G", "H", "I"]];
  Indice  :                 0                   1                 2 
  Indice interno :    0     1     2      0      1     2      0    1    2


console.log(grupoDeLetras[1]);
console.log(grupoDeLetras[0][1]);
*/

// Video 42. .push()

// Con el metodo .push() podemos agregar un elemento a nuestro arreglo 

/*
var finDeSemana = [ "jueves", "viernes" , "sabado"];
finDeSemana.push("domingo");
console.log(finDeSemana);
*/

// Video 43. .pop()

// Con el metodo .pop() podemos remover el ultimo elemento de un arreglo 

/*
var finDeSemana = [ "jueves", "viernes" , "sabado" , "domingo"];
var diaFestivo;

diaFestivo = finDeSemana.pop()
console.log(finDeSemana);
console.log(diaFestivo);
*/

// Video 44. .shift()

// Con el metodo .shift() podremos remover el primer elemento de un arreglo 

/*
var finDeSemana = [ "jueves", "viernes" , "sabado" , "domingo"];
var diaFestivo;
finDeSemana.shift();
console.log(finDeSemana);
*/

// Video 45. .unshift()

// Con el metodo .unshift() podemos agregar un elemento al inicio de un arreglo 

/*
var finDeSemana = [ "viernes" , "sabado" , "domingo"];
finDeSemana.unshift(" jueves ");
console.log(finDeSemana);
*/

// Video 46. Lista de commpras

/*
var miListaDeCompras = [[5, "pechugas"] , [3 , "platanos"] , [5 , "mazorcas"] , [6, "sandias"]];
var compraDelDia = " el dia de hoy me apetece comprar " + miListaDeCompras[0][0] + " raciones de " + miListaDeCompras[0][1];
console.log(compraDelDia);
*/

// Video 47. Funciones

/* Esta herammienta (Function) nos permite re usar informacion de nuestro codigo ya hecho apartir de
la ejecucion de la funcion que hayamos creado. */

/*
function comoFunciona() {
  console.log("¡De esta manera!");
}

comoFunciona();
comoFunciona();
*/

/* vemos que podemos ejecutar o llamar repetidamente nuestra funcion. para que su lectura sea clara 
necesitamos nuestros () igualmente como los metodos. */

// Video 48. Argumentos

/* Vamos a darle un valor de manera sencilla a nuestra funcion apartir de argumentos. 
Estos argumentos son el valor de nuestro parametros de la funcion. */

/*
function multiplicar(a , b) {
 
    var multiplicacion = a * b;
    console.log(" El resultado de " + a + " * " + b +  " es " + multiplicacion);
}
multiplicar(21 , 12);
multiplicar(2 , 9);

Podemos cambiar el valor de nuestros parametros usando variables 
 
var x = 21;
var y = 12;
multiplicar( x , y); 
*/

// Podemos crear una funcion y concatenar varias cadenas de texto y mostrar una cadena final 

/*
function concatenarVariasCadenas(cadena1, cadena2, cadena3){
   console.log(cadena1 + " " + cadena2 + " " + cadena3);
   
}
concatenarVariasCadenas("La practica", "siempre construye", "al maestro");
*/

// Video 49. Ambito global.

/* Contamos con dos tipos de variables: Locales y Globales. 
Globales: Se puede usar y modificar en cualquier lugar de nuestro programa principal. */

/*
var miVariableGlobal = 8;
console.log(miVariableGlobal);
/*

// Si queremos comprobar si esta definida dentro  y fuera de la funcion 

/*
function miFuncion() {
  console.log(miVariableGlobal);
}
miFuncion();
 console.log(miVariableGlobal);
*/
 //Video 50. Ambito local.

 // Las variables locales son las se definen y solo se pueden usar dentro de una funcion exacta. 

 /*
function miNumero(params) {
  var miVariableLocal = 21;
  console.log(miVariableLocal); 
}
*/
/* 
miNumero();
console.log(miVariableLocal);
*/



// Video 51: Variables globales y locales.

// Veremos a continuacion como funcionan estas variables en conjunto dentro de un codigo. 

/*
var myNameIs = "Mateo";

function showMyName(params) {
    var myNameIs = "Abril";
    console.log(myNameIs);
}
showMyName();
console.log(myNameIs);
*/

// Video 52. Retornar un valor.

/* Las funciones tambien pueden retornar y tomar un valor debido a sus propiedades especiales que
permite a la funcion interactuar con el codigo del programa principal. */

/*
function resta(h, z) {
  return  h - z;
}
(resta(21, 8));
console.log(resta(21, 8));
*/

// Video 54: Asignar un valor retornado.

/*
 function sumar(a, b) {
    return a + b;
 }
// Ejemplo 1
sumar(12, 8);
var resultado = sumar(12, 8);
console.log(resultado);
*/

// Ejemplo 2
 
/*
function laMetaDeNuestraCadena(metaConLaProgramacion) {
   return " Deseo ser un gran programador de " + metaConLaProgramacion;
}
laMetaDeNuestraCadena("Videojuegos y musica");
  var laMeta = laMetaDeNuestraCadena("Videojuegos y musica");
  console.log(laMeta);
*/

// Video 55. Permanece en fila.

/* 
function proximoEnLaFila(arreglo, elemento) {
   arreglo.push(elemento);
   return arreglo.shift();
}

var miArreglo = [1, 2, 3, 4, 5];

console.log("Antes: " + JSON.stringify(miArreglo));

console.log(proximoEnLaFila(miArreglo, 6));

console.log("Despues: " + JSON.stringify(miArreglo)); 
*/

// Video 56. Valores boleanos.

/* Estos valores boleanos se refieren a verdadero o falso. Tienen una manera exacta de uso
para poder leerse de manera correcta en el programa. Los encontramos cono " true y false ".*/  

/*
console.log(true);
console.log(false);
*/
//Los boleanos seran utiles cuando trabajemos condicionales, comparacion de valores y operadores logicos. 

// Video 57. Operador de igualdad.

// Nos permitira comparar los valores para saber si son iguales o no lo son y si representan un mismo valor. 

//console.log(21 == 21); // true
//console.log(21 == 12); // false

//console.log("Comparacion" =="Comparacion"); // true
//console.log("Hola" == " hello"); // false

//console.log([2, 4, 6] == [8,10, 12]); //false

// (==) es una expresion de comparacion

//Video 58. Operador de asginacion estricta.

//Este operador nos permite comparar valores con igualdad estricta y la diferencia del uso del operador de igualdad. 

//console.log(8 == 8); // true
//console.log(8 == "8"); // true

 /*Aqui vemos que aunque usemos elementos diferentes, se convierten en un tipo de dato comun
ya que usamos el operador de igualdad.*/

//console.log(8 === 8); // true
//console.log(8 === "8"); // false

/*(===) representa la comparacion de valores con igualdad estricta, es decir, 
no permite que los elementos diferentes se unan como un dato comun.*/

// Video 59. Practica para comparar valores.

// Veremos como podemos usar el operador de igualdad y el operador de igualdad estricta

//var c = 5;
//var d = 5;

//console.log(c == d); // true
//console.log(c === d); // true

//c = 10;
 
//console.log(c == d); // false
//console.log(c === d); // false

//c = "5";

//console.log(c == d); // true
//console.log(c === d); // false

//c = "JavaScript";
//d= "JavaScript";

//console.log(c == d); // true
//console.log(c === d); // true


// Video 60. Operador de desigualdad.

/* Este operador compara dos valores y retorna "true" si tienen un valor distinto. 
si su valor es igual el resulttado sera "false". */

//console.log( 12 != 21); // true
//console.log( 12 != 12); // false

//console.log( "JavaScript" != "JavaScript"); // false
//console.log( "hola" != "JavaScript"); // true

//console.log([1, 2, 3] != [1, 2, 3]);

// Video 61. Operador de desigualdad esctricta.

// Este compara la desigualdad de manera esstricta  
 
//console.log(2 != "2"); // false
//console.log(2 !== "2"); // true

/* (!==) Cuando no representan el mismo tipo de dato pero si el mismo valor, los convierte en un dato en comun.
(!=) El operador detecta que el dato tiene el mismo valor, pero si no son el mismo tipo de dato, dara falso. */


// Videos (62, 63, 64, 65). Operadores "mayor que" (>) "menor que" (<) "mayor o igual que" (>=) "menor o igual que" (<=)
//Ejemplos mayor que (>)

//console.log(6 > 5); // true
//console.log(5 > 6); // false

//console.log("B" > "A"); // true
//console.log("ACB" > "ABC"); // true

//console.log("AB" > "A"); // true 

//console.log("mundo" > "hola"); // true 

//var a = 12;
//var b = 21;

//console.log(a > b); // false
//console.log (b > a); // true

// Ejemplos mayor o igual que (>=)

//console.log(5 > 5); // false
//console.log(5 >= 5); // true

// Ejemplos menor que (<)

//console.log(8 < 9); // true
//console.log(12 < 10); // false

//console.log("A" < "B"); // false
//console.log("ABC" < "ACB"); // false

//var a = 21;
//var b = 12;

//console.log(a < b); // false
//console.log(b < a); // true

// Ejemplos menor o igual que (<=)

//console.log(8 < 8); //false
//console.log(8  <= 8); // true

// Video 66. Operador logico AND (&&).

/*
and = [
  &&  true && true = true
  &&  true && false = false
  &&  false && false = false
];

*/

//var num = 21;

//console.log((num > 20) && (num > 19)); // true
//console.log((num > 10) && (num > 22 )); // false
//console.log((num < 10) && (num > 22 )); // false

// Video 67. Operador logico OR (||).

/*
or = [
  false || true = true
  true  || false = true
  true  || true = true
  false || false = false
];
*/

//var x = 8;

//console.log((x > 9) || (x > 7)); // true
//console.log((x >= 5) || (x < 7)); // true
//console.log((x == 8) || (x > 2)); // true
//console.log((x <= 7) || (x == 5)); // false

// Video 68. Operaador logico NOT (!)

/*
not = [
   !false = true
   !true = false
];  
*/
 
// (!m > 8) -- true --- false

//var m = 10;

//console.log(!(m > 8)); // false
//console.log(!(m < 8)); // true


// Video 69. Sentencias condicionales.

/* Nos permiten deicidir si un codigo se ejecuta depende de una condicion.
Esto nos da mas control de que es lo que se va a reproducir en el programa.*/

/*
var z = 2;
if ( 2 == 2) {
  console.log('2 es igual que 2');
};
*/

// Video 70. Clausula "else".

/*
var z = 2;
if ( 2  == 2) {
  console.log('2 es igual que 2')
} else { 
   console.log(' 2 no es igual que 2'); 
}
*/

/* Una clausula es una parte de una estructura que se puede usar en el codigo. 
(else) funciona como un respaldo ante la clausula principal que es (if).
El codigo que se llevara a cabo la ejecucion dependera de cual sea la condicion.*/

