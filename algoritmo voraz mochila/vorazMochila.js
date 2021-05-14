
//algoritmo voraz de la mochila
function VorazMochila(pesoMaximo, elementos){
    var pesoActual = 0;
    var mochila = [];

    for (var i = 0; i < elementos.length; i++){
        elementos[i].Precio = (elementos[i].valor/elementos[i].Peso).toFixed(2)
    }

    elementos = elementos.sort((a, b) => b.Precio - a.Precio)
    
    for (var j = 0; j < elementos.length; j++) {
        if(pesoActual < pesoMaximo){
            if((pesoMaximo - pesoActual) >= elementos[j].Peso){     
                elementos[j].Cantidad++;
            }else{
                elementos[j].Cantidad = ((1/elementos[j].Peso)*(pesoMaximo - pesoActual)).toFixed(1) 
            }
            pesoActual += elementos[j].Peso;
            mochila.push(elementos[j]);
        }     
    }
    return mochila
};

//valor total de los productos que se ingresan a la mochila
function ValorTotal(mochila){
    var valorTotal = 0;
    for (var i = 0; i < mochila.length; i++) {
        valorTotal += Math.round(mochila[i].valor * mochila[i].Cantidad);
    }
    return valorTotal
}

//peso total que se ingresa a la mochila
function PesoTotal(mochila){
    var pesoTotal = 0;
    for (var i = 0; i < mochila.length; i++) {
        pesoTotal += Math.round(mochila[i].Peso * mochila[i].Cantidad);
    }
    return pesoTotal
}

//elemento que se ingresa a la mochila
function Elemento(mochila){

    console.log("Peso Total: ", PesoTotal(mochila));
    console.log("Valor Total: ", ValorTotal(mochila));
    console.log(mochila);
}

//peso maximo de la mochila(en toneladas)
var pesoMaximo = 25;
//elementos a elegir ingresar a la mochila(peso en toneladas, valor en miles de dolares)
var elementos = [
{ Codigo: "1", Peso: 8, valor:  20, Precio: 0, Cantidad: 0},
{ Codigo: "2", Peso: 5, valor: 25, Precio: 0, Cantidad: 0},
{ Codigo: "3", Peso:  12, valor: 36, Precio: 0, Cantidad: 0},
{ Codigo: "4", Peso:  7, valor: 28, Precio: 0, Cantidad: 0},
{ Codigo: "5", Peso: 3, valor: 40, Precio: 0, Cantidad: 0},
];

final = (VorazMochila(pesoMaximo, elementos));
console.log(Elemento(final));