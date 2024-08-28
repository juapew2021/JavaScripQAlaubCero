// Video 42. .push()

// Con el metodo .push() podemos agregar un elemento a nuestro arreglo 

/*
var finDeSemana = [ "jueves", "viernes" , "sabado"];
finDeSemana.push("domingo");
console.log(finDeSemana);
*/

// Ejemplo #1.

/*
var miCarrera = ["La carrera que me gusta ", "y estoy estoy estudiando es"];
miCarrera.push("programacion y automatizacion");
console.log(miCarrera);
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

// EJemplo #1.

/*
var miCarrera = ["La carrera que me gusta ", "y estoy estoy estudiando es ", "programacion y automatizacion"];
miCarrera.pop();
console.log(miCarrera);
*/

// Video 44. .shift()

// Con el metodo .shift() podremos remover el primer elemento de un arreglo 

/*
var finDeSemana = [ "jueves", "viernes" , "sabado" , "domingo"];
var diaFestivo;
finDeSemana.shift();
console.log(finDeSemana);
*/

// Emjemplo #1

/*
var miCarrera = ["La carrera que me gusta ", "y estoy estoy estudiando es ", "programacion y automatizacion"];
miCarrera.shift();
console.log(miCarrera);
*/

// Video 45. .unshift()

// Con el metodo .unshift() podemos agregar un elemento al inicio de un arreglo 

/*
var finDeSemana = [ "viernes" , "sabado" , "domingo"];
finDeSemana.unshift(" jueves ");
console.log(finDeSemana);
*/
 
// Ejemplo #1.

/*
var miCarrera = ["y estoy estoy estudiando es ", "programacion y automatizacion"];
miCarrera.unshift("La carrera que me gusta ");
console.log(miCarrera);
*/

// Video 46. Lista de commpras.

/*
var miListaDeCompras = [[5, "pechugas"] , [3 , "platanos"] , [5 , "mazorcas"] , [6, "sandias"]];
var compraDelDia = " el dia de hoy me apetece comprar " + miListaDeCompras[0][0] + " raciones de " + miListaDeCompras[0][1];
console.log(compraDelDia);
*/

// Ejemplo #1.

/*
var miListaDeUtiles = [['lapices y boligrafos', 'borradores y zacapuntas'], [5, 12, 20], ['rotuladores', 'resaltadores'], [6, 15, 2]];
var compraDeUtiles = ("Para empezar la semana de clases requiero " + miListaDeUtiles[0][0] + " la cantidad necesaria serian " + miListaDeUtiles[3][2] + " y para los datos importantes deberia usar " + miListaDeUtiles[2][1] + " vendrian bien unos cuantos, quiza unos " + miListaDeUtiles[3][0]+ " estarian bien");
console.log(compraDeUtiles);
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

// Ejemplo #1.

/*
function aprenderFunciones() {
    console.log("Aprenderemos a usar funciones paso a paso");
}
aprenderFunciones();
*/

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

// Ejemplo #1.

/*
function tomarMedidas(edad, altura, peso) {
    var conseguirMedidas = peso, altura, edad;
    console.log('sus medidas de peso son ' + peso + ' la de altura es ' + altura + ' y su edad es ' + edad);  
}
tomarMedidas(22, '177cm', '70kg');

var e = 40;
var a = '180cm';
var p = '90';

tomarMedidas(40, '180cm', '90kg');

function probemosMusica(verso1, verso2, verso3, verso4) {
    console.log(verso1 + verso2 + verso3 + verso4);
}
probemosMusica('la puesta de sol , ', 'tu vos y voz , ', 'el maravilloso paisaje ', ' y la mejor cancion');
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


//Ejemplo #1.

/*
var variables = "La variable global toma ejecucion desde fuera de la funcion";

function funcionDeLasVariables() {
    var variables = "La variable local se ejecuta de manera prioritaria ya que se crea dentro de la funcion";
    console.log(variables);
}
funcionDeLasVariables();
console.log(variables);
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

// Ejemplo #1.

/*
function armas(asalto, francotirador , subfusil) {
    return asalto + " , " + francotirador + " , " + subfusil;
}
(armas('M13', 'DLQ33', 'MP5'));
console.log(armas('M13', 'DLQ33', 'MP5'));
*/

// Video 54: Asignar un valor retornado.

/*
 function sumar(a, b) {
    return a + b;
 }

sumar(12, 8);
var resultado = sumar(12, 8);
console.log(resultado);
*/

/*
function laMetaDeNuestraCadena(metaConLaProgramacion) {
   return " Deseo ser un gran programador de " + metaConLaProgramacion;
}
laMetaDeNuestraCadena("Videojuegos y musica");
  var laMeta = laMetaDeNuestraCadena("Videojuegos y musica");
  console.log(laMeta);
*/

// Ejemplo #1.

/*
function asignarValorRetornado(valoresRetornados) {
    return 'podemos asingar un valor retornado ' + valoresRetornados;
}
asignarValorRetornado(' con una variable');
var valorAsignado = asignarValorRetornado(' con una variable');
console.log(valorAsignado);
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

// Ejemplo #1.

/*
function siguienteEnLaLista(arreglo, elemento) {
    arreglo.push(elemento);
    return arreglo.shift();
}

var miArreglo = ["Juan", "David" , "Mateo", "Carlos"];

console.log("Antes" + JSON.stringify(miArreglo));

console.log(siguienteEnLaLista(miArreglo, "Lucas"));

console.log("Despues" + JSON.stringify(miArreglo));
*/

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

// Ejemplos #1.

//console.log( 12 == 12); // true
//console.log(12 == "12"); // true


//console.log(12 === 12); // true
//console.log(12 === "12"); // false


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

//Ejemplo #1.

/*
var a = 21;
var b = 21;

console.log(a == b); // true
console.log(a === b); // true

b = 2;

console.log(a == b); // false
console.log(a === b); // false

b = "21";

console.log(a == b);// true
console.log(a === b);// false

a = "DeveloperFront";
b = "DeveloperFront";
*/


// Video 60. Operador de desigualdad.

/* Este operador compara dos valores y retorna "true" si tienen un valor distinto. 
si su valor es igual el resulttado sera "false". */

//console.log( 12 != 21); // true
//console.log( 12 != 12); // false

//console.log( "JavaScript" != "JavaScript"); // false
//console.log( "hola" != "JavaScript"); // true

//console.log([1, 2, 3] != [1, 2, 3]);

// Ejemplo #1.

/*
console.log(50 != 5); // true
console.log(50 != 50); // false

console.log("Develop" != "Develop"); // false
console.log("Developer" != "Develop"); // true

console.log([6, 7, 8] != [6, 7, 8]); // true
*/

// Video 61. Operador de desigualdad esctricta.

// Este compara la desigualdad de manera esstricta  
 
//console.log(2 != "2"); // false
//console.log(2 !== "2"); // true

/* (!==) Cuando no representan el mismo tipo de dato pero si el mismo valor, los convierte en un dato en comun.
(!=) El operador detecta que el dato tiene el mismo valor, pero si no son el mismo tipo de dato, dara falso. */


// Ejemplo #1.

/*
console.log(100 != "100"); // false
console.log(100 !== "100"); // true
*/

// Videos (62, 63, 64, 65). Operadores "mayor que" (>) "menor que" (<) "mayor o igual que" (>=) "menor o igual que" (<=)
//Ejericios mayor que (>)

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

// Ejemplo #1.

/*
console.log(21 > 12); // true
console.log(12 > 21); // false

console.log("A"> "AB"); // false
console.log("LNM" > "LMN"); // true
console.log("Zapato" > "Yate"); // true
*/

// Ejemplos mayor o igual que (>=)

//console.log(5 > 5); // false
//console.log(5 >= 5); // true

// Ejemplo #1.

//console.log(21 > 21); // false
//console.log(21 >= 21)// true


// Ejemplos menor que (<)

//console.log(8 < 9); // true
//console.log(12 < 10); // false

//console.log("A" < "B"); // false
//console.log("ABC" < "ACB"); // false

//var a = 21;
//var b = 12;

//console.log(a < b); // false
//console.log(b < a); // true

// Ejemplo #1.

/*
console.log(21 < 12); // false
console.log(12 < 21); // true

console.log("A" < "AB"); // true
console.log("LNM" < "LMN"); // false
console.log("Zapato" < "Yate"); // false
*/

// Ejemplos menor o igual que (<=)

//console.log(8 < 8); //false
//console.log(8  <= 8); // true

// Ejemplo #1.

//console.log(200 < 200); //false
//console.log(200 <= 200); // true

