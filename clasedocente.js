class maestro{
    constructor(nombre,apellido,curp){
        this.nombre=nombre;
        this.apellido=apellido;
        this.curp=curp;
    }
    mostrarinformacion(){
        return console.log(`nombre: ${this.nombre}${this.apellido}/n curp:${this.curp} la clave es ${this.clave}puesto  es>${this.puesto}
            el departamento es ${this.departamento}`)
    } 
}


class  docente extends maestro{
    constructor(departamento,puesto,clave,nombre,apellidos,curp){
        super(nombre,apellidos,curp);
        this.departamento=departamento;
        this.puesto=puesto;
        this.clave=clave;
    }
    infoDocente(){
        return console.log(`${this.mostrarinformacion()}
        departamento:${this.departamento},puesto:${this.puesto}
        y su clave es ${this.clave}`)
    }
}
let patita=new docente("2do","maestro",2440,"pablo escobar","escopetero","macaco5324rewtqqx3",)
patita.infoDocente();


