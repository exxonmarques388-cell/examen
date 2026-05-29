const prompt = require("prompt-sync")();
const Integrante = require("./Integrante");
const { promedioAltura, promedioEdad } = require("./Estadisticas");

let n = Number(prompt("¿Cuántos participantes?: "));
let participantes = [];

for (let i = 0; i < n; i++) {
    console.log("\nParticipante " + (i + 1));
    participantes.push(Integrante.capturarDatos());
}

console.log(" RESULTADOS ");
console.log("Promedio de altura:", promedioAltura(participantes));
console.log("Promedio de edad:", promedioEdad(participantes));
