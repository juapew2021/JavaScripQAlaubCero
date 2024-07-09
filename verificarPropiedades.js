/* var queTieneMiCuaderno = {
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
/* console.log(varificarPropiedad(coche, "Categoria")); */

/* Variables de Propiedad */ 

var miFinca = {
    "Tamaño" : "1000 Hectareas",
    "Arboles frutales" : "naranja",
    "vegetales" : "lechuga",
    "personas viviendo" : 5
} 
/* console.log("Que tiene mi Finca: ", miFinca) */
/* console.log("Que frutales tiene tu finca: ", miFinca["Arboles frutales"]);
console.log("Cual es el tamaño de tu finca: ", miFinca.Tamaño); */
/*console.log("Cuantas personas viven en la finca: ", miFinca["personas viviendo"]); */


var mainBody = {
             "head": ["ojos",  
                     "boca",  
                     "nariz", 
                     "orejas"] ,

             "body" : [ "brazos" , 
                      "pecho" ,
                      "estomago" , 
                      "espalda"],
             "footer" : [ "piernas", 
                        " rodillas" , 
                        "pies"]
   }

console.log ("Cual es el color de ojos:", mainBody.head)
/* concatenar variables */
