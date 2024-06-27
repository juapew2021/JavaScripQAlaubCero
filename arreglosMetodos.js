// Agregar un String al final del arreglo 

let estaciones = ['Invierno', 'primavera', 'otoño']

estaciones.push('verano');

//console.log(estaciones)

// Remover un String del final del arreglo
let estacion; 
let estacionesDel = ['Invierno', 'primavera', 'otoño']

estacionesDel.pop();
//console.log(estacionesDel)

estacion = estacionesDel.pop(); // Me guarda el String en la variable estacion
console.log(estacion)

// Siguente 

let comidas = ['desayuno', 'onces','almuerzo','medias nueves', 'cena'];

comidas.shift(); // Quita el primer indice del arreglo

//console.log(comidas)
//console.log(comida1)

let numerosPares = [4,6,8];

numerosPares.unshift(2); // loagrega al principo del arreglo

//console.log(numerosPares);

// Imprimir una lista de compra 

let listaCompra = [['Pan', 5],['Carne', 9],['Huevos', 7],['Naranja', 8], ['politas', 30]];



 let listemePrimerProducto = "Fui a la tienda y compre " + listaCompra[0][1] + " unidades de " + listaCompra[0][0];
 let listemeSegundoProducto = "Fui a la tienda y compre " + listaCompra[1][1] + " unidades de " + listaCompra[1][0];
 let listemeTerceroProducto = "Fui a la tienda y compre " + listaCompra[2][1] + " unidades de " + listaCompra[2][0];
 let listemeCuartoProducto = "Fui a la tienda y compre " + listaCompra[3][1] + " unidades de " + listaCompra[3][0];
 let listemeQuintoProducto = "Fui a la tienda y compre " + listaCompra[4][1] + " unidades de " + listaCompra[4][0];


 console.log(listemePrimerProducto);
 console.log(listemeSegundoProducto);
 console.log(listemeTerceroProducto);
 console.log(listemeCuartoProducto);
 console.log(listemeQuintoProducto);

