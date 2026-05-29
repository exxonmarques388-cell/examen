class Estudiante {
    #nombre;
    #calificaciones;

    constructor(nombre, calificaciones) {
        this.#nombre = nombre;
        this.#calificaciones = calificaciones;
    }

    // método privado
    #validarCalificacion(valor) {
        if (valor >= 70 && valor <= 100) {
            this.#calificaciones = valor;
        } else {
            console.log("Reprobado");
        }
    }

    // Getter
    get obtenerCal() {
        return this.#calificaciones;
    }

    // Setter
    set newCalificacion(cal) {
        this.#validarCalificacion(cal);
    }

    mostrarInformacion() {
        console.log(`El estudiante es ${this.#nombre} y su calificación es ${this.#calificaciones}`);
    }
}

// Crear instancias
const estudiante1 = new Estudiante("Luis", 78);
const estudiante2 = new Estudiante("Pepe", 66);

// Probar métodos
estudiante1.newCalificacion