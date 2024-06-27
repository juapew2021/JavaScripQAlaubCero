/* Declara variables de JavaScript
/* Tipo de Datos 
undefined --> No xiste un valor asignado
null -->  Nulo 
boolean --> True or False 
string --> Letras, numeros, o las dos (Cadena de caracteres)
symbol --> Simbolos
bigint --> valores numericos muy largos 
number --> Numeros
object --> Para presentar un objecto
*/ 

/*

Por ejemplo, las computadoras distinguen entre números, como el número 12 y cadenas (strings), 
tales como "12", "dog", o "123 cats", que son colecciones de caracteres. 
Las computadoras pueden realizar operaciones matemáticas en un número, pero no en una cadena.
Las variables permiten a los ordenadores almacenar y manipular datos de forma dinámica. Hacen 
esto usando una "etiqueta" para apuntar a los datos en lugar de usar los datos en sí. Cualquiera 
de los ocho tipos de datos puede almacenarse en una variable.
Las variables son similares a las variables x, e y que usan en matemáticas, 
lo que significa que son un nombre simple para representar los datos a los que queremos hacer referencia. 
Las variables de computadora difieren de las variables matemáticas en que pueden almacenar diferentes 
valores en diferentes momentos.
Le decimos a JavaScript que cree o declare una variable poniendo la palabra clave var delante de ella, 
así:
var ourName;
crea una variable llamada ourName. En JavaScript terminamos las sentencias con punto y coma. 
Los nombres de las variables pueden estar formados por números, letras y $ o _, pero no pueden 
contener espacios ni empezar con un número.
Utiliza la palabra clave var para crear una variable llamada myName.
Sugerencia
** Reglas **
No se incluye Acentos, Ni Espacios

var --> 
let -->
const --> Constantes
= --> operador de asignacion 
Buenas practicas 
Camel case (estilizado como camelCase)estilo de escritura que se aplica a frases o palabras compuestas
*/
// Para Ejecutar un archivo de JS en la consola vamos a poner node y el archivo a Ejeuctar y enter por 
// Ejemplo node variables.js 
/* VAMOS*/

var a = 50;
var b = 19;
var c ; 
var d = 60;
var e = 30;

var resultadoSuma = a + b ;
var resultadoResta = d - e ;

console.log(resultadoSuma);
console.log(resultadoResta);


//console.log(a); // En este caso por consola nos sale un undefined 
//console.log(b); // Y en este caso si nos sale un 3 por que la varible se le asigno un numero

/* Pero si le asignamos el simbolo = a la letra a y le damos un 
numero ya no nos saldra un undefined*/

a = 5; 
//console.log(a); // En este caso su valor ya es 5 

// Tambine podemos asignar una variable a otra variable 
var a = 6;
var b = a;
//console.log(a); // Su valor es 6
//console.log(b); // Su valor es 6

// Otra forma es la siguiente 
var a = 9;
b = a;
//console.log(a); // Su valor es 9
//console.log(b); // Su valor es 9

/* ***** Inicializar variables**** */

var x = 9 ; // Inicializar la variable X con un numero
var miIdioma = "Espanol"; // Inicializar la variable miIdioma con cadana de caracteres
//console.log(x); 
//console.log(miIdioma); 

/* ***** Variables no Inicializadas **** */

var numero1;
var numero2;
//console.log(numero1); 
//console.log(numero2); 

// Pero si la iniciailzamos 
numero1 = 1;
numero2 = 2;
//console.log(numero1); 
//console.log(numero2); 

// Es muy importante tener cuidado con las Mayusculas y minusculas 

var miNombre = "Juan Pablo Reyes";

//console.log(minombre);// Primer validacion 
//console.log(MiNombre);// Segunda validacion 
console.log(miNombre);// Tercera validacion 
