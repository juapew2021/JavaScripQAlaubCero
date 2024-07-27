/* Instrucciones:
Define una función llamada checkEligibility que acepte tres parámetros: name, age y skills.
Dentro de la función, usa una estructura if para verificar si la edad es menor de 18. Si es así, retorna un mensaje indicando que la persona no es elegible debido a la edad.
Si la edad es 18 o mayor, verifica si la persona tiene al menos una de las habilidades requeridas.
Si la persona tiene alguna de las habilidades requeridas, retorna un mensaje indicando que la persona es elegible.
Si no tiene ninguna de las habilidades requeridas, retorna un mensaje indicando que la persona no es elegible debido a la falta de habilidades.
Llama a la función con diferentes valores y muestra los resultados en la consola. */

// Define una función llamada checkEligibility que acepte tres parámetros: name, age y skills.

function checkEligibility(name, age, skills) {

    // Dentro de la función, usa una estructura if para verificar si la edad es menor de 18. Si es así, retorna un mensaje indicando que la persona no es elegible debido a la edad.
    if (age < 18) {
        
        return `Lo siento, ${name}. No eres elegible por que tienes menos de 18 años`
    }
    // Si la edad es 18 o mayor, verifica si la persona tiene al menos una de las habilidades requeridas.

    // lista de habilidades requeridas .
    const requiredSkills = ["JavaScript", "Html 5", "sql"];
    
    // Verifica si la persona tiene al menos una de las habilidades requeridas

    let hasRequireSkills = skills.some(skills => requiredSkills.includes(skills));

    // Retorna un mensaje basado en las habilidades

    if (hasRequireSkills) {
        return `Felicidades, El sr(a) ${name}. Eres elegible para el trabajo`; // Si no tiene ninguna de las habilidades requeridas, retorna un mensaje indicando que la persona no es elegible debido a la falta de habilidades.
    }else {
        return `Lo siento, ${name}. No eres elegible por que no tienes ninguna de las habilidades requeridas`;
    }
      
}
// Llama a la función con diferentes valores y muestra los resultados en la consola

let persona1 = checkEligibility("Mateo", 22, ["Html", "css", "JavaScript"]);
let persona2 = checkEligibility("Juan David", 20, ["Python","Java","ruby"]);
let persona3 = checkEligibility("Diego", 30, ["JavaScript","Html 5","sql"]);

// Muestra los resultados en la consola
console.log(persona1);
console.log(persona2);
console.log(persona3);