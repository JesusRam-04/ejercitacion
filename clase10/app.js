const bikes= require("./datosBici.js");

const dhBici = {
    bicicletas: bikes.bikes,
    buscarBici : function (id){
        return this.bicicletas.find((bici) => bici.id === id) || null;
    },
    venderBici : function (id){
        const bici = this.buscarBici(id);
        if(!bici) return "Bicicleta no encontrada.";
        this.bicicletas.forEach((bici) => {
            if (bici.id === id) bici.vendida = true;
          });
          bikes.guardarDatos(this.bicicletas);
          return bici;
    },
    biciParaLaVenta : function () {
        return this.bicicletas.filter(bike => bike.vendida === false);
    },
    totalDeVentas : function (){
        const vendidas = this.bicicletas.filter(bike => bike.vendida === true)
        return vendidas.reduce((acum,bici) => acum+bici.precio, 0);
    }
};

console.log(dhBici.biciParaLaVenta())

console.log(dhBici.venderBici(2))

console.log(dhBici.biciParaLaVenta())

console.log(dhBici.totalDeVentas())