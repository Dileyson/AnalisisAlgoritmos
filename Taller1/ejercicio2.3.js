/**
 * Escribe una función recursiva que dado un número entero n, retorne un array con todos
los números enteros en orden decreciente desde n a 1.
 */

var array=[];

function numerosDecrecientes(numerof){
    if (numerof==0){
        return array;
    }else{
        array.push(numerof);
        return numerosDecrecientes(numerof-1);
    }
}


const readline = require("readline");

var datoTeclado=readline.createInterface({input:process.stdin, output:process.stdout});
datoTeclado.question("numero dado", function(dato){
    console.log(numerosDecrecientes(parseInt(dato)));
    datoTeclado.close();
});