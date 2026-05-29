class tiendita{
    constructor(impuestos,descuentos,costo,costu){
        this.impuestos=impuestos;
        this.descuentos=descuentos;
        this.costo=costo;
        this.costu=costu;

      
    
    }
    static base=[]
    static registrar(obj){
        if(!(obj instanceof tiendita)){
            console.log("objeto no registrado")
            return;
        }
        tiendita.base.push(obj);
    }

}
class ropa extends tiendita{
    constructor(camisas,pantalones,vestidos){
        super()
        this.camisas=camisas;
        this.pantalones=pantalones;
        this.vestidos=vestidos;
    }
    

}
class electronica extends tiendita{
    constructor(televisores,computadoras,smartphones){
        super()
        this.televisores=televisores;
        this.computadoras=computadoras;
        this.smartphones=smartphones;
    }
}
class costos extends tiendita{
    constructor(impuestos,descuentos,costos,costu){
        super()
        this.impuestos=impuestos;
        this.descuentos=descuentos;
        this.costos=costos;
        this.costu=costu;
    }
}
const tiend1=new tiendita(15,20 ,180,290);
const rop=new ropa("roja","amarilla","azul")
const elec=new electronica("grandes","dell","samsung")
const cost=new costos("15","20" ,"180","290")

tiendita.registrar(tiend1);
tiendita.registrar(rop);
tiendita.registrar(elec);
tiendita.registrar(cost)


console.log(tiendita.base);
