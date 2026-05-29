class Animal{
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }
    describir(){
        return console.log(`soy ${this.nombre}y tengo ${this.edad}`)
    }
}
class perro extends Animal{
    ladrar(){
        return console.log("aullido")
        
    }
}
let mifirulais=new perro("fidudais",1);

mifirulais.describir();
mifirulais.ladrar();

