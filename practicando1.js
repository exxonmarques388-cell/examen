class PersonalMedico {
  constructor(nombre, especialidad) {
    this.nombre = nombre;
    this.especialidad = especialidad;
    PersonalMedico.base.push(this); // se agrega automáticamente
  }

  static base = [];

  static listar() {
    console.log("Lista de médicos registrados:");
    PersonalMedico.base.forEach(medico => {
      console.log(`${medico.nombre} - ${medico.especialidad}`);
    });
  }
}

// Crear médicos
new PersonalMedico( "López","Cardiología");
new PersonalMedico("Luis Pérez", "Neurología");
new PersonalMedico("María Gómez", "Pediatría");


// Recorrer con el método estático
PersonalMedico.listar();
// 👉 Ana López - Cardiología
// 👉 Luis Pérez - Neurología
// 👉 María Gómez - Pediatría