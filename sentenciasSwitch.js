/* // Remplazar los condiciones OJO cuando ..

function clasificarValor(peso) {
    var respuesta;
    let uno = peso => 70;
    let dos = peso <= 70;
    let tres = (peso == peso);
    switch (peso) {
        case 40:
            respuesta = "Usted esta comiendo mucho"
            break;

        case dos:
            respuesta = "Usted esta en termino medio"
            break;
        case tres:
            respuesta = "Usted esta en Flaco le falta comidita"
            break;
    }
    return respuesta;

}
console.log(clasificarValor(40, 75));

 */

// Función se utiliza para cuando ahi muchas posibilidades

function seleccionaCorteDePelo(valor) {

    let idioma;
    switch (valor) {
        case 1:
            idioma = "Hongito";
            break;
        case 2:
            idioma = "Fabe";
            break;
        case 3:
            idioma = "Aleman";
            break;

        default:
            idioma = "INgrese el numero del corte de pelo que quiere que se le agende"
            break;
    }
    return idioma;
}
console.log(seleccionaIdioma());
