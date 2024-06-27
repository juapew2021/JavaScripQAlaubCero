/* var X = 10;
if (X < 20){

    console.log('La condición es verdadera. ');
} */

/* var estacion = "verano";

if (estacion == "verano"){

 console.log("La condición es verdadera: ")
}
console.log("La condición es falsa: ") */

// Clausula ELSE 
var estacion = "verano";

if (estacion == "primavera"){

 console.log("La condición es verdadera: ")
} else {
   // console.log("La condición es falsa: ")
}
//Ejemplo 
/* 
var estacion = "Invierno";
if (estacion === "Verano"){

    console.log("YA .. Podemos ir a la Playa!!")
   } else {
       console.log(":( .... Sigo esperando que llegue verano para poder ir a la playa!!")
   } */

   // Condicionales con Funciones 

   function clasificarValor(valor) {

    if (valor % 2 == 0) {

        console.log("Divisible entre dos. ")
        
    }else if (valor % 3 == 0) {
        console.log("Divisible entre tres. ")
    }else  {
        console.log("No es divisible entre las opciones!! ")
    }  
   }
//clasificarValor(2);
//clasificarValor(3);
clasificarValor(5);

// Condicionales de orden logico 

