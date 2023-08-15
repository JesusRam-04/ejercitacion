const fs = require('fs');
const path = require('path');

// Armo la ruta absoluta del archivo que quiero leer
const pathFileBikes = path.resolve(__dirname, 'bicicletas.json');
// Leo el archivo con FS y almaceno su contenido en una variable
const fileBikes = fs.readFileSync(pathFileBikes, 'utf-8');
// Despues tengo q convertir ese contenido que me viene como string a un Array|Object sefun el caso para poder tratarlo con JS
const bikes = JSON.parse(fileBikes);

module.exports = bikes;

const guardarDatos = function (datosBici) {
    fs.writeFileSync("./bicicletas.json", JSON.stringify(datosBici, null, 4));
  };
  
  module.exports = { bikes, guardarDatos };