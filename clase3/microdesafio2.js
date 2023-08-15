let nombre = "Jesus"
let apellido = "Ramirez"
let sueldoActual = 20000
let porcentajeAumento = 25

//------------------------//

let calculoAumento = ((sueldoActual*porcentajeAumento)/100);

//------------------------//

let nuevoSueldo = calculoAumento + sueldoActual;

//------------------------//

console.log("Hola, estimad@ " + nombre + apellido);
console.log("En base a su sueldo actual:");
console.log(sueldoActual);

console.log("Ha recibido un aumento del " + porcentajeAumento + "%:");
console.log(calculoAumento);

console.log("y su nuevo sueldo es de: $" + nuevoSueldo);