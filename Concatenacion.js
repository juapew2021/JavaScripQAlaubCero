/* 1. Uso de Operador de Concatenación (+)
Puedes usar el operador de concatenación (+) para combinar variables y el resultado de funciones en una cadena. */

/* let name = "Juan"; 

function getString() {
    return "Hola";
}

let message = getString() + " " + name + "!";

console.log(message);
 */
/* 
2. Uso de Template Literals
Los template literals (o plantillas de cadenas) son una forma moderna y más legible de concatenar variables y funciones. 
Usan backticks (`) en lugar de comillas simples o dobles. */

/* let name = "Juan";

function getString() {
    return "Hola";
}

let message = `${getString()}, ${name}!`;
console.log(message); */

/* 3. Concatenación en Funciones
También puedes concatenar directamente dentro de una función y devolver la cadena completa. */

/* let name = "Juan";

function createMessage(name) {
    return `Hola, ${name}!`
    
}

let message = createMessage(name);
console.log(message); */

/* 4. Concatenación con Arrays y join
Puedes usar un array para almacenar partes de la cadena y luego usar join para concatenarlas. */

let name = "Juan";

function getString() {
    return "Hola";
}

let messageParts = [getString(), ",", name, "!"];
let message = messageParts.join(',');
console.log(message);









