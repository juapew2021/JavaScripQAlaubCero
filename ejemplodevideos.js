/*
// video 27: concatenar cadena de caracteres

var listado = "tomate" + ", " + "cebolla" + ", " + "papa" + ", " + "frijol" + " y " + "platano";
console.log(listado);


// video 28: construir cadena de caracteres con variables 

var verbo = "conducir";

var mensaje = "voy a " + verbo + " rapido para llegar a mi destino";
console.log(mensaje);


//video 29: agregar variables a una cadena de caracteres

var mensajecompleto = "voy a aprender a conducir";
var partefinal = "en unos dias"

mensajecompleto += partefinal

console.log(mensajecompleto)


//video 30: longitud de una cadena de caracteres 

var cadena;

cadena = "hola como estas" + "bien y tu";

//length = longitud
console.log(cadena.length)


// video 31: notacion de corchetes: primer caracter

var lenguajedeprogramacion = "javascript"
 

cadena P R O G R A M A C I O N
indice 0 1 2 3 4 5 6 7 8 9 10 11

 console.log(lenguajedeprogramacion[8])


 // video 32: inmutabilidad de cadenas

 var cadena = "come estan"
 console.log(cadena);

 cadena[0] = "h"; //error

 cadena = "como estan"
 console.log(cadena);


 // video 33: notacion de corchetes:enesimo caracter

 var cadena = "PROGRAMACION"

 //cadena P R O G R A M A C I O N
 //indice 0 1 2 3 4 5 6 7 8 9 10 11

console.log(cadena[0]); //P
console.log(cadena[1]); //R
console.log(cadena[2]); //O
console.log(cadena[3]); //G
console.log(cadena[4]); //R
console.log(cadena[5]); //A
console.log(cadena[6]); //M
console.log(cadena[7]); //A
console.log(cadena[8]); //C
console.log(cadena[9]); //I
console.log(cadena[10]); //O
console.log(cadena[11]); //N


// video 34: notacion de corchetes: ultimo caracter

var cadena;

 //cadena P R O G R A M A C I O N
 //indice 0 1 2 3 4 5 6 7 8 9 10 11

cadena = "PROGRAMACION"
console.log(cadena[cadena.length - 5]);


// video 35: notacion de corchetes: de derecha a izquierda

var cadena = "PROGRAMACION"

 //cadena P R O G R A M A C I O N
 //indice 0 1 2 3 4 5 6 7 8 9 10 11


 console.log(cadena.length - 6)

 // video 36: palabras en blanco

 var sustantivo = "pepito"
 var adjetivo = "experto"
 var verbo  = "cocina"
 var adverbio = "exquisitamente" 

 //Pepito, un experto chef, cocina exquisitamente cada plato que prepara.

 var palabrasenblanco = sustantivo + ", " + "un " + adjetivo + " chef" + ", " + verbo +" "+ adverbio + " cada plato que prepara ";

 console.log(palabrasenblanco);


 //video  37: arreglos (arrays)

lo arreglos son estructuras que nos permiten 
almacenar multiples valores en una misma estructura

var arreglo = ["esteban", 35];
console.log(arreglo)

var trabajadores = [["jarol", 15], "julian", "luis", "ricardo"];
console.log(trabajadores)

var puntuacion = [9, 7 , 2 , 8];
console.log(puntuacion)


 //video  38: arreglos animados

 var trabajadores = [["jarol", 9], ["julian", 7]];
 console.log(trabajadores)

 var herramientas = [["destornillador", 8.54],["martillo", 4.89]];
 console.log(herramientas)


 //video  39: Acceder a los elementos de un arreglo

var arreglo = [50, 60, 70];

arreglo : [50, 60, 70]
indice :    0   1   2


console.log(arreglo[0]);
console.log(arreglo[1]);
console.log(arreglo[2]);
 
var suma = arreglo[0] + arreglo[1] + arreglo[2];
console.log(suma);


 //video  40:modificar los elementos de un arreglo

var arreglo = [200, 600, 800];

arreglo[0] = ["hola " , 790]
arreglo[1] = "hola"
arreglo[2] = 500
console.log(arreglo);



 //video  41: acceder a los arreglos multidimensionales

var arreglo = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];


arreglo ;        [[1, 2, 3][4, 5, 6][7, 8, 9]]
indice ;              0        1        2
indice interno ;   0  1  2  0  1  2  0  1  2


console.log(arreglo[0][2]);
console.log(arreglo[1]);
console.log(arreglo[2]);



 //video  42:.push()

 var meses = ["enero", "febrero", "marzo"];
 
meses.push("abril")
console.log(meses)


 //video  43:.pop()

var meses = ["enero", "febrero", "marzo", "abril"];
var mes;


mes = meses.pop();
console.log(meses)
console.log(mes)

 //video  44:. shift()

 //elimina el primer elemento de un arreglo 

var meses = ["enero", "febrero", "marzo", "abril"];

meses.shift();
console.log(meses)

 //video  45:unshift()

 var meses = ["febrero", "marzo", "abril"];

 meses.unshift("enero")
 console.log(meses)



 //video  46:lista de compras 

 var listadocompras = [["carne", 6], ["huevos", 30], ["cafe", 1], ["tomate", 5], ["cebolla", 6]];

//cafe
console.log("voy a comprar " + listadocompras[0][1]+ " unidades de " + listadocompras[0][0]);

//carne
console.log("voy a comprar " + listadocompras[1][1]+ " unidades de " + listadocompras[1][0]);


 //video  47: funciones

 /*con las funciones podemos escribir codigo que podemos 
 reutilizar en nuentro programa, se define con la palabra 
 ya reservada FUNCTION


function mostrarmensaje(){
    console.log("como estan")
}

mostrarmensaje();
mostrarmensaje();
mostrarmensaje();
mostrarmensaje();

*/
 //video  48: argumentos

function resultado(a, b){
    var resta = a - b;
    console.log("el resultado de resta "+ a + "-" + b + " es: "+ resta);
    var suma = a + b;
    console.log("el resultado de suma "+ a + "+" + b + " es: "+ suma);
    var multiplicacion = a * b;
    console.log("el resultado de multiplicacion "+ a + "*" + b + " es: "+ multiplicacion);
    var division = a / b;
    console.log("el resultado de division "+ a + "/" + b + " es: "+ division);

}

resultado (1869, 1234567);


 /* //video  49: ambito global

 var variableglobal = 850;
 console.log(variableglobal)

function funcion (){
    console.log(variableglobal)
}

funcion();
console.log(variableglobal);

/*el principio basico de una variable global, 
es una variable que se puede acceder y modificar en cualquier lugar del programa 
*/


 //video  50: ambito local
/*
 function funcion(){
    var variablelocal = 4
 }
funcion();
console.log(variablelocal);



 //video  51: ambito global vs ambito local

 var nombre = "bruno";

function mostrarnombre(){
    var nombre= "juan";
    console.log(nombre)
}

mostrarnombre();

console.log(nombre)


 //video  52:

function sumar(a, b){
    return a+b ;
}
console.log(sumar(756, 961))


 //video  53: undefined

 function sumar(a, b){
    console.log(a + b);
 }
 console.log(sumar (679, 852));



 //video  54: asignar un valor retornado 

 function sumar(a, b){
    return a+b ;
}
var resultado = sumar (465, 349);
console.log(resultado);


 //video  55: permanece en la fila 

 function proximoenlafila (arreglo, elemento){
    arreglo.push(elemento);
    return arreglo.shift();
}

var arreglo = [1, 2, 3, 4, 5];

console.log("antes: " + JSON.stringify(arreglo));

console.log(proximoenlafila(arreglo, 8));

console.log("despues: " + JSON.stringify(arreglo));

 */