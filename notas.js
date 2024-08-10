//Unidad 1. Fundamentos de Javascript

// * Documentacion Javascript.

/* JavaScript (JS) es un lenguaje de programación ligero, interpretado, o compilado.
JavaScript es un lenguaje de programación basada en prototipos, multiparadigma, de un solo hilo, dinámico,
con soporte para programación orientada a objetos, imperativa y declarativa (por ejemplo programación funcional).
El estandar para JavaScript es ECMAScript (Recursos de lenguaje para JavaScript) y la
especificacion de la API para la internacionalizacion de ECMAScript.
Node.js: Permite que JavaScript tenga un alcance mayor para ejecutar servicios del lado del servidor.
 */
// * Programación.

/* Inicio siendo el lenguaje de maquina de computadora o bajo nivel donde el lenguaje del codigo es complejo al entendimiento del humano.
Asi fue evolucionando hasta crearse el lenguaje de alto nivel donde su estructura se hace mas sencilla de entender.

importancias:
- Resolver problemas
- Automatizar tareas
- Obtener un pensamiento logico. */


// * Variables.

/* Variables y constantes.
Podria decirse que son cajas donde almacenaremos informacion.
Encontramos varios tipos de variables:

- var
- let: Crea variables las cuales nos permiten modificar el contenido a lo largo del codigo. 
- const: Esta no permite que se cambie el valor de la coonstante asi como lo aclara su nombre.

Tipos de datos.

- numerico: 2, 21, 300
- string o cadena de texto dentro de comillas dobles o simples ("", '')
- boleano que solo usamos para dar resultado de (true , false)
- objeto = {
      clave: "mat"
}
objeto.clave
- arreglos: ["hola", 2, objeto, ]
 */

// * Funciones.

/* Es una parte del codigo que se puede usar en cualquier momento, tiene dos maneras de ser llamada.
Con parametros y sin parametros. */

// Ejemplos

// Sin parametros

/*
const imprimir = () => {
console.log("hola");
};
imprimir();
*/

// Con parametros

/*

const imprimir = (texto) => {
    console.log(texto);
    };

    imprimir("buen dia");


function imprimir(texto) {
    console.log(texto);   
}

imprimir("buen dia");
    
*/

// Funciones con variables globales y locales en conjunto. 

  /*
let numero = 21;

function imprimir(texto) {
    console.log(texto);   
}

const aumentar = () => {
    let numero = 21;
    numero = numero + 12;
}
aumentar();
imprimir(numero);
 */

  // * Estructuras condicionales.

  // Operadores condiconales.

/* if{}  {

    } else {
          
   }

   if{}  {

   } else if{} {
          
   } else }

   }
   // Operadores de comparacion

    > mayor que otro
    < menor que otro
    = igual que otro
    >= mayor igual 
    <= menor igual


   // Operadores logicos
   // Permiten comprobar mas de una condicion.


   and = [
        &&  true && true = true,
        &&  true && false = false
    ];

   or = [
       false  | |   true = true,
       false  | |   false = false
    ]; 

    not = [
       ! !false = true
       ! !true = false
    ];   



   switch () = {
      case 1:
           break;
      case 2:     
           break;  
      
      default:      
   } 

*/

// Ejemplos if.

/*  if ( 1 == 2) {
   console.log('1 es igual que 2')
 } else { 
    console.log(' 1 no es igual que 2'); 
 }
 

 let texto = 'mala tarde';

 if(texto == 'mensaje') {
       console.log(texto);

 } else if (texto == 'buenas tardes') {
       console.log(texto + " si es un buen saludo");

    } else if (texto == 'malas tardes') {
        console.log(texto + " no es un buen saludo");

 } else {
       console.log("no es un mensaje");
 } 
     

  // Ejemplos &&, or, not.

let fruta = "manzana";
let color = "roja";
  
if (fruta == "manzana" && color == "roja") {
    console.log( "su color es " + color);
}

if (fruta == "manzana" || color == "roja") {
    console.log( "su color es " + color);
}


if (!true) {
    console.log( " manzana " + color);
}



  // Ejemplos switch


  let mes = 8;

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

 // Bucles.

 // Nos permiten repetir una linea de codigo una canitad idefinida de veces.

/*
    for(let i = 0; i < 10; i++) {

 }
    while (condition) {
    
 }
    do {

 }  while (condition) {

    
 }

 // Ejemplos de bucles.

let num = 0;

for(num = 0; num < 20; num++) {
  console.log(num + "num * 20 = " + num * 20);

 }




let i = 0;
 while (i < 10) {
    console.log(i + " i x 10 = " + i * 10);
    i++; //  m = m + 1; m += 1
 }

let i = 20;
    do {
    console.log(i + " x 10 = " + i * 10);
    i++; //  m = m + 1; m += 1
 }
   while (i < 10);
*/

 // Objetos y arreglos.

 // Son un tipo de datos que constan de clave  y valor.

/*

 let objecto = {
 
   };

 class clase {
 
   }; 
 
let objeto = new clase();

 // Arrays

  let array = [];



let herramienta = {
          material : "madera " ,
          metodo : () => {
            console.log("martillo de");
          },

          nombre: function() {
            console.log("martillo de " + this.material);

          }
}
   herramienta.nombre();



class Clase {
    material = "madera ";
    
    metodo = () => {
      console.log("martillo de " + this.material);
    }

    nombre = function() {
      console.log("martillo de " + this.material);

    }
} 


let myobj = new Clase ();

myobj.metodo();



 // Arrays.

 let array = [1, 2, 3, 4, 5, 6, 7];
 
 for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
 }


 // Comandos basicos.

 -Node: Nos permite ejecutar codigo javaScript y cualquier codigo.
 -npm:
     npm init -y: Nos crea el archivo package.json. solemos encontrar este archivo en todos los proyectos.
     Se inican los modulos que contendran ese proyecto.
     npm install [proyect name]: Esto nos creara una carpeta (node modules) donde se descargan los archivos de nuestro proyecto.
     npm run comando: Este nos permite crear un comando que permita darle un valor y refleje su accion en la consola.
*/
  




// Unidad 2. Herramientas de testing end-to-end.

// * Testing end-to-end.

/* 
 e2e: Nos permite realizar una serie de pruebas a todo un programa.
 Esto es importante ya que nos facilita identificar problemas dentro, cuando creamos alguna caracteristica
 que dañe el funncionamiento de otras de nuestra aplicacion. De esta manera tambien se validan los flujos de su tranajo,
 demostrar calidad completa de extremo a extremo y optimizar la experiencia para el usuario.

 Las pruebas e2e son bastante importantes para encontar fallos en el programa antes de entregar el resultado final al usuario.
 De mano con los framework podemos darle el manejo necesario para eliminar estos fallos.
 
*/
 // * Cypress framework de automatizacion WEB.
 
 


  
    