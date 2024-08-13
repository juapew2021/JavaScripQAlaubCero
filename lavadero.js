const readline = require('readline'); 
const rl = readline.createInterface({ 
  input: process.stdin , 
  output: process.stdout 
}); 
 
rl.question('¿Qué tipo de lavado desea? (0 para Carro, 1 para Moto): ', (input1) => { 
    const numero1 = parseFloat(input1); 
  
    rl.question('¿Qué servicio extra necesita? (0 para Lavado de motor con vapor, 1 para Encerado, 2 para Aspirado interior): ', (input2) => { 
      const numero2 = parseFloat(input2);
  
var serviciosDeLavado = [
    {
        "tipoVehiculo": "Carro",
        "lavadoGeneral": 50000, // Precio en COP
        "moneda": "COP",
        "extras": [
            
            "Lavado de motor con vapor",

            "Encerado",

            "Aspirado interior"
        ],
    },
    
    {
        "tipoVehiculo": "Moto",
        "lavadoGeneral": 30000, // Precio en COP
        "moneda": "COP",
        "extras": [
            
                "Lavado de motor con vapor",

                "Encerado",

                "Aspirado interior"
        ]
    }
];

const tipoVehiculo = serviciosDeLavado[numero1].tipoVehiculo;
    const precioLavado = serviciosDeLavado[numero1].lavadoGeneral;
    const extra = serviciosDeLavado[numero1].extras[numero2];
    const precioTotal = precioLavado + extra.precio;

    console.log(`Has elegido: ${tipoVehiculo} con ${extra.nombre}`);
    console.log(`Precio del lavado general: ${precioLavado} ${serviciosDeLavado[numero1].moneda}`);
    console.log(`Precio del servicio extra: ${extra.precio} ${serviciosDeLavado[numero1].moneda}`);
    console.log(`Precio total: ${precioTotal} ${serviciosDeLavado[numero1].moneda}`);
rl.close();
  });
});

