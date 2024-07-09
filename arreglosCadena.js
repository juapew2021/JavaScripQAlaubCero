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




let curso;

function determinarCurso(edad) {

    if (edad === 5) {
        curso = "Kinder";
    } else if (edad === 6) {
        curso = "Primero de primaria";
    } else if (edad === 7) {
        curso = "Segundo de primaria";
    } else if (edad === 8) {
        curso = "Tercero de primaria";
    } else if (edad === 9) {
        curso = "Cuarto de primaria";
    } else if (edad === 10) {
        curso = "Quinto de primaria";
    } else if (edad === 11) {
        curso = "Sexto de primaria";
    } else if (edad === 12) {
        curso = "Séptimo grado";
    } else if (edad === 13) {
        curso = "Octavo grado";
    } else if (edad === 14) {
        curso = "Noveno grado";
    } else if (edad === 15) {
        curso = "Décimo grado";
    } else if (edad === 16) {
        curso = "Undécimo grado";
    } else if (edad === 17) {
        curso = "Duodécimo grado";
    } else {
        curso = "Edad fuera de rango para cursos estándar";
    }
    return curso;
}

const estudiantes = [
    { nombre: "juan", edad: 8 },
    { nombre: "mateo", edad: 17 },
    { nombre: "Luis", edad: 26 },
    { nombre: "María", edad: 13 }
];

for (let estudiante of estudiantes) {
    let curso = determinarCurso(estudiante.edad);
    console.log(`El estudiante ${estudiante.nombre}, de ${estudiante.edad} años, está en ${curso}.`);
}

