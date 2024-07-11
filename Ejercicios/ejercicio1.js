/* Instrucciones:
---> Define una función llamada describePerson que acepte tres parámetros: name, age e interests.
---> Dentro de la función, usa un template literal para construir una cadena que incluya el nombre, la edad y los intereses de la persona.
La lista de intereses debe ser un arreglo y debe ser convertida a una cadena separada por comas.
--> Retorna la cadena completa desde la función.
Llama a la función con diferentes valores y muestra los resultados en la consola. */

// Primer paso : Define una función llamada describePerson que acepte tres parámetros: name, age e interests.

  /* Explicación:
    La función describePerson toma tres parámetros: name, age e interests.  */ 
function describePerson(name,age,interests) {
    

      /*     Segundo paso: Dentro de la función, el arreglo interests se convierte en una cadena separada por comas usando el método join. */

     /* Se utiliza un template literal para construir la cadena de descripción, incorporando los valores de name, age e interestsStr. */

    let interestsStr =  interests.join(',');

    // Tercer paso : Construye la descripción usando un template literal

    let description = `Hola, mi nombre es ${name}, tengo ${age} años y me interesan ${interests}.`;

  /*   Cuarto paso : La función retorna la cadena de descripción. */

    return description;
    
}
// Llamadas a la función con diferentes valores
/* Quinto paso: Finalmente, se llama a la función con diferentes conjuntos de valores y se muestran los resultados en la consola. */

let persona1 = describePerson("Juan", 41, ["billar", "bailar", "programar"]);
let persona2 = describePerson("Juan David", 20, ["conducir", "futbol", "programar"]);
let persona3 = describePerson("Mateo", 22, ["Hacer ejercicio", "Trabajador", "Programar"]);

// Muestra los resultados en la consola

console.log(persona3);
