/* Secuencias de Escape

Código \\ Resultado
--------------------
   \'        Comilla simple 
   \"        Comilla Doble
   \\        Barra Invertida
   \n        Linea Nueva
   \r        Retorno de carro
   \t        Tabulacion
   \b        Retroceso 
   \f        Salto de pagina
   ...
   */

   var saltoLinea = "Estoy aprendiendo a programar: \n JavaScript paquito";

   console.log(saltoLinea)

   var leguajeProgramacion = "JavaScript";

   var queEstudias = "que haces ahora? " + saltoLinea ;
   console.log(queEstudias)

   var resultadoLargo = 400 + 600;
   var resultadoOperacion = 500 + resultadoLargo ;

   console.log(resultadoOperacion)

   var parteInicial = "Vamos todos al: ";
   var parteFinal = 'Parque';

   parteInicial += parteFinal;

   console.log(parteInicial)

