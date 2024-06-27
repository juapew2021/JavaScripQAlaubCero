var queTieneMiCuaderno = {
    "Color": "Verde",
    "Categoria": 2,
    "Precio": 7.89
};
//console.log(queTieneMiCuaderno.hasOwnProperty("Color"));

// crear una función para validar si existe una propiedad o no !!

function varificarPropiedad(obj, propiedad) {
    if (obj.hasOwnProperty(propiedad))

    return "Propiedad: " + obj[propiedad];
    else {
        return "El objeto no tiene esta propiedad"
    }
        }
        var coche = {
            "Color": "Verde",
        "Categoria": 2,
        "Precio": 7.89
};
console.log(varificarPropiedad(coche, "Categoria"));