/**
 * funcion recursiva de factorial
 * @param {*} numero a sacar factorial
 */

function factorial(numero){
    if (numero==0){
        return 1;
    }
    return numero*factorial(numero-1);
};

module.exports = factorial;