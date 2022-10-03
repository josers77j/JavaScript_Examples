var aleatorios;
var min, max, cantidad;
var disparador, listado;
//line
function init(){
    aleatorios = [];
// prueba
    min = parseInt(prompt('ingrese el limite inferior',''));
    max = parseInt(prompt('ingrese el limite superior',''));
    cantidad = parseInt(prompt('indique la cantidad de numeros aleatorios a generar',''));

    disparador = document.getElementById("generador");
    listado = document.getElementById("listanumeros");

    if (disparador.addEventListener) {
        disparador.addEventListener('click',function(evt){
            aleatorio(min,max,cantidad);
            listado.innerHTML = "los numeros aleatorios son: " + aleatorios.toString();
        },false);
    }else if(disparador.attachEvent){
        disparador.attachEvent('onclick',function(evt){
            aleatorio(min,max,cantidad);
            listado.innerHTML = "los numeros aleatorios son: "+ aleatorios.toString();
        });
    }
}   

function aleatorio(minimo,maximo,cantidad){
    var numero = Math.floor(Math.random()*(maximo-minimo+1))+minimo;
    if(aleatorios.length < cantidad){
        aleatorios.push(numero);
        aleatorio(minimo,maximo,cantidad);
    }
}
window.onload = init;