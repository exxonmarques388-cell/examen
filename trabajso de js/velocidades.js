class Velocidades {
    #nombre;
    #velocidades

    constructor(nombre, Velocidades) {
        this.#nombre = nombre;
        this.#velocidades = Velocidades;
    }

    // método privado
    #validarVelocidad(valor) {
        if (valor >= 1 && valor <= 180) {
            this.#velocidades= valor;
        } else {
            console.log("esto no esta permitido");
        }
    }

    // Getter
    get obtenervel() {
        return this.#velocidades;
    }

    // Setter
    set newvel(vel) {
        this.#validarVelocidad(vel);
    }

    mostrarInformacion() {
        console.log(`El conductor es ${this.#nombre} y su velocidad es ${this.#velocidades}`);
    }
}

// Crear instancias
const conductor1 = new Velocidades("Luis", 78);
const conductor2 = new Velocidades("Pablo", 80);


conductor1.newvel = 120;   
console.log(conductor1.obtenervel); 
conductor1.mostrarInformacion();

conductor2.newvel = 200;   
console.log(conductor2.obtenervel);

conductor2.mostrarInformacion();
