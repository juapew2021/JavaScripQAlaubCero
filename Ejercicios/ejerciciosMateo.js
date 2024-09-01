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


// Video 66. Operador logico AND (&&).

/*
and = [
  &&  false && true = false
  &&  true && true = true
  &&  true && false = false
  &&  false && false = false
];

*/

//var num = 21;

//console.log((num > 20) && (num > 19)); // true
//console.log((num > 10) && (num > 22 )); // false
//console.log((num < 10) && (num > 22 )); // false

// Ejemplo #1.

/*
var f = 2;

console.log((f > 10) && (f > 3)); // false
console.log((f < 10) && (f < 3)); // true
console.log((f > 10) && (f < 3)); // false
*/

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

// Ejemplo #1.

/*
var f = 50;

console.log(f > 49) || (f >= 40); // true
console.log(f >= 49) || (f > 40); // true
console.log(f < 49) || (f < 40); // false
*/

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

// Ejemplo #1.
/*
var f = 21;

console.log(!(f > 22)); // true
console.log(!(f < 22)); // false
*/

// Video 69. Sentencias condicionales.

/* Nos permiten deicidir si un codigo se ejecuta depende de una condicion.
Esto nos da mas control de que es lo que se va a reproducir en el programa.*/

/*
var z = 2;
if ( 2 == 2) {
  console.log('2 es igual que 2');
};
*/

// Ejemplo #1.
/*
var h = 20;

if (20 ==  20); {

    console.log('20 es ogual que 20');
}
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

// Ejemplo #1.

/*
var h = 20;


if (20 == 21) {
 console.log('20 es ogual que 20');
} else {
    console.log('20 no es igual que 21');
}
*/


// Video 71. Clausula "else if".

// Con esto se pueden verificar y manejar condiciones alternativas

/*
function clasificarValor(valor) {
  if (valor % 2 == 0){
    console.log("divisible entre 2");
  } else if (valor % 3 == 0){
   console.log("divisible entre 3");
  } else { 
    console.log("no es divisible entre las opciones")
  }

}
clasificarValor(2);
*/

// Ejemplo #1.

/*
function clasificarValor(valor) {
    if (valor % 8 == 0 ){
        console.log('se puede dividir entre 8');
    } else if (valor % 6 == 0) {
        console.log('se puede dividir entre 6');
    } else {
        console.log('no es dividible entre las opciones');
    }
}
clasificarValor(36);
*/

// Video 72. Condicionales, orden logico.

/*
function clasificarValor(valor) {
if (valor < 5){
  console.log("menor que 5");
} else if (valor < 10){
  console.log("menor que 10");
} else {
  console.log("mayor o igual que 10");
}  
}
clasificarValor(12);
*/


// Ejemplo #1.

/*
function clasificarValor(valor) {
    if (valor < 8){
        console.log('menor que 8');
    } else if (valor < 6){
        console.log('menor que 6');
    } else {
        console.log('mayor o igual que 8');
    }
}
clasificarValor(12);
*/

// Video 73. Encadenar sentencias "else if".

// Se identificaran varias sentencias de la mano de los condicionales

/*
function interpretarIMC(indicideDeMasaCorporal) {
  if ( indicideDeMasaCorporal < 5){   
      console.log("bajo peso");
  } else if(indicideDeMasaCorporal = 24.9);{
      console.log("normal")
  } if(indicideDeMasaCorporal<= 29.9){
      console.log("sobrepeso");
  } else {
      console.log("obeso");
  }
}
*/

// Ejemplo #1.

/*
function identificarEdad(edad) {
  if (edad < 18){
    console.log("menoria de edad");
  } else if (edad >= 18){
    console.log("mayoria de edad");
  } if (edad > 60){
    console.log("es usted de la tercera edad");
  } else {
    console.log("es mayor de edad")
  }
}
identificarEdad(20);
*/

// Video 74. Codigo golf.

 /*
 function puuntajeDeGolf(par, golpes) {
    if (golpes = 1){
        return "Hole-in-one!";
  } else if (golpes <= par -2 ){
    return "Eagle";
  } else if (golpes == par - 1){
    return "Birdie";
  } else if (valor == par){
    return "Par";
  } else if (golpes == par +1){
    return " Bogey";
  } else if(golpes == par + 2){
    return "Double bogey";
  } else if (valor >= par + 3){
    return "Go home";
  }

 }
 console.log(puuntajeDeGolf());
*/

// Video 75. Sentencia Switch

 /*
  function clasificarValor(valor){
    var respuesta;
    switch (valor){
    case 1:
        respuesta = "Alpha"
        break;
    case 2: 
        respuesta = "Omega"
        break;
    case 3:
        respuesta = "Gamma"
        break;
    case 4:
        respuesta = "Delta"
        break;
    }
    return respuesta;
  }

  console.log(clasificarValor(4));
*/

/*
  function clasificarEstacion(estacion) {
    var respuesta;
    switch(estacion){

      case 1:
        respuesta = "primavera";
        break;
      case 2: 
        respuesta = "verano";
        break;
      case 3:
        respuesta = "otoño";
        break;
      case 4:
        respuesta = "invierno";  
    }
      return respuesta;
  }
console.log(clasificarEstacion(3));
*/


 // Video 76. Sentencia Switch. orden logico

 // Nos permite agregarle una opcion predeterminada a dicha sentencia. 

 /*
 switch (mes) {
  case 1:
      console.log("enero");
      break;
  case 2: 
      console.log( "febrero"); 
      break;
  case 3: 
      console.log( "marzo");
      break;
  case 4:
      console.log("abril");
      break;
  case 5: 
      console.log( "mayo"); 
      break;
  case 6: 
      console.log( "junio");
      break;

  default: 
  console.log( "ingrese un mes valido");
} 
*/

// Ejemplo #1.

/*
var materia = 4;
switch (materia) {
  case 1:
      console.log("matematicas");
      break;
  case 2: 
      console.log( "lengua"); 
      break;
  case 3: 
      console.log( "fisica");
      break;
  case 4:
      console.log("quimica");
      break;
  case 5: 
      console.log( "artes"); 
      break;
  case 6: 
      console.log( "danza");
      break;

  default: 
  console.log( "ingrese una materia valida");
} 
*/


 // Video 77. Sentencia switch. Multiples casos.

 /*
 function clasificarVolumen(valor){
     var valor;
     switch (valor){
      case 1: 
        volumen = "Bajo"
        break;
        case 2:
        case 3:
        volumen = "Intermedio";
        break;
        case 4:
        case 5:
        case 6:
        volumen = "Alto";
        break;

     }
     return volumen;
 }

 console.log(clasificarVolumen(6));
*/

// Ejemplo #1.

/*
function clasificarDificultad(valor) {
  var valor;
  switch(valor){
    case 1: 
        dificultad = "Baja"
        break;
        case 2:
        case 3:
        dificultad = "Intermedia";
        break;
        case 4:
        case 5:
        case 6:
        dificultad = "Alta";
        break;
        case 7:
        case 8:
        case 9:
       dificultad = "Experta";
       break;
  }
   return dificultad;
}console.log(clasificarDificultad(7));
*/

 /*
 function seleccionarIdioma(valor) {
   var idioma;
   switch(valor){
      case 1:
        idioma = "Español";  
        break;
      case 2:
        idioma == "Frances";
        break;
    case 3:
      idioma = "Italiano";
      break;
    
    default:
      idioma = "Ingles";
      break;  
 }
return idioma;
}
*/

// Ejemplo #1.

/*
function seleccionarPais(valor) {
  var pais;
  if (valor == 1){
    pais = "Colombia";
  } else if (valor == 2){
    pais = "Japon";
  } else if (valor == 3){
    pais = "Egypto";
  } else {
    pais = "Italia";
  }
  return pais;
}
console.log(seleccionarPais(1));


function seleccionarPais(valor) {
  var pais;
  switch (valor) {
    case 1:
      pais = "Colombia";
      break;
    case 2: 
      pais = "Japon";
      break;
    case 3:
      pais = "Egypto";
      break;
    default:
      pais = "Italia";
      break;
  }
  return pais;
}
*/

// Video 79. Retornar valores boleanos
 // Retornar valores boleanos de manerza conciza (true or false).

/*
 function esMenorQue(a, b) {
      if(a < b);
      return true;
 } else {
   return false;
 }


function esMenorQue(a, b) { 
    return a < b;
  
}
console.log(esMenorQue(3, 10));
*/

// Ejemplo #1.

/*
function esMayorQue(y, z) {
  if ( z < y){
    return true;
  } else {
    return false;
  }  
}
console.log(esMayorQue(21, 12));
*/

// Video 80. Patron de retorno anticipado.

 /* Cuando retornamos el valor de una funcion en su momento se define completamente, cualquier linea despues de
 (return) no se ejecuta y la funcion se detendra inmeditamente*/

 /*
 function miFuncion() {
    console.log("Hola");
    return "Mundo";
    console.log("Adios");
 }
miFuncion();
*/

// Ejemplo #1.

/*
function myFunction() {
  console.log("Hello");
  return "world";
  console.log("Godbye");
}

myFunction();
*/

// Video 81. Conteo de cartas.
 
 /*
 var conteo = 0;

 function contarCartas(carta) {
    var decision;
}

switch (carta) {
    case 2:
    case 3:    
    case 4:
    case 5:
    case 6:
    conteo++;
    break;
case 10:
case "J":
case "Q":
case "K":
case "A":
    conteo--;
    break;
}

if (conteo > 0) {
   decision = "Apostar";
 } else {
   decision = "Esperar";

  return + " " + decision;
 }
 
console.log(contarCartas(2));
console.log(contarCartas(3));
console.log(contarCartas(7));
console.log(contarCartas(K));
console.log(contarCartas(A));
*/

// Ejemplo #1.

/*
var estrellas;

function equiposDeFutbol(equipo) {
  var elMejor;

  switch(equipo) {
    case "Manchester United":
    case "Atletico de Madrid":
    case "Inter de Milan": 
    case "Borussia Dortmund":
    case "Sporting de Lisboa":
      equipo++;
      break;
    case "Real Madrid":
    case "Manchester City":
    case "Paris Saint Germain":
    case "Bayern Munich":
    case "Juventus":
      equipo--;
      break;
  }
  
}
*/


 //Video 82. Crear objetos.

// Un Objeto esta compuesto de propiedades que son su valor.

/*
 var miPerro = {
    "Nombre": "Yan",
    "Edad": 5,
    "Peso": "6 kg",
    "Raza": "Lobo"
 };
 */

 // Ejemplo 1.

 /*
 var cuerpoHumano = {
  "cabeza": "ojos",
  "tronco": "pectorales",
  "piernas": "Tobillos"
 };

 console.log(cuerpoHumano);
*/

// Video 83. Acceder a  propiedades.

// Ejemplo #1.

/*
var cuerpoHumano = {
  "cabeza": "ojos",
  "tronco": "pectorales",
  "piernas": "Tobillos"
 };

 console.log(cuerpoHumano.cabeza);
*/

// Video 84. Acceder a propiedades, notacion de corchetes.

// Ejemplo #1.

/*
var cuerpoHumano = {
  "cabeza": "labios",
  "tronco": "claviula",
  "piernas": "rodillas"
 };
console.log(cuerpoHumano["cabeza"]);
*/

// Video 85. Acceder a propiedades variables.
/*
var finalistas = {
  1: "Real Madrid",
  2: "Manchester City",
  3: "PSG"
 };
 var posicion = 2;

 console.log(finalistas[posicion]);
 */

//Video 86. Actualizar propiedades.

/*
var mochila = {
    "color": "Azul",
    "tamaño": "Mediano",
    "contenido": ["botella de agua", "cuaderno"]
};

console.log(mochila.color); // Azul
mochila.color = "Verde";
console.log(mochila.color); // Verde
console.log(mochila);

console.log(mochila.contenido);
mochila.contenido.push("Lapiz");
console.log(mochila.contenido);
*/

// Ejemplo #1.

/*
var cuerpoHumano = {
  "cabeza": "ojos",
  "tronco": "pectorales", 
  "piernas": "Tobillos"
};

cuerpoHumano.tronco = "pecho";
console.log(cuerpoHumano.tronco);
cuerpoHumano.tronco ="abdomen";
*/

// Video 87. Agregar propiedades

/*
 var curso = {
    "titulo": "Aprender JavaScript desde 0",
    "idioma": "Español",
    "duracion": ["segundos"]
 }

 curso.horaDeInicio = "16:00h";
 curso.visitas = 34500;
 console.log(curso.visitas);
 console.log(curso);
 curso.duracion.unshift("minutos");
 console.log(curso);
*/

// Ejemplo #1.

/*
var cuerpoHumano = {
  "cabeza": "ojos",
  "tronco": ["pectorales"], 
  "piernas": "Tobillos"
};

cuerpoHumano.tronco.push("abdomen");
console.log(cuerpoHumano.tronco);
cuerpoHumano.pies = "dedos";
console.log(cuerpoHumano.pies);
console.log(cuerpoHumano);
*/

// Video 88. ELiminar propiedades.

/*
 var curso = {
  "titulo": "Aprender JavaScript desde 0",
  "idioma": "Español",
  "duracion": 30
 };
 delete curso.titulo;
 console.log(curso);
*/

// Ejemplo #1.

/*
var cuerpoHumano = {
  "cabeza": "ojos",
  "tronco": ["pectorales"], 
  "piernas": "Tobillos"
};
 delete cuerpoHumano.piernas;
 console.log(cuerpoHumano);
*/

// Video 89. Objetos para busquedas.

// Se usara un objeto para reemplazar una sentencia (switch).
/*
switch (palabraCompleta) {
  case "A":
    palabraCompleta = "Amor";
    break;
  case "B":
    palabraCompleta = "Bendicion";
  case "C":
    palabraCompleta = "Carisma";
  case "D":
    palabraCompleta = "Dios"

  default:
    break;
}
function buscarLaPalabra(letra) {
var palabraCompleta;

palabraCompleta = {
  "A": "Amor",
  "B": "Bendicion",
  "C": "Carisma", 
  "D": "Dios"
  }

  return palabraCompleta[letra];
}

console.log(buscarLaPalabra("A"));
console.log(buscarLaPalabra("B"));
*/

// Video 90. Verificar propiedades.

/*
var miCuaderno = {
  "color": "verde",
  "categoria": 3,
  "precio": 4.56
};
console.log(miCuaderno.hasOwnProperty("color"));


function verificarPropiedad(objeto, propiedad) {
  if (objeto.hasOwnProperty(propiedad)){
    return "propiedad : " + objeto[propiedad];
 } else {
    return "el objeto no tiene propiedad."
 }
  
}

var miCuaderno = {
  "color": "verde",
  "categoria": 3,
  "precio": 4.56
};
console.log(verificarPropiedad(miCuaderno, "precio"));
console.log(verificarPropiedad(miCuaderno, "lista"));
*/ 

// Ejemplo #1.


var Movil ={
  "version": 17.5,
  "modelo": "Iphone 13 pro max",
  "color": "verde",
  "peso": 400
}

console.log(Movil.hasOwnProperty("modelo"));

function verificarPropiedad(objeto, propiedad) {
  if (objeto.hasOwnProperty(propiedad)){
    return "propiedad : " + objeto[propiedad];
 } else {
    return "el objeto no tiene propiedad."
 }
  
}

var Movil ={
  "version": 17.5,
  "modelo": "Iphone 13 pro max",
  "color": "verde",
  "peso": 400
}

console.log(verificarPropiedad(Movil, "version"));

// Video 91. Objetos complejos.

// Tienen combinaciones con datos disntintos y sus respectivos valores.

/*
var ordenesDePizza = [
  {
    "tipo": "margarita",
    "tamaño": "individual",
    "precio": 5.67,
    "toppings": [
      "extra queso",
      "champiñones",
      "piña"
    ],
    "para llevar": true
  },

  {
    "tipo": "4 quesos",
    "tamaño": "familiar",
    "precio": 18.54,
    "toppings": [
      "extra queso",
      "pimenton"
    ],
    "para llevar": false
  }

];
console.log(ordenesDePizza[0]);
console.log(ordenesDePizza[1]);
*/

// Ejemplo #1.

/*
var  opcionDeMenu = [
  {

      "Entrante" : "Setas a la plancha con refrito andaluz",
      "Plato principal" :"Entrecod gallego 350gr",
      "Postre": "Tarta de queso fluida",
      "Topings": [
          "pan",
          "bebida",
          "bolleria"
       ],

       "llevar" : true

      },
  
  {
      "Entrante" : "Parrillada de verduras campestre",
      "Plato principal" :"Pulpo a la brasa",
      "Postre": "Culan de Santiago",
      "Topings": [
          "pan",
          "bebida",
          "bolleria"
       ],

       "llevar" : true

  },

  {
      "Entrante" : "Patacon hogao pinton",
      "Plato principal" :"Ajiaco de la montaña",
      "Postre": "Salpicon de frutas",
      "Topings": [
          "pan",
          "bebida",
          "bolleria"
       ],

       "llevar" : true

  }
];

console.log(opcionDeMenu[0]);
*/
