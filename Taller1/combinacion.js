 const factorial=require("./factorial");

 /**
  * funcion de combinacion
  * @param {*} n numero total
  * @param {*} k numero usado en cada item
  */
 function combinacion(n,k){
     return (factorial(n)/(factorial(n-k)*factorial(k)));
 }

 module.exports = combinacion;