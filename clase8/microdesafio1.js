
const cursosYprecios = [
  ["html5", 4000],
  ["css3", 5000],
  ["javascript", 10000],
  ["react", 7000],
  ["nodejs", 15000]
];


const cursosSeleccionados = ["html5", "css3", "javascript", "react", "nodejs"];


function calcularMontoTotal(cursosYprecios, cursosSeleccionados) {
  let totalPagar = 0;

  for (const curso of cursosSeleccionados) {
    const cursoEnMayusculas = curso.toUpperCase();
    const precio = cursosYprecios.find(c => c[0] === cursoEnMayusculas);

    if (precio) {
      totalPagar += precio[1];
    }
  }

  return totalPagar;
}


function calcularMontoTotalAlumno(nombre, apellido, cursosYprecios, cursosSeleccionados) {
  const montoTotal = calcularMontoTotal(cursosYprecios, cursosSeleccionados);
  const nombreCompleto = `${nombre} ${apellido}`;
  return {
    nombreCompleto,
    montoTotal
  };
}


const nombreAlumno = "Jesus";
const apellidoAlumno = "Ramirez";

const resultado = calcularMontoTotalAlumno(nombreAlumno, apellidoAlumno, cursosYprecios, cursosSeleccionados);

console.log(`Estimado ${resultado.nombreCompleto}, en función de los cursos seleccionados:`);
for (let i = 0; i < cursosSeleccionados.length; i++) {
  console.log(`${i + 1}.- ${cursosSeleccionados[i]}`);
}
console.log(`El monto total a pagar es de: $${resultado.montoTotal}.`);
console.log("Bienvenido a la gran aventura Digital House.");