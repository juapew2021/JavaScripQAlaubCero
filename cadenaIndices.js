// Se imprimi el valor indicado en la consola es decir 


var token = "Juanpablo reyes gomez"; 

/*
cadena : J u a n p a b l o
indice:  0 1 2 3 4 5 6 7 8
*/
//console.log(token[11])

// Inmutabilidad -- Se no se puede cambiar un catacter

var token = "Juanpablo reyes gomez"; 
token[9] = "P";
//console.log(token)

// Como imprimir un caracter especifico si contar manualmente una cadena de cacteres

var nombreLargo = "todoslosdiasmelevantoalasochodelamañana";

console.log(nombreLargo.length) //Adquirimos el total de catacteres

//console.log(nombreLargo.length - 3)
//console.log(nombreLargo[35])
console.log(nombreLargo[nombreLargo.length -4])

var nombreLargo3 = "sara isabella banoy";

console.log(nombreLargo3.length) //Adquirimos el total de catacteres

//console.log(nombreLargo.length - 3)
//console.log(nombreLargo[35])
console.log(nombreLargo3[nombreLargo3.length -5])