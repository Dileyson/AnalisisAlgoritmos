/**
 * Veinte países mantienen relaciones diplomáticas, cada país tiene un embajador en los
otros países. Indique la cantidad de embajadores que hay en total.
 */

function ejercicio4(){
    var embajadores=0;
    for(var i=0; i<20;i++){
        for(var j=0;j<19;j++){
            embajadores+=1;
        }
    }
    return embajadores;
}

console.log(ejercicio4());