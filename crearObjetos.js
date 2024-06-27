var miPerro = {
    "nombre": "Roby",
    "Edad": 4,
    "Peso": 35,
    "Raza": "Beagle"
};
//Acceder a Propiedades: Notación de punto
//console.log(miPerro.Edad);
//console.log(miPerro.Raza);
//Acceder a propiedades: Notación de Corchetes
var miCuaderno = {
    "color": "Verde",
    "categoria": 3,
    "numero de paginas": 200,
    "numero de hojas": 100
}
//console.log(miCuaderno["numero de paginas"])
//Acceder a propiedades: Variables 

var resultados = {

    1: "Juan001",
    2: "Pedro098",
    3: "Lonidas98"
}
var position = 3;
//console.log(resultados[position]);
// Crear un Objeto dentro Otro
var ordenesDePizza = [
    {

        "tipo de pizza" : "Margarita",
        "precio" : 34.89,
        "tamaño": "Individual",
        "toppings": [
            "Sala rosada",
            "Queso curado",
            "coca cola"
         ],

         "llevar" : true

        },
    
    {
        "tipo de pizza" : "Napolitana",
        "precio" : 31.89,
        "tamaño": "Familiar",
        "toppings": [
            "Sala Negra",
            "Queso extra",
            "Agua"
        ],
        "llevar" : false
    }
];
console.log(ordenesDePizza[1]["tipo de pizza"]);
