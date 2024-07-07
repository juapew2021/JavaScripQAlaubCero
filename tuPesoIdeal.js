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
console.log(resultado);*/


let resultado;
var temperaturaIdeal;
function medirTemperatura(temperaturaCorporal, sexo , edad, alimentacion) {
    temperaturaIdeal = ((temperaturaCorporal === 36°), sexo , edad, alimentacion);

    if (su temperaturaCorporal < 36°) {
        resultado = "su cuerpo esta bajo la temperatura corporal regular";


    } else if (su temperaturaCorporal> 36°) {

        resultado = "su cuerpo esta por encima de la temperatura corporal habitual";

    } else if (su temperaturaCorporal === 36°) {
        resultado = "su temperatura corporal esta estable"
        
    }
}