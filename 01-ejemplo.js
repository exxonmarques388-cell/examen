function Datos (){
    let informacion=[
    {
nombre:"dany",
edad:35,
curp:"curp",
    },
    {
        nombre:"exxon",
        edad:18,
        curp:"mace",
    }
]
informacion.map((info)=>{
console.log(`el nombre es ${info.nombre}y tienes ${info.edad}años`)
})
}
Datos()