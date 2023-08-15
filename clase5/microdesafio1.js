
// Compacto = $14k
// Mediano = $17k
// Camioneta = $28k
// Silla = $1200

function alquilarVehiculo (tipoDeVehiculo, diasDeAlquiler, sillaBebe){
    let precioFinal
    switch (tipoDeVehiculo){
        case "Compacto":
             precioFinal = 14000 * diasDeAlquiler
             break
            case "Mediano":
                 precioFinal = 17000 * diasDeAlquiler
                 break
                case "Camioneta":
                     precioFinal = 28000 * diasDeAlquiler
                     break
                     default:
                        return "Elegir entre: Compacto, Mediano o Camioneta"
                        break
    }

    let mensaje = `Estimado cliente: con base en el tipo de vehículo ${tipoDeVehiculo} alquilado, considerando los ${diasDeAlquiler} días utilizados`;

    if(sillaBebe == true){
        precioFinal = ((1200 * diasDeAlquiler) + precioFinal);
        mensaje += ', ademas pediste una silla para bebe';
    }
    mensaje += " su precio final sera: $" + precioFinal
        return mensaje
}

console.log(alquilarVehiculo('Mediano', 10, true));
console.log(alquilarVehiculo('Camioneta', 10, true));
console.log(alquilarVehiculo('Compacto', 10, false));
console.log(alquilarVehiculo('Camion', 10, true));