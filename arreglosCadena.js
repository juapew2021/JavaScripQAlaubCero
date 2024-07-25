// Arreglos [Arrays]

/* var myArreglo = ['Juan', 35];

console.log(myArreglo[1]); */

/* // Arreglos añadidos

var listaEstudiantes = [['juan', 78],['pedro', 76], ['maria', 45]];

//console.log(listaEstudiantes)

var arreglos = [[20], [30],[40]];

//console.log(arreglos[1])




var arreglosConJuan = [20,40,50, 'hola', 'pedro'];


let suma = [arreglosConJuan[1] + arreglosConJuan[3]];

//console.log(suma)

// Modificar un elemento en un arreglo

var arreglosConJuan = [20,40,50, 'hola', 'pedro'];

arreglosConJuan[2] = 3;

let suma1 = [arreglosConJuan[1] + arreglosConJuan[2]];

//console.log(suma1)

// Acceder arreglos multidimensionales

/* 
Arreglo :         [[1, 2, 3], [2, 4, 6],['ee','rrr','tttt', 'ooo']]
Indice:                0           1            2    
Indices Internos :  0  1  2    0  1  2     0     1    2       3
*/
/* let multiArreglos = [[1, 2, 3], [2, 4, 6],['ee','rrr','tttt', 'ooo']];

console.log(multiArreglos[0]); // [ 1, 2, 3 ]   
console.log(multiArreglos[1]); // [ 2, 4, 6 ]
console.log(multiArreglos[2]); // [ 'ee', 'rrr', 'tttt', 'ooo' ]

// Sacamos los indices internos 

console.log(multiArreglos[0][2]); //3
console.log(multiArreglos[2][3]); // ooo */
 




// arreglos 

//var listaEstudiantes = [andres, juanDavid, Mateo, JuanP];
/* let resultado;
var listaEstudiantes;

function suGrado(edad) {
    listaEstudiantes = [['juandavid', edad] , ['mateo', edad]];
    if (edad >= 1 && edad <= 4 ) {
        resultado = 'El estudiante esta el grado 8 ';
    }else if (edad >= 4 && edad <= 10 ) {
    resultado = 'El estudiante esta el grado 9 ';
    
     } 
}
suGrado(10);
console.log(resultado); */
// tipos de datos 
// int, string , numerico 

var listaPartesCuerpo = [['Juan', 'ojos', 'negros'], ['pedro', 'ojos', 'azules'], ['mateo', 'ojos', 'verdes']]

console.log("El estudiante tienen un color de ojos:", listaPartesCuerpo[2][2]);

const data = [
    [['id', 1], ['name','Netflix'], ['detail', 'Valor de subscripcion: $38.900']],
    [['id', 2], ['name','Amazon Prime'], ['detail', 'Valor de subscripcion: $22.900']],
    [['id', 3], ['name', 'Spotify'], ['detail','Valor de subscripcion: $16.900']]   
];

 console.log(data[0][2]);