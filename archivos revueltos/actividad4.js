class PersonalMedico {
  constructor(id, nombre, departamento) {
    this.id = id;
    this.nombre = nombre;
    this.departamento = departamento;
  }

  static base = []; 

  static registrar(obj) {
  
    if (!(obj instanceof PersonalMedico)) {
      console.log("Objeto inválido, no se registró.");
      return;
    }
    PersonalMedico.base.push(obj);
  }
}
 
class Doctor extends PersonalMedico {
  constructor(id, nombre, departamento, especialidad) {
    super(id, nombre, departamento);
    this.especialidad = especialidad;
  }
}

class Enfermero extends PersonalMedico {
  constructor(id, nombre, departamento, turno) {
    super(id, nombre, departamento);
    this.turno = turno;
  }
}


const doc1 = new Doctor(1, "Dra. Ana", "Cardiología", "Cardióloga");
const enf1 = new Enfermero(2, "Luis", "Urgencias", "Vespertino");


PersonalMedico.registrar(doc1);
PersonalMedico.registrar(enf1);
PersonalMedico.registrar("cadena");


console.log(PersonalMedico.base);
console.log(this.id);
