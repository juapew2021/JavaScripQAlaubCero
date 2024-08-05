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


/* const readline = require('readline');
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
     console.log("El cliente desea de preferencia el menu con entrante de " + opcionDeMenu[input1]["Entrante"] + " , de preferencia el plato principal seria " + opcionDeMenu[input1]["Plato principal"] + "  y lo quiere con postre de "+ opcionDeMenu[input1]["Postre"] +  " y acompañado de " + opcionDeMenu[input1]["Topings"][input2]); */
    
    
     const readline = require('readline');
     const rl = readline.createInterface({
       input: process.stdin ,
       output: process.stdout
     });

    rl.question('Cual es la preferencia de su marca de coche? ', (input1) => {
        const numero1 = parseFloat(input1);
      
    rl.question('En que modelo esta interesado? : ', (input2) => {
        const numero2 = parseFloat(input2);
        
    rl.question('Que tipo de mecanica esta buscando? : ', (input3) => {
        const numero3 = parseFloat(input3);

     rl.question('Que metodo de pago desea? : ', (input4) => {
        const numero4 = parseFloat(input4);

            // VENTA DE COCHES

    var cochesEnVenta = [

        { 
            "Marcas" : [" BMW " , " Mazda ", " Ferrari ", " Mercedes-Benz "] ,
            "Modelo" : [ " 2012 " , " 2016 " ," 2020 " , " 2024 "] , 
            "Mecanica" : ["Gasolina" , "DIESEL" , "Electrica" , " Hibrida"] ,
            "Metodo de pago" : [ "Metalico" , " Efectivo"],

        },

        { 
            "Marcas" : [" Audi " , " Ford ", " Kia ", " Porsche "] ,
            "Modelo" : [ " 2014 " , " 2018 " ," 2020 " , " 2022 "] , 
            "Mecanica" : ["Gasolina" , "DIESEL" , "Electrica" , " Hibrida"] ,
            "Metodo de pago" : [ "Metalico" , " Efectivo"],

        },

        { 
            "Marcas" : [" Toyota " , " Lamborghini ", " Aston Martin ", " Bentley "] ,
            "Modelo" : [ " 2021 " , " 2022 " ," 2023 " , " 2024 "] , 
            "Mecanica" : ["Gasolina" , "DIESEL" , "Electrica" , " Hibrida"] ,
            "Metodo de pago" : [ "Metalico" , " Efectivo"],
        },
    ];
     
    /* console.log(" Buenos dias. Me gustaria averiguar por algun coche, de preferencia podria ser: " + cochesEnVenta[input1]["Marcas"] + "  y prefiero modelos del año alrededor del  " + cochesEnVenta[input2]["Modelo"] + " desearia por ultimo que la mecanica fuese" + cochesEnVenta[input3]["Mecanica"][3]); */
    console.log( "Buen dia! estoy en busca de un coche de marca, modelo y mecanica exacta. Deseo comprar un  " + cochesEnVenta[input1]["Marcas"][3] + " el modelo que vengo buscando es un " + cochesEnVenta[input2]["Modelo"][3] + " y para termminar estaria realmente agradecido si la mecanica del coche fuese " + cochesEnVenta[input3]["Mecanica"][1] + " por ultimo si no es molestia, podria elergir que el metodo de pago sea en " + cochesEnVenta[input4]["Metodo de pago"][1]); 

        
    rl.close();

      });
    });
  });
});












