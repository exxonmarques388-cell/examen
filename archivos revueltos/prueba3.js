class Persona {
    #edad;
    constructor(edad) {
        this.#edad = edad;
    }
    get edad() {
        return this.#edad;
    }
}

const p = new Persona(25);
console.log(p.edad); // 25
