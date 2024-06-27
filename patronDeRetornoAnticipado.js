/* function miFucntion() {
    console.log("Hola");
    return "Mundo";
    console.log("Adios");
    
}
console.log(miFucntion()); */

// Otro Ejemplo
/* function raizCuadradaDeUnNumero(num) {

    if (num <= 0){

    return undefined;
    }
    return Math.sqrt(num);
    
} */
//console.log(raizCuadradaDeUnNumero(0));

// Software FUncioón cortas cartas 
/*
* Cuando el conteo es positivo, el jugador deberia apostar alto. 
* Cuando el conteo es 0 o negativo, el jugador deberia apostar bajo
* La función debe tomar un parametro Carta que puede ser un numero o una cadena de caracteres
y luego aumentar o reducir el valor de la variable global 
* La funcion debe retornar una cadena de caracteres con el conteo actual y la cadena:
- "Apostar" si el conteo es positivo
- "Esperar" Si el conteo es negativo
* El conteo actual y la decisión del jugador ("Apostar" o "esperar") debe estar separados por un 
espacio 

''''''''''''''''''''''''''''''''''''''''''''''''
Cambio del conteo           cartas
________________________________________________
        +1                  2, 3, 4
         0                  7, 8, 9
        -1                  10, J, H, P
*/
var conteo = 0;
function contarCartas(carta) {
    var decision;
    switch (carta) {
        case 2:
        case 3:
        case 4:
            conteo++;
            break;
        case 10:
        case "J":
        case "H":
        case "P":
            conteo--;
            break;
    }
    if (conteo > 0) {
        decision = "Apostar";

       } else {
        decision = "Esperar";
    }
    return conteo + " " + decision;
}
console.log(contarCartas(2));
console.log(contarCartas(3));
console.log(contarCartas(4));
console.log(contarCartas(10));
console.log(contarCartas("J"));
console.log(contarCartas("H"));
console.log(contarCartas("P"));