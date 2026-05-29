/*calcular el area y el perimetro de un rectangulo utilizando las clases js*/
class Rectangulos{
   constructor(base,altura){
    this.base=base;
    this.altura=altura;
   }
   
   calcularArea(){
    return this.base*this.altura;
   }
   calcularpe(){
    return(2*this.base)+(2*this.altura);

   }

   get Area(){
    return this.calcularArea();
   }
   get Perimetro(){
    return this.calcularpe();
   }
 
}

let rectangulo1=new Rectangulos(5,8);
let area=rectangulo1.Area;
let perimetro=rectangulo1.Perimetro;
console.log(`El area del rectangulo es ${area} y el perimetro es ${perimetro}`) 


