/* Proximo en la fila
En la informatica una cola ¨(queue) es una estructura de datos abstracta en la 
cual los elementos se mantienen en orden. Los nuevos elementos se añaden al final
de la cola y los elementos previos se retiran del principio de la cola.

/* Definir una funcion proximoEnLaFila que tome un arreglo y un numero como argumento.
agregue un numero al final del arreglo y luego elimina el primer elemento del arreglo, 
La funcion proximoEnLaFila debe retornar el elemento que fue removido

1. Paso definir una funcion que la vas a llamar proximoEnLaFila
2. Esa funcion va tenber dos parametros (Dentro de los parentesis de la función)
(arreglo, elemento)
3. Dentro la función ahi que hacer dos acciones 
   1. Agregar un numero  en el arreglo
   2. Quitar un nuemero en el arreglo
4. Debe retornar el elemento que fue removido : Se tiene que imprimir el numero removido 
   eg: return numeroremovido
*/
function proximoEnLaFila(arreglo,elemento) {

     arreglo.push(elemento); // Agregamos un numero al final 
     return arreglo.shift();  // nos retorna el valor quitado
      //miarreglo = [1, 2, 3, 4, 5]       
}
let miArreglo = [1, 2, 3, 4, 5];

console.log("Antes: " + JSON.stringify(miArreglo));
console.log(proximoEnLaFila(miArreglo,7));
console.log("Despues" + JSON.stringify(miArreglo));

// vamos 























/* function proximoEnLaFila(arreglo, elemento) {

    arreglo.push(elemento); // Se agrega un numero al final del arreglo
    return arreglo.shift(); // Quite el primer elemento

    //miArreglo = [1,2,3,4,5];
   
}
let miArreglo = [1,2,3,4,5];
console.log("Antes: " + JSON.stringify(miArreglo));

console.log(proximoEnLaFila(miArreglo,9));

console.log("Después: " + JSON.stringify(miArreglo)); */