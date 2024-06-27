// Arreglos [Arrays]

var myArreglo = ['Juan', 35];

//console.log(myArreglo)

// Arreglos añadidos

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
let multiArreglos = [[1, 2, 3], [2, 4, 6],['ee','rrr','tttt', 'ooo']];

console.log(multiArreglos[0]); // [ 1, 2, 3 ]   
console.log(multiArreglos[1]); // [ 2, 4, 6 ]
console.log(multiArreglos[2]); // [ 'ee', 'rrr', 'tttt', 'ooo' ]

// Sacamos los indices internos 

console.log(multiArreglos[0][2]); //3
console.log(multiArreglos[2][3]); // ooo
