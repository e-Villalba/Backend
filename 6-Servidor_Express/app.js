const express = require('express');
const app = express();
const PORT = 8080;
//Clase Contenedor
const fs = require('fs');    
class Contenedor{    
    constructor(archivo){
        this.archivo=archivo        
    }
    productos=[]
    //save(Object): Number - Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
    async save(producto){
        //const fs = require('fs');    
        this.getAll().length===0? producto.id=0:producto.id=idProducto+=1 //Corrección 09/07/2022  si no hay productos setea el id en valor 0
        this.productos.push(producto)       
        try{
            await fs.promises.writeFile(this.archivo,JSON.stringify(this.productos))                   
            //return  producto.id          
            
        }
        catch(err)
        {
            console.log(err)	
        }     
        return  producto.id             
    }
    //getById(Number): Object - Recibe un id y devuelve el objeto con ese id, o null si no está.
    async getById(idProducto){
        //const fs = require('fs');          
        try{
            const contenidoArchivo = await fs.promises.readFile(this.archivo,"utf-8") 
            const arrayProducto= JSON.parse(contenidoArchivo)  //Corrección 09/07/2022  obtiene en una array el resultado
            const prodSeleccionado=arrayProducto.filter(data=>data.id===idProducto)[0] //Corrección 09/07/2022  guarda en una variable string y el array para hacer el return
            return prodSeleccionado
        }
        catch(err)
        {
            console.log(err)	
        }
        
    }

    //getAll(): Object[] - Devuelve un array con los objetos presentes en el archivo.
    async getAll(){
        //const fs = require('fs');            
        try{
            const contenidoArchivo = await fs.promises.readFile(this.archivo,"utf-8")  
            return JSON.parse(contenidoArchivo)
        }
        catch(err)
        {
            fs.writeFileSync(this.archivo,[]) //Corrección 09/07/2022  Crea el archivo si no existe
            console.log(err)	
        }
        
    }
    //deleteById(Number): void - Elimina del archivo el objeto con el id buscado.
    async deleteById(idProducto){
        //const fs = require('fs');    
        try{
            const contenidoArchivo = await fs.promises.readFile(this.archivo,"utf-8") 
            const arrayProducto= JSON.parse(contenidoArchivo)
            let productoEliminado=""//Corrección 09/07/2022 Varialbe para obtener el producto a eliminar
            this.getById(idProducto).then(data=>productoEliminado=data) //Corrección 09/07/2022 Guarda el producto a eliminar para luego informarlo
            
            await fs.promises.writeFile(this.archivo,JSON.stringify(arrayProducto.splice(arrayProducto.findIndex(data=>data.id===idProducto),1)))       
            return productoEliminado //Corrección 09/07/2022 Informa el producto Eliminado
        }
        catch(err)
        {
            console.log(err)	
        }
    }


    //deleteAll(): void - Elimina todos los objetos presentes en el archivo.
    async deleteAll(){
        //const fs = require('fs');            
        try{
            await fs.promises.writeFile(this.archivo,[])//Correcciones 09/07/2022 - Elimina todo creando un array vacío
            
                }
        catch(err)
        {
            console.log(err)	
        }
    }

}
////
class Producto{
    constructor(title, price,thumbnail)
    {
        this.title=title,
        this.price=price,
        this.thumbnail=thumbnail,
        this.id=0
    }
}
app.get('/productos', (req, res) => {
   let Contenedor1 = new Contenedor('productos.txt')
   Contenedor1.getAll().then (data=> res.send(JSON.stringify(data))) 
 }); 


 app.get('/productoRandom', (req, res) => {

   let Contenedor1 = new Contenedor('productos.txt')
   Contenedor1.getById(Math.floor(Math.random() * 3)).then (data=> res.send(JSON.stringify(data))) 
 }); 


 let cantVisitas = 0;
 app.get('/visitas', (req, res) => {
    res.send(`La cantidad de visitas es ${++cantVisitas}`)
 }); 
 
 app.get('/fyh', (req, res) => {
    res.send({fyh:new Date().toLocaleString()})
 });

 const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
 });
 
 
 server.on("error", error => console.log(`Error en servidor ${error}`));
 