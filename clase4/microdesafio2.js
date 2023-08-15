
let pagoMes = 12000

//-----------------//

let consumoKWH = 450

//-----------------//

consumoKWH > 300 ? pagoMes = (((pagoMes*20)/100) + pagoMes) : pagoMes;

//-----------------//

if (consumoKWH > 300) {
   console.log("Debido a que su hogar tuvo un consumo de " + consumoKWH + "kwh, en base al ajuste tarifario hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%),cumplimos con informarle que se ha ajustado el total a pagar, que será de $" + pagoMes);
}

else{
   console.log("Total a pagar: $" + pagoMes)
}