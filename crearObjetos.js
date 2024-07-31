/*  var ordenesDePizza = [
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


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin ,
  output: process.stdout
});

rl.question('Que opcion de menu desea el comensal? ', (input1) => {
  const numero1 = parseFloat(input1);

  rl.question('Con que lo desea acompañar? : ', (input2) => {
    const numero2 = parseFloat(input2);

    var  opcionDeMenu = [
        {
    
            "Entrante" : "Setas a la plancha con refrito andaluz",
            "Plato principal" :"Entrecod gallego 350gr",
            "Postre": "Tarta de queso fluida",
            "Topings": [
                "pan",
                "bebida",
                "bolleria"
             ],
    
             "llevar" : true
    
            },
        
        {
            "Entrante" : "Parrillada de verduras campestre",
            "Plato principal" :"Pulpo a la brasa",
            "Postre": "Culan de Santiago",
            "Topings": [
                "pan",
                "bebida",
                "bolleria"
             ],
    
             "llevar" : true
    
        },
    
        {
            "Entrante" : "Patacon hogao pinton",
            "Plato principal" :"Ajiaco de la montaña",
            "Postre": "Salpicon de frutas",
            "Topings": [
                "pan",
                "bebida",
                "bolleria"
             ],
    
             "llevar" : true
    
        }
    ];
     console.log("El cliente desea de preferencia el menu con entrante de " + opcionDeMenu[input1]["Entrante"] + " , de preferencia el plato principal seria " + opcionDeMenu[input1]["Plato principal"] + " y lo quiere con postre de "+ opcionDeMenu[input1]["Postre"] +  " y acompañado de " + opcionDeMenu[input1]["Topings"][input2]);
    
    

    rl.close();
  });
});













