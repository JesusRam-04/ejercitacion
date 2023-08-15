const collectibles = require('./collectibles');

const figurasHotToys = collectibles.importar('1'); 
const figurasBandai = collectibles.importar('2'); 
const figurasStarWars = collectibles.importar('3');

const unifiedCollectibles = [...figurasBandai, ...figurasHotToys, ...figurasStarWars];
const coleccion = {figuras: unifiedCollectibles,
listFigures() {
    this.figuras.forEach(figura => {
      console.log(`Marca: ${figura.marca}, Nombre: ${figura.nombre}, Precio: $${figura.precio}, Stock: ${figura.stock}`);
    });
  },
  figuresByBrand(marca) {
    return this.figuras.filter(figura => figura.marca === marca);
  }
};

console.log(coleccion.figuresByBrand("Hot Toys"))