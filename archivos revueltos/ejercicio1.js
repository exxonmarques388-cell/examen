class Calificacion {
  constructor(calificaciones, nombre, matricula) {
    this.calificaciones = calificaciones;
    this.nombre = nombre;
    this.matricula = matricula;
  }

  datos() {
    if (this.calificaciones >= 70) {
      console.log(
        `Su calificación es ${this.calificaciones}, mi nombre es ${this.nombre}, mi matrícula es ${this.matricula}  APROBADO`
      );
    } else {
      console.log(
        `Su calificación es ${this.calificaciones}, mi nombre es ${this.nombre}, mi matrícula es ${this.matricula}  REPROBADO`
      );
    }
  }
}

let persona1 = new Calificacion(80, "Exxon", "25E20062");
persona1.datos();

// 🔹 Actualizar datos
persona1.calificaciones = 50;   // Cambiar la calificación
persona1.nombre = "Carlos";     // Cambiar el nombre
persona1.matricula = "30A10045"; // Cambiar la matrícula

// Ver los cambios
persona1.datos();