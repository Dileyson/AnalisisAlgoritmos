/**
 * Sofia trabaja en una tienda de ropa. Se le ha asignado la tarea de vestir a un maniquí
con una falda, una blusa y un par de zapatos de una exposición de faldas, blusas y
zapatos que hacen juego. Ya que todas las prendas combinan, ella puede elegir
cualquier blusa, cualquier falda y cualquier par de zapatos y el atuendo se verá bien. Si
hay 3 faldas, 5 blusas y 2 pares de zapatos, ¿De cuántas maneras distintas puede vestir
al maniquí?\

 */


function ejercicio5(){
    var formas= 0;
    for(var i=0;i<3;i++){
        for(var j=0;j<5;j++){
            for(var k=0;k<2;k++){
                formas+=1;
            }
        }
    }
    return formas;
}

console.log(ejercicio5());