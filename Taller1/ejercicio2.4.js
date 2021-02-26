/**
 * Escribir un programa que encuentre la suma de los enteros positivos pares desde N hasta
2. Comprobar que si N es impar se imprima un mensaje de error.
 */

var suma=0;


function sumaPares(numerof){
    if(numerof%2!=0){
        return "El numero ingresado no es par";
    }else{
        if(numerof==0){
            return 0;
        }else{
            return numerof + sumaPares(numerof-2);
        }
    }
}

const readline = require("readline");

var datoTeclado=readline.createInterface({input:process.stdin, output:process.stdout});
datoTeclado.question("numero dado", function(dato){
    console.log(sumaPares(parseInt(dato)));
    datoTeclado.close();
});