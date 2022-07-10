class Contenedor{
    constructor(archivo){
        this.archivo=archivo
        this.productos=[]
    }
    //save(Object): Number - Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
    async save(producto){
        const fs = require('fs');    
        producto.id=idProducto+=1
        this.productos.push(producto)
        try{
            await fs.promises.appendFile('productos.txt',JSON.stringify(this.productos))       
            return producto.id
          
        }
        catch(err)
        {
            console.log(err)	
        }
    }
}

class Producto{
    constructor(title, price,thumbnail)
    {
        this.title=title,
        this.price=price,
        this.thumbnail=thumbnail,
        this.id=0
    }
}

let idProducto=0

let Producto1= new Producto("Producto 1",1.1,"http:/imagenProducto1")
let Producto2= new Producto("Producto 2",1.2,"http:/imagenProducto2")
let Producto3= new Producto("Producto 3",1.3,"http:/imagenProducto3")
let Contenedor1 = new Contenedor()

/*idProducto=Contenedor1.save(Producto1)
console.log(idProducto)*/

  //function savedd(){
    //const fs = require('fs');    
    //producto.id=idProducto+=1
    /*try{
        await fs.promises.appendFile('productos.txt',JSON.stringify(producto))       
        return producto.id
      
    }
    catch(err)
    {
        console.log(err)	
    }*/
    
//}
idProducto= Contenedor1.save(Producto1)
console.log(idProducto)
/*function main(){
(async () => {
    idProducto= await Contenedor1.save(Producto1)
    idProducto= await Contenedor1.save(Producto2)
    idProducto= await Contenedor1.save(Producto3)    
    console.log(idProducto,"Pepe")

 })()}

 main()*/
