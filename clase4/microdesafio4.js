let numero1 = 7
let numero2 = 9

let operador = "+"

switch (operador){
    case "+":
    console.log(numero1 + numero2);
    break

    case "-":
    console.log(numero1 - numero2);
    break

    case "*":
    console.log(numero1 * numero2);
    break

    case "/":
    console.log(numero1 / numero2);
    break

    default:
    console.log("Los operadores validos son: suma(+), resta(-), multiplicacion(*), division(/)");
    break
}