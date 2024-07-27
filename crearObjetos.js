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

var pedidosDeHerramientas = [
    {
        "herramienta" : "Martillo",
        "precio" : 98.300, // Precio en COP
        "moneda" : "COP",
        "marca": "Stanley",
        "tamaño": "Mediano",
        "características": [
            "Mango de fibra de vidrio",
            "Cabeza de acero",
            "Agarre antideslizante"
        ],
        "disponible" : true
    },
    
    {
        "herramienta" : "Taladro Rotación",
        "precio" : 2.990900, // Precio en COP
        "moneda" : "COP",
        "marca": "Bosch",
        "tamaño": "industrial",
        "características": [
            "Velocidad variable",
            "inalambrico",
            "Mango ergonómico"
        ],
        "disponible" : false
    },

    {
        "herramienta" : "Destornillador",
        "precio" : 185.900 , // Precio en COP
        "moneda" : "COP",
        "marca": "truper",
        "tamaño": "grande",
        "características": [
            "Punta magnética",
            "Mango de goma",
            "Juego de puntas intercambiables"
        ],
        "disponible" : true
    },

    {
        "herramienta" : "Sierra Circular",
        "precio" : 599.900, // Precio en COP
        "moneda" : "COP",
        "marca": "DeWalt",
        "tamaño": "Grande",
        "características": [
            "Corte en ángulo",
            "Protección de hoja",
            "Motor de alta potencia"
        ],
        "disponible" : true
    }
];

console.log("El cliente ha pedido una herramienta: " + pedidosDeHerramientas[2]["herramienta"]);
console.log("Su precio es: " + pedidosDeHerramientas[2]["precio"] + " " + pedidosDeHerramientas[2]["moneda"]);
console.log("Marca de la herramienta: " + pedidosDeHerramientas[2]["marca"]);
console.log("Tamaño de la herramienta: " + pedidosDeHerramientas[2]["tamaño"]);
console.log("Una de sus características es: " + pedidosDeHerramientas[2]["características"][0]);

console.log("El cliente ha pedido una herramienta: " + pedidosDeHerramientas[3]["herramienta"]);
console.log("Su precio es: " + pedidosDeHerramientas[3]["precio"] + " " + pedidosDeHerramientas[3]["moneda"]);
console.log("Marca de la herramienta: " + pedidosDeHerramientas[3]["marca"]);
console.log("Tamaño de la herramienta: " + pedidosDeHerramientas[3]["tamaño"]);
console.log("Una de sus características es: " + pedidosDeHerramientas[3]["características"][2]);