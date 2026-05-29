class Atencion{
    #paciente
    #medico
    #psicologo
    constructor(paciente,medico,psicologo){
        if(!paciente){
         throw new Error("nombre invalido");
            
        }
       this.#paciente=paciente;
        this.#medico=medico;
        this.#psicologo=psicologo;
    }
    get paciente() {
        return this.#paciente;
    }
    get medico() {
        return this.#medico;
    }
     get psicologo() {
        return this.#psicologo;
} }
    

class AtencionMedic extends Atencion{
    constructor(paciente,medico,diagnostico,tratamiento){
          if(!medico){
            throw new Error("se nesesita medico");
             }
        super(paciente,medico,null);
        this.diagnostico=diagnostico;
        this.tratamiento=tratamiento;

    }
    atender(){
        console.log(`
            EL PACIENTE ES: ${this.paciente}
              MEDICO: ${this.medico}
           DIAGNOSTICO: ${this.diagnostico}
           TRATAMIENTO: ${this.tratamiento}`)
    } mostrarInfo() {
        this.atender();
}
}

class AtencionPsico extends Atencion{
    constructor(paciente,psicologo,motivo,observaciones){
          if(!psicologo){
             throw new Error("se nesesita psicologo");
                
             }
        super(paciente,null,psicologo);
        this.motivo=motivo;
        this.observaciones=observaciones;
    }
    atender(){
        console.log(`
            PACIENTE: ${this.paciente}
            PSICOLOGO: ${this.psicologo}
            MOTIVO: ${this.motivo}
            OBSERVACIONES: ${this.observaciones}`)
    }
    mostrarInfo(){
        this.atender()
    }
}
try{
    let consulta =[]
    let p1= new AtencionMedic("pablo","lacho","dolor de cabeza","paracetamol") 
    consulta.push(p1)
   



p1.atender()

consulta.forEach(atencion => atencion.mostrarInfo());

} 



catch(error){
    console.error(`Error:${error.message}`)
}