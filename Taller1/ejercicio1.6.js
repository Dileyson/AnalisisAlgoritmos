/**
 * Un restaurante de fideos ofrece 5 tipos de fideos para elegir. Cada plato viene con una
de 4 carnes y una de 6 salsas diferentes a elección. ¿Cuántas combinaciones se pueden
hacer?
 */

function ejercicio5(){
    var combinaciones= 0;
    for(var i=0;i<5;i++){
        for(var j=0;j<4;j++){
            for(var k=0;k<6;k++){
                combinaciones+=1;
            }
        }
    }
    return combinaciones;
}

console.log(ejercicio5());