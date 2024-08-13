const readline = require('readline'); 
const rl = readline.createInterface({ 
  input: process.stdin , 
  output: process.stdout 
}); 
 
rl.question('Que opcion de menu desea el comensal? ', (input1) => { 
  const numero1 = parseFloat(input1); 
 
  rl.question('Con que lo desea acompañar? : ', (input2) => { 
    const numero2 = parseFloat(input2);

/*var ordenesDePizza = [
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
console.log("El cliente ha pedido una pizza: " + ordenesDePizza[1]["tipo de pizza"]); 
console.log("Su precio es: " + ordenesDePizza[1]["precio"]); 
console.log("Que topping desea llevar: " + ordenesDePizza[1]["toppings"][2]); */

const readlineSync = require('readline-sync');

var serviciosDeLavado = [
    {
        "tipoVehiculo": "Carro",
        "lavadoGeneral": 50000, // Precio en COP
        "moneda": "COP",
        "extras": [
            {
                "servicio": "Lavado de motor con vapor",
                "precio": 15000 // Precio en COP
            },
            {
                "servicio": "Encerado",
                "precio": 20000 // Precio en COP
            },
            {
                "servicio": "Aspirado interior",
                "precio": 10000 // Precio en COP
            }
        ]
    },
    
    {
        "tipoVehiculo": "Moto",
        "lavadoGeneral": 30000, // Precio en COP
        "moneda": "COP",
        "extras": [
            {
                "servicio": "Lavado de motor con vapor",
                "precio": 8000 // Precio en COP
            },
            {
                "servicio": "Encerado",
                "precio": 12000 // Precio en COP
            },
            {
                "servicio": "Aspirado interior",
                "precio": 5000 // Precio en COP
            }
        ]
    }
];

function mostrarMenu() {
    console.log("Seleccione el tipo de vehículo para el lavado:");
    console.log("1. Carro");
    console.log("2. Moto");
    let opcionVehiculo = parseInt(readlineSync.question("Ingrese la opción (1 o 2): "));

    if (opcionVehiculo === 1 || opcionVehiculo === 2) {
        let tipoVehiculo = serviciosDeLavado[opcionVehiculo - 1];
        console.log("El lavado general para " + tipoVehiculo.tipoVehiculo + " cuesta " + tipoVehiculo.lavadoGeneral + " " + tipoVehiculo.moneda);

        console.log("¿Desea agregar algún extra?");
        for (let i = 0; i < tipoVehiculo.extras.length; i++) {
            console.log((i + 1) + ". " + tipoVehiculo.extras[i].servicio + " - " + tipoVehiculo.extras[i].precio + " " + tipoVehiculo.moneda);
        }
        console.log((tipoVehiculo.extras.length + 1) + ". No agregar extras");

        let opcionExtra = parseInt(readlineSync.question("Ingrese la opción: "));

        if (opcionExtra > 0 && opcionExtra <= tipoVehiculo.extras.length) {
            let extraSeleccionado = tipoVehiculo.extras[opcionExtra - 1];
            console.log("Has seleccionado " + extraSeleccionado.servicio + " con un precio de " + extraSeleccionado.precio + " " + tipoVehiculo.moneda);
            let precioTotal = tipoVehiculo.lavadoGeneral + extraSeleccionado.precio;
            console.log("El precio total es: " + precioTotal + " " + tipoVehiculo.moneda);
        } else if (opcionExtra === tipoVehiculo.extras.length + 1) {
            console.log("No se agregaron extras. El precio total es: " + tipoVehiculo.lavadoGeneral + " " + tipoVehiculo.moneda);
        } else {
            console.log("Opción no válida. Por favor, intente nuevamente.");
            mostrarMenu();
        }
    } else {
        console.log("Opción no válida. Por favor, intente nuevamente.");
        mostrarMenu();
    }
}

mostrarMenu();
