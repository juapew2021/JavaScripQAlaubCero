// Necesitamos saber cual es mi peso ideal;
/*
Si el peso es el Doble de la Edad = El peso es normal 
Si el peso es mas del doble de la edad = Su peso esta sobrepasado 
Si Su peso es por Debajo del Doble de su edad : Su peso es optimo 
*/
/*let resultado;
var pesoIdeal;
function diNosTuPeso(edad, altura, peso) {
    pesoIdeal = ((altura - 100) + (edad / 10) * (0.9));

    if (peso > pesoIdeal) {

        resultado = "Su peso es sobrecargado";

    } else if (peso < pesoIdeal) {

        resultado = "Su peso es Delgado";

    } else if (pesoIdeal === peso) {

        resultado = "Su peso es Normal";
    }

}
diNosTuPeso(38, 174, 77.42);
console.log(pesoIdeal);
console.log(resultado);
*/



/*let resultado;

function esParOImpar(num) {
    
    if (num % 2 === 0) {
        resultado = "El número es par";
    } else {
        resultado = "El número es impar";
    }
}
esParOImpar(862);
console.log(resultado);
*/

let resultado;

function puedeConducir(esMayorDeEdad, estaBorracho, superoLimiteVelocidad, tieneLicencia) {
    

    if (esMayorDeEdad === "si" && estaBorracho === "no" && superoLimiteVelocidad === "no" && tieneLicencia === "si") {
        resultado = "Puede conducir";
    } else {
        resultado = "No puede conducir";
    }
    return resultado;
}

let esMayorDeEdad = "si";
let estaBorracho = "no";
let superoLimiteVelocidad = "no";
let tieneLicencia = "si";

console.log(puedeConducir(esMayorDeEdad, estaBorracho, superoLimiteVelocidad, tieneLicencia));
