class estudiante{
    #nombre;
  constructor(nombre){
  this.#nombre=nombre

  }
  
    get nombre(){
        return this.#nombre
    }
}
 const p = new estudiante("pablo");
console.log(p.nombre); 