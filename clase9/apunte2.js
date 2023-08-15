//Sistemas de modulos = bloque de codigo reutilizable


//Tres tipos de modulos:

// nativos: Vienen preinstalados cuando instalamos Node.js
// de terceros: podemos instalarlos usando el administrador de paquetes, llamado NPM
// creados: los que creamos nosotros

const fs = require("fs");

// fs.readFileSync();

//npm i ... (ej: moment) para instalar modulos

const moment = require("moment");

console.log(moment.now());

//como exportar librerias:...    (mas info en archivo "utils")
const utils = require("./utils");
const path = require("path");
const files = require("./files");

const logs = files.getContentFile(path.resolve(__dirname, "logs.txt"))
console.log(logs);
