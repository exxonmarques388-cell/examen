class Empleado {
    #RFC;
    #nombre;
    #horasextra;
    #pagohoraextra;

    constructor(RFC, nombre, horasextra, pagohoraextra) {
        if (!RFC || RFC.length <= 4) {
            throw new Error("RFC inválido, se requieren más de 4 caracteres");
        }
        if (!nombre) {
            throw new Error("Nombre obligatorio");
        }
        if (horasextra < 0) {
            throw new Error("Horas extra inválidas");
        }
        if (pagohoraextra < 0) {
            throw new Error("Pago por hora extra inválido");
        }

        this.#RFC = RFC;
        this.#nombre = nombre;
        this.#horasextra = horasextra;
        this.#pagohoraextra = pagohoraextra;
    }

    
    get RFC() {
        return this.#RFC;
    }

    get nombre() {
        return this.#nombre;
    }

    get horasextra() {
        return this.#horasextra;
    }

    get pagohoraextra() {
        return this.#pagohoraextra;
    }

    calcularHorasExtra() {
        return this.#horasextra * this.#pagohoraextra;
    }

  
    mostrar() {
        return `RFC: ${this.#RFC} | Nombre: ${this.#nombre}`;
    }
}


class Sueldo extends Empleado {
    #sueldobase;
    #impuestos;

    constructor(RFC, nombre, horasextra, pagohoraextra, sueldobase, impuestos) {
        super(RFC, nombre, horasextra, pagohoraextra);

        if (sueldobase <= 0) {
            throw new Error("Sueldo base inválido");
        }
        if (impuestos < 0 || impuestos > 100) {
            throw new Error("Impuestos inválidos");
        }

        this.#sueldobase = sueldobase;
        this.#impuestos = impuestos;
    }

   
    sueldoBruto() {
        return this.#sueldobase + this.calcularHorasExtra();
    }

    sueldoNeto() {
        return this.sueldoBruto() * (1 - this.#impuestos / 100);
    }

   
    mostrarAll() {
        return `
${this.mostrar()}
Sueldo base: $${this.#sueldobase}
Horas extra: $${this.calcularHorasExtra()}
Sueldo bruto: $${this.sueldoBruto()}
Sueldo neto: $${this.sueldoNeto()}
`;
    }
}


try {
    const emp = new Sueldo(
        "RFC12345",
        "pocoyo",
        10,
        120,
        8000,
        16
    );

    console.log(emp.mostrar());
    console.log(emp.mostrarAll());

} catch (error) {
    console.error(`Error:"${error.message}`)
}                                           