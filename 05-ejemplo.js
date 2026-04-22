class persona{
    constructor(nombre,apellido,curp){
        this.nombre=nombre;
        this.apellido=apellido;
        this.curp=curp;
    }
    mostrarinformacion(){
        return console.log(`nombre: ${this.nombre}${this.apellido}/n curp:${this.curp} la matricula es ${this.matricula}semestre  es>${this.semestre}
            la carrera es ${this.carrera}`)
    } 
}


class  Estudiante extends persona{
    constructor(carrera,matricula,semestre,nombre,apellidos,curp){
        super(nombre,apellidos,curp);
        this.carrera=carrera;
        this.matricula=matricula;
        this.semestre=semestre;
    }
    infoEstudiante(){
        return console.log(`${this.mostrarinformacion()}
        carrera:${this.carrera},semestre:${this.semestre}
        y su matricula es ${this.matricula}`)
    }
}
let patita=new Estudiante("sistemas","25e20062","2do","exxon","marques","MACE070220HTCRNXA7")
patita.mostrarinformacion();
