class Personas {
    static clientes = [];

    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;

        // Guardamos directamente el objeto en la lista
        let datos = {
            nombre: this.nombre,
            edad: this.edad
        };
        Personas.clientes.push(datos);
    }

    static guardardatos(nombre, edad) {
        let datos = { nombre, edad };
        Personas.clientes.push(datos);
    }

    static obtenerdatos() {
        Personas.clientes.forEach((pepe) => {
            console.log(`Mi nombre es ${pepe.nombre} y tengo ${pepe.edad} años`);
        });
    }

    static buscarcliente(nombre) {
        return Personas.clientes.find(cliente => cliente.nombre === nombre);
    }
}

// Ejemplo de uso
let cliente1 = new Personas("pataa", 22);
let cliente2 = new Personas("luis", 30);

Personas.obtenerdatos();

console.log("Buscando cliente 'pataa':", Personas.buscarcliente("pataa")); 