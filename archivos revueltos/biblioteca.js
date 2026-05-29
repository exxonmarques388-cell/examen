class Material {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.disponible = true;
    }

    infoLibro() {
        console.log(`
            TITULO: ${this.titulo}
            AUTOR: ${this.autor}
            DISPONIBLE: ${this.disponible ? "Sí" : "No"}
        `);
    }

    prestar() {
        if (this.disponible) {
            this.disponible = false;
            console.log(`${this.titulo} HA SIDO PRESTADO.`);
        } else {
            console.log(`${this.titulo} NO ESTÁ DISPONIBLE.`);
        }
    }

    devolver() {
        if (this.disponible) {
            console.log(`${this.titulo} YA ESTÁ DISPONIBLE.`);
        } else {
            this.disponible = true;
            console.log(`${this.titulo} HA SIDO DEVUELTO.`);
        }
    }
}

class Libro extends Material {
    constructor(titulo, autor, paginas) {
        super(titulo, autor);
        this.paginas = paginas;
    }

    mostrarInfo() {
        console.log(`
            TITULO: ${this.titulo}
            AUTOR: ${this.autor}
            PÁGINAS: ${this.paginas}
            DISPONIBLE: ${this.disponible ? "Sí" : "No"}
        `);
    }
}

class Revista extends Material {
    constructor(titulo, autor, edicion) {
        super(titulo, autor);
        this.edicion = edicion;
    }

    mostrarInfo() {
        console.log(`
            TITULO: ${this.titulo}
            AUTOR: ${this.autor}
            EDICIÓN: ${this.edicion}
            DISPONIBLE: ${this.disponible ? "Sí" : "No"}
        `);
    }
}


let biblioteca = [
    new Libro("Dune", "Frank Herbert", 688),
    new Revista("Wired", "Equipo Editorial", "Edición Tecnología 2026"),
    new Libro("Neuromante", "William Gibson", 271),
    new Revista("Scientific American", "Varios", "Edición Ciencia Moderna"),
];

// Mostrar información inicial
biblioteca.forEach(material => {
    material.mostrarInfo();
    console.log("-------------------");
});

// Probar préstamo y devolución
biblioteca[0].prestar();
biblioteca[0].mostrarInfo();
biblioteca[0].devolver();
biblioteca[0].mostrarInfo();
