import promptSync from "prompt-sync";
import Trabajador from "./Trabajador.js";

const prompt = promptSync();
let trabajadores = [];

function registrarTrabajador() {
    try {
        let nombre = prompt("Nombre: ");
        let horas = Number(prompt("Horas trabajadas: "));
        let pagoHora = Number(prompt("Pago por hora: "));

        let t = new Trabajador(nombre, horas, pagoHora);
        trabajadores.push(t);
        console.log("✅ Trabajador registrado con éxito");
    } catch (error) {
        console.log("❌ Error:", error.message);
    }
}

function mostrarTrabajadores() {
    if (trabajadores.length === 0) {
        console.log("No hay trabajadores registrados.");
        return;
    }
    console.log("\n--- LISTA DE TRABAJADORES ---");
    for (let t of trabajadores) {
        console.log(t.mostrarInfo());
    }
}


let opcion;
do {
    console.log("\n--- MENÚ ---");
    console.log("1. Registrar trabajador");
    console.log("2. Mostrar trabajadores");
    console.log("3. Salir");

    opcion = prompt("Elige una opción: ");

    switch (opcion) {
        case "1":
            registrarTrabajador();
            break;
        case "2":
            mostrarTrabajadores();
            break;
        case "3":
            console.log("Saliendo del sistema...");
            break;
        default:
            console.log("Opción inválida");
    }
} while (opcion !== "3");
