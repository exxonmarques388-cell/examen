class persona{
    constructor(nombre,edad,curp){
        this.nombre=nombre;
        this.edad=edad;
        this.curp=curp;
    }
    saludar(){
        console.log(`hola soy ${this.nombre} y tengo ${this.edad}`);

    }
}
let persona1=new persona("dany",35,"curp");
persona1.saludar();
let persona2=new persona("exxon",18, "curp");
persona2.saludar();