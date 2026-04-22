class Persona {
    #edad;
    constructor(edad) {
        this.#edad = edad;
    }
    set edad(nuevaEdad) {
        if (nuevaEdad > 0) {
            this.#edad = nuevaEdad;
        } else {
            console.log("Edad no válida");
        }
    }
    get edad() {
        return this.#edad;
    }
}

const p = new Persona(25);

p.edad = 30;   // ✅ Setter lo acepta → cambia a 30
console.log(p.edad); // 30

p.edad = -5;   // ❌ Setter lo rechaza → "Edad no válida"
console.log(p.edad); // sigue siendo 30
