//una bibliotecaria necesita registrar distintos tipos de materiales como libros y revistas.Todos los materiales 
//tienen caracteristicas en comun como titulo y autor,pero tambien poseen caracteristicas especificas
// Parte 1: Clase Base
class Material {
  constructor(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
    this.disponible = true; 
  }

  mostrarInfo() {
    console.log(`Título: ${this.titulo}, Autor: ${this.autor}, Disponible: ${this.disponible}`);
  }

  prestar() {
    if (this.disponible) {
      this.disponible = false;
      console.log(`"${this.titulo}" ha sido prestado.`);
    } else {
      console.log(`"${this.titulo}" no está disponible.`);
    }
  }

  devolver() {
    this.disponible = true;
    console.log(`"${this.titulo}" ha sido devuelto.`);
  }
}

// Parte 2: Herencia
class Libro extends Material {
  constructor(titulo, autor, numeroPaginas) {
    super(titulo, autor);
    this.numeroPaginas = numeroPaginas;
  }

  mostrarInfo() {
    console.log(`Libro: ${this.titulo}, Autor: ${this.autor}, Páginas: ${this.numeroPaginas}, Disponible: ${this.disponible}`);
  }
}

class Revista extends Material {
  constructor(titulo, autor, edicion) {
    super(titulo, autor);
    this.edicion = edicion;
  }

  mostrarInfo() {
    console.log(`Revista: ${this.titulo}, Autor: ${this.autor}, Edición: ${this.edicion}, Disponible: ${this.disponible}`);
  }
}

// Parte 3: Uso de Array
let biblioteca = [];

let libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez", 471);
let revista1 = new Revista("National Geographic", "Varios autores", "Febrero 2026");

biblioteca.push(libro1);
biblioteca.push(revista1);

// Mostrar información de todos los materiales
biblioteca.forEach(material => material.mostrarInfo());

// Ejemplo de préstamo y devolución
libro1.prestar();
libro1.mostrarInfo();
libro1.devolver();
libro1.mostrarInfo();