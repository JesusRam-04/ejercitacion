const fs = require('fs');
const path = require('path');

function importar(nombreMarca) {
    const archivo = path.join(__dirname, 'datos', `figuras${nombreMarca}.json`);
        const contenido = fs.readFileSync(archivo, 'utf-8');
        const figuras = JSON.parse(contenido);
        return figuras;
}

module.exports = {importar};