//Destructuring y Spread Operator

//la destructuracion tiene el obj de copiar o extraer los valores
//de una manera mas practica y rapida de un array

const numeros = [5, 6, 7, 8]
const [primero, segundo, ...resto] = numeros;

//primero = 5
//segundo = 6
//resto = 7, 8

//const resto = numeros.filter((num, index) => index > 1);

const auto = {
    id: 1,
    marca: "ford",
    modelo: "fiesta",
    anio: 2022,
    color: "azul"
}
// const marca = auto.marca;
// const color = auto.color;
// const modelo = auto.modelo;

// const {marca, color, modelo} = auto;
const {marca: marcaAuto, color, modelo} = auto;

// spread operator es copiar o clonar las propiedades de un objeto en otro

// const autoPepe = {
//     id: auto.id,
//     marca: auto.marca,
//     modelo: auto.modelo,
//     anio: auto.anio,
//     color: auto.color
// }
// en este caso de no se estaria clonando sino mas bien estamos creando el mismo objeto dos veces

const autoPepe = {...auto, id: 2, cantPuertas: 4, pais: "Brazil"};
// aca se estan creando dos objetos totalmente independientes

let coloresPrimarios = ["rojo", "azul", "amarillo"];
let otrosColores = [...coloresPrimarios, "violeta", "verde", "morado"];
