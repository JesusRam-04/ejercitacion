// Carne = $1800
// Pollo = $1500
// Vegetariana = $1200

// Jamon = $30
// Queso = $25
// Ketchup = $5
// Mayonesa = $5
// Tomate = $15
// Lechuga = $10
// Cebolla = $10

function callback (tipoHamburguesa, jamon, queso, ketchup, mayonesa, mostaza, tomate, lechuga, cebolla){

    let precioFinal = 0

    switch(tipoHamburguesa){
        case "Carne":
        precioFinal += 1800
        break
            case "Pollo":
            precioFinal += 1500
            break
                case "Vegetariana":
                precioFinal += 1200
                break    
    }

if(jamon == true){
    precioFinal += 30
}
if(queso == true){
    precioFinal += 25
}
if(ketchup == true){
    precioFinal += 5
}
if(mayonesa == true){
    precioFinal += 5
}
if(mostaza == true){
    precioFinal += 5
}
if(tomate == true){
    precioFinal += 15
}
if(lechuga == true){
    precioFinal += 10
}
if(cebolla == true){
    precioFinal += 10
}

return precioFinal

}
// jamon, queso, ketchup, mayonesa, mostaza, tomate, lechuga, cebolla

function mensaje(nombre, apellido, tipoHamburguesa, jamon, queso, ketchup, mayonesa, mostaza, tomate, lechuga, cebolla){
    let precioFinal = callback (tipoHamburguesa, jamon, queso, ketchup, mayonesa, mostaza, tomate, lechuga, cebolla)
    let total = "Estimad@ " + nombre + apellido + ", el monto total a pagar es de: $" + precioFinal
    return total
}



console.log(mensaje("Jesus", " Ramirez", "Carne", false, false, false, false, false, true, true, false))
