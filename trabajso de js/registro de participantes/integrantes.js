const prompt = require("prompt-sync")();

class Integrante {
    #nombre;
    #edad;
    #altura;
    #sexo;

    constructor(nombre, edad, altura, sexo) {
        if (edad < 0) throw new Error("La edad no puede ser negativa");
        if (sexo !== 'M' && sexo !== 'F') throw new Error("El sexo debe ser M o F");

        this.#nombre = nombre;
        this.#edad = edad;
        this.#altura = altura;
        this.#sexo = sexo;
    }

    get edad() { return this.#edad; }
    get altura() { return this.#altura; }

    static capturarDatos() {
        let nombre = prompt("Nombre: ");

        let edad;
        do {
            edad = prompt("Edad: ");
            let numEdad = Number(edad);
            if (edad.trim() === "" || numEdad < 0 || !Number.isInteger(numEdad)) {
                console.log("Error: ingresa una edad válida");
                edad = null;
            } else {
                edad = numEdad;
            }
        } while (edad === null);

        let altura;
        do {
            altura = prompt("Altura (m): ");
            let numAltura = Number(altura);
            if (altura.trim() === "" || numAltura <= 0) {
                console.log("Error: altura inválida");
                altura = null;
            } else {
                altura = numAltura;
            }
        } while (altura === null);

        let sexo;
        do {
            sexo = prompt("Sexo (M/F): ").toUpperCase();
            if (sexo !== 'M' && sexo !== 'F') {
                console.log("Error: debe ser M o F");
                sexo = null;
            }
        } while (sexo === null);

        return new Integrante(nombre, edad, altura, sexo);
    }
}

module.exports = Integrante;
