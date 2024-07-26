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
console.log("El cliente ha pedido una pizza: " + ordenesDePizza[1]["tipo de pizza"]); 
console.log("Su precio es: " + ordenesDePizza[1]["precio"]); 
console.log("Que topping desea llevar: " + ordenesDePizza[1]["toppings"][2]); 




