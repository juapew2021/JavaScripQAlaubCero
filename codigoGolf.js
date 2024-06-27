/*
En el juego de golf cada hoyo tiene un
par que representa el número promedio
de golpes que se espera que haga un golfista
para introducir la pelota en el hoyo.

Hay un nombre diferente dependiendo de que
tan por encima o por debajo del par esten
tus golpes.

Retorna la cadena correcta según esta tabla
que muestra los golpes en orden de mayor a menor
prioridad:

Golpes      Retornar
---------------------
1           "Hole-in-one!"
<= par -2   "Eagle"
par - 1     "Birdie"
par         "Par"
par + 1     "Bogey"
par + 2     "Double Bogey"
>= par + 3  "Go Home!"

par y golpes siempre seran numéricos
y positivos.

function puntajeDeGolf
*/

/* function puntajeDeGolfpar(par, golpes) {

    if (golpes == 1) {
        return "Hole-in-one!";
    } else if (golpes <= par - 2) {
        return "Eagle";
    }else if (golpes == par){
        return "Birdie";

    }else if (golpes == par -1){
        return "Par";
    }
}
console.log(puntajeDeGolfpar(4, 1)); */
