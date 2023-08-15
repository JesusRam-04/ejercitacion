// Variables

// var
var miVariable = "Hola Mundo!";

// let
let otraVariable = "Otro hola mundo";

// let puede ser local o global y var es global
// scope / ambito / bloque: local o global
let var1 = "un valor";
{
    let var1 = "otra valor";

    {
        console.log(var1); // otro valor
    }
}
// var nombre = "Facu";
// var nombre = "Emanuel";
// Esto no tira error lo que resulta incomodo

console.log(var1); // un valor

// Tipado debil
let numero = 10;
numero = "diez";

// ECMASCRIPT 6 (2015)

// const
const  PI = 3.14;
// PI = 3.1416;
const VELOCIDAD_DE_LA_LUZ = 300;
// const camelCase = "";

let x = "Facu";
let y = "Erbin";

// Tipos de datos
// String
// Si está entre comillas
// "" '' ``
//let nombre = "Facu";
//console.log(`Mi nombre es Facu`)

// Number
//console.log(10.5);

// Boolean
//console.log(true, false);

// Array
// Si esta entre corchetes 

// Objeto literal
//const persona = {
  //  nombre: "Facu",
  // apellido: "Erbin",
  // edad: 28
// };

//console.log(persona);

// Especiales
// console.log(console.log(10/0));
// console.log(infinity, NaN, undefined, null);
// console.log(typeof...); consulta tipo de dato

// console.log(3 ** 2); Potencia
