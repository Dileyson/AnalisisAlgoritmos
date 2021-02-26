/**
 * Crear un array números aleatorios. El tamaño del array lo debe de ingresar el usuario.
 */

 var array = [];

/**
 * 
 * @param {*} tamañof tamaño deseado del array
 */

 function arrayAleatorio(tamañof){
     if(tamañof==0){
         return array;
     }else{
        array.push(Math.random()*10);
        return arrayAleatorio(tamañof-1);  
     }
     
 }

const readline = require("readline");

var datoTeclado=readline.createInterface({input:process.stdin, output:process.stdout});
datoTeclado.question("tamaño del array", function(dato){
    console.log(arrayAleatorio(parseInt(dato)));
    datoTeclado.close();
});