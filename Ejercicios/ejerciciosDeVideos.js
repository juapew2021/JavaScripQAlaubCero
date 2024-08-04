// Se haran algunos ejercicios de los videos mas representativos sobre los temas vistos

const { Console } = require("console");
const { find } = require("rxjs");

// Video 27. concatenar cadenas de caratecteres

var miProfesion = "Progamador de software" + " y " + "Cocinero en cocina fusion"
console.log(miProfesion);
var miProfesion = "Progamador de software" + " y " + " " + "Cocinero en cocina fusion"
console.log(miProfesion); 

// Video 28. Construir cadena con variables

var animal = "cuervo"
var mensaje = " el " + animal + " es mi animal favorito"
console.log(mensaje);

// Video 29. Agregar variables a cadena de caracteres

var subscripcion = " Inscribete y estudia con nosotros"
var mensajeFinal = " en las instalaciones de QAlaub"
subscripcion += mensajeFinal;
console.log(subscripcion);

// Video 30. Longitud de una cadena de caracteres
/* Con la propiedad (.length) que nos permitira medir la cantidad de caracteres que tenemos dentro de una cadena.
toma en cuenta los numeros, letras, signos, simbolos y espacios. ahora veremos un ejemplo */
 
var abecedario;
abecedario = "ABCD"
console.log(abecedario.length);

// Ahora agregamos un signo y espacio

var abecedario;
abecedario = " A, B, C, D, 21, *"
console.log(abecedario.length);

// Video 31. Notacion de corchetes. 1. caracter

var colorDeOjos = "VERDES"

/* 
cadena   V E R D E S
indice   0 1 2 3 4 5
*/

console.log(colorDeOjos[2]);

// Video 32. Inmutabilidad de cadena de caracteres

 var cambioInmutable = "c puede cambiar 1 caracter individual d la cadena de karacteres asignada"
 console.log(cambioInmutable);
 cambioInmutable[0] = "se"; // Error
 console.log(cambioInmutable);
 cambioInmutable = " Podemos cambiar la cadena completamente para arreglar cualquier error"
 console.log(cambioInmutable);

// Video 34. Notacion de corchetes. Ultimo caracter
 /* Cuando deseamos tomar el ultimo caracter de nuestra cadena podemos medirlo con la propiedad (.length )- 1 */
var colorDeOjos;
colorDeOjos = "VERDES"
console.log(colorDeOjos[colorDeOjos.length - 1]);
 
// Video 35. Notacion de corchetes de derecha a izquierda
 /* Cuando deseamos tomar el penultimo caracter de nuestra cadena podemos medirlo con la propiedad (.length )- 2
 colorDeOjos.length es de 6. El penultimo caracter es 4 */
 var colorDeOjos;
 colorDeOjos = "VERDES"
 console.log(colorDeOjos[colorDeOjos.length - 2]);

 /* De esta manera podemos tomar cualquier caracter de derecha a izquierda*/
 var n = 3
 console.log(colorDeOjos[colorDeOjos.length - n]);

 // Video 36. Concatenar cadenas de texto

 
var miSustantivo = "vaca";
var miAdjetivo = "flaca" ;
var miVerbo = "come" ;
var miAdverbio = "despacio" ;

/* La vaca flaca come muy despacio*/

var titulo = "La " + miSustantivo + " " + miAdjetivo + " " + miVerbo + " muy " + miAdverbio + "" ;

console.log(titulo);

// Video 37. Arreglos (Arrays)

var miArreglo =  [30 , "personas"];
console.log(miArreglo);

var especies = ["humanos" ,"animales" , "peces"];
console.log(especies);
var cualidadFisica = [ "Color de piel" , " Cuadrupedos" , " respirar bajo agua"]
console.log(cualidadFisica);

// Video 38. Arreglos anidados

var especies = [["humanos", "Color de piel"], ["animales" , "cuadrupedos"]];
console.log(especies);

var fechaDeNacimiento = [[26, "nov", 2001], [15, "abril", 1995]];
console.log(fechaDeNacimiento);

// Video 39. Acceder a los elementos de un arreglo

var misNumeros = [ 21, 12, 8];
 /*
   Arreglo : [ 21, 12, 8]
   Indice  :   0   1   2
*/
console.log(misNumeros[2]);
var suma = misNumeros[0] + misNumeros[1];
console.log(suma); 

// Video 40. Modificar elementos de un arreglo  

var misNumeros = [12, 21, 8];
misNumeros[0] = 6
console.log(misNumeros);
misNumeros[2] = " ocho "
console.log(misNumeros);
misNumeros[1] = ["dame", 5];
console.log(misNumeros);

// Video 41. Acceder a arreglos multidimensionales

var grupoDeLetras = [["A" , "B" , "C"] , ["D" , "E" , "F"], ["G", "H", "I"]];
/*
  Arreglo :        [["A" , "B" , "C"] , ["D" , "E" , "F"], ["G", "H", "I"]];
  Indice  :               0               1              2 
  Indice interno :    0   1    2      0   1   2      0   1    2

*/
console.log(grupoDeLetras[1]);
console.log(grupoDeLetras[0][1]);

// Video 42. .push()

/* Con el metodo .push() podemos agregar un elemento a nuestro arreglo */

var finDeSemana = [ "jueves", "viernes" , "sabado"];
finDeSemana.push("domingo");
console.log(finDeSemana);

// Video 43. .pop()

/* Con el metodo .pop() podemos remover el ultimo elemento de un arreglo */

var finDeSemana = [ "jueves", "viernes" , "sabado" , "domingo"];
var diaFestivo;

diaFestivo = finDeSemana.pop()
console.log(finDeSemana);
console.log(diaFestivo);

// Video 44. .shift()

/* Con el metodo .shift() podremos remover el primer elemento de un arreglo */

var finDeSemana = [ "jueves", "viernes" , "sabado" , "domingo"];
var diaFestivo;
finDeSemana.shift();
console.log(finDeSemana);






