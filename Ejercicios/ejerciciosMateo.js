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
