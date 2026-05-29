class Trabajador {
    #nombre;
    #horas;
    #pagoHora;

    constructor(nombre, horas, pagoHora) {
        if (horas < 0 || pagoHora < 0) {
            throw new Error("Horas y pago por hora deben ser positivos");
        }
        this.#nombre = nombre;
        this.#horas = horas;
        this.#pagoHora = pagoHora;
    }

   
    get nombre() { return this.#nombre; }
    set nombre(n) { this.#nombre = n; }

    get horas() { return this.#horas; }
    set horas(h) {
        if (h < 0) throw new Error("Horas inválidas");
        this.#horas = h;
    }

    get pagoHora() { return this.#pagoHora; }
    set pagoHora(p) {
        if (p < 0) throw new Error("Pago inválido");
        this.#pagoHora = p;
    }

  
    get sueldoBruto() {
        return this.#horas * this.#pagoHora;
    }

    get descuento() {
        return this.sueldoBruto * 0.10;
    }

    get sueldoFinal() {
        return this.sueldoBruto - this.descuento;
    }

    mostrarInfo() {
        return `
        Nombre: ${this.#nombre}
        Horas: ${this.#horas}
        Pago por hora: $${this.#pagoHora}
        Sueldo bruto: $${this.sueldoBruto}
        Descuento (10%): $${this.descuento}
        Sueldo final: $${this.sueldoFinal}
        `;
    }
}

export default Trabajador;
