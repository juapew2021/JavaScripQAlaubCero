const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin ,
  output: process.stdout
});

rl.question('Ingresa el primer número sr: ', (input1) => {
  const numero1 = parseFloat(input1);

  rl.question('Ingresa el segundo número sr : ', (input2) => {
    const numero2 = parseFloat(input2);

    var suma = numero1 + numero2; console.log(suma);
    var resta = numero1 - numero2; console.log(resta);
    var multiplicacion = numero1 * numero2; console.log(multiplicacion);
    var division = numero1 / numero2; console.log(division);

    rl.close();
  });
});