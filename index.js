// Variables y tipos de datos

let nombre = "Ana"; //Cadena de texto String
let edad = 25; //Número entero Integer
const PI = 3.14; //Constante

//Operadores

//let resultado = 5 / 2; //Va a salir un Double 2.5

let resultado = 5 / 2; 
let resultadoDouble = parseFloar(resultado) //Convertir a double de forma explícita
console.log(resultadoDouble);

let x = 10;
let y = 5;

let suma = x + y;
let resta = x - y;
let multiplicacion = x * y;
let division = x / y;

console.log(suma);

//Condicionales

let hora = 10;

if (hora < 12) {
    console.log("Buenos días");
} else {
    console.lot("Buenas tardes");
}

//Operador ternario

let hora2 = 10;

let mensaje = (hora < 12)? "Buenos días" : "Buenas tardes";
console.log(mensaje);

//Bucles

for (let i=0; i < 5; i++){
    console.log("Número: " + i);
}