//objetos literales = representacion en codigo de un objeto de la vida real

//estructura de objeto literal ==
let usuario = {}
usuario.nombre = "Lucas"

usuario.apellido = "Mendez"
console.log(usuario);
//se vera en consola un objeto literal
// { nombre: "lucas" }

const user = {
    name: "Andrey",
    lastname: "Bejarano"
}

user.age = 34
//user.name le cambiara el nombre al que querramos

let usuarios = {}
usuarios.name = "Jesus"
usuarios.saludo = function saludar(){
    return "Hola!"
}
console.log(usuarios)

//las funciones en objetos literales se llaman "METODOS"