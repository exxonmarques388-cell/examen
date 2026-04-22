class PersonalMedico {
  constructor(nombre, especialidad) {
    this.nombre = nombre;
    this.especialidad = especialidad;

    // Guardar automáticamente este objeto en el arreglo estático
    PersonalMedico.base.push(this);
  }

  static base = [];
}

const doctor1 = new PersonalMedico("Ana López", "Cardiología");
const doctor2 = new PersonalMedico("Luis Pérez", "Neurología");

console.log(PersonalMedico.base);
// 👉 [ PersonalMedico { nombre: 'Ana López', especialidad: 'Cardiología' },
//      PersonalMedico { nombre: 'Luis Pérez', especialidad: 'Neurología' } ]