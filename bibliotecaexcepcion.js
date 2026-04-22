class Material {
    constructor(titulo, autor) {
        if (!titulo , !autor) {
            throw new Error(" Información incompleta: título y autor son obligatorios.");
        }
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
        if (!this.disponible) {
            throw new Error(` El libro "${this.titulo}" no está disponible para préstamo.`);
        }
        this.disponible = false;
        console.log(` ${this.titulo} HA SIDO PRESTADO.`);
    }

    devolver() {
        if (this.disponible) {
            throw new Error(` El libro "${this.titulo}" ya estaba disponible.`);
        }
        this.disponible = true;
        console.log(` ${this.titulo} HA SIDO DEVUELTO.`);
    }
}

class Libro extends Material {
    constructor(titulo, autor, paginas) {
        super(titulo, autor);
        if (!paginas || paginas <= 0) {
            throw new Error(" Número de páginas inválido.");
        }
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
        if (!edicion) {
            throw new Error(" La revista debe tener una edición especificada.");
        }
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


try {
    let biblioteca = [
        new Libro("Dune", "Frank Herbert", 688),
        new Revista("Wired", "Equipo Editorial", "Edición Tecnología 2026"),
        new Libro("Neuromante", "William Gibson", 271),
        new Revista("Scientific American", "Varios", "Edición Ciencia Moderna"),
    ];

    biblioteca.forEach(material => {
        material.mostrarInfo();
        console.log("-------------------");
    });

    
    biblioteca[0].prestar();
    biblioteca[0].prestar(); 
    biblioteca[0].devolver();
    biblioteca[0].devolver(); 

} catch (error) {
    console.error(error.message);
}
