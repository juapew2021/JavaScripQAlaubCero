// Programa buscar el elemento quimico

function buscarElementoQuimico(simbolo) {
    var elementoQuimico = "";

    switch (simbolo) {
        case AL:
            elementoQuimico = "Aluminio";
            break;
        case S:
            elementoQuimico = "Azufre";
            break;
        case CL:
            elementoQuimico = "Cloro";
            break;
        case HE:
            elementoQuimico = "Helio";
            break;
        case B:
                elementoQuimico = "Boro";
                break;

        default:
            break;
    }
 return elementoQuimico; 
}
// Refactorizamos --->
function buscarElementoQuimico(simbolo) {
    var simbolosQuimicos = {
        "AL": "Aluminio",
        "S": "Azufre",
        "CL": "Cloro",
        "HE": "Helio",
        "B": "Boro"
    };
    return simbolosQuimicos[simbolo];   
}
console.log(buscarElementoQuimico("S"));
