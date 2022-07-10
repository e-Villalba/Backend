

module.exports = class Contenedor{    
    constructor(archivo){
        this.archivo=archivo        
    }
    productos=[]
    //save(Object): Number - Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
    async save(producto){
        const fs = require('fs');  
        const contenidoArchivo = await fs.promises.readFile(this.archivo)         
        const arrayProducto= JSON.parse(contenidoArchivo)          
        let idProduc=0
        arrayProducto.length>0?  idProduc = arrayProducto.map(produc => produc.id).sort((a, b) => b-a)[0]:idProduc=1

        producto.id=idProduc
        this.productos.push(producto)       
        try{
            await fs.promises.writeFile(this.archivo,JSON.stringify(this.productos))       
            return  producto.id          
        }
        catch(err)
        {
            console.log(err)	
        }
    }
    //getById(Number): Object - Recibe un id y devuelve el objeto con ese id, o null si no está.
    async getById(idProducto){
        const fs = require('fs');    
        try{
            const contenidoArchivo = await fs.promises.readFile(this.archivo) 
            const arrayProducto= JSON.parse(contenidoArchivo)
            return arrayProducto.filter(data=>data.id===idProducto)[0]
        }
        catch(err)
        {
            console.log(err)	
        }
    }

    //getAll(): Object[] - Devuelve un array con los objetos presentes en el archivo.
    async getAll(){
        const fs = require('fs');    
        try{
            const contenidoArchivo = await fs.promises.readFile(this.archivo) 
            return JSON.parse(contenidoArchivo)
        }
        catch(err)
        {
            console.log(err)	
        }
    }
    //deleteById(Number): void - Elimina del archivo el objeto con el id buscado.
    async deleteById(idProducto){
        const fs = require('fs');    
        try{
            const contenidoArchivo = await fs.promises.readFile(this.archivo) 
            const arrayProducto= JSON.parse(contenidoArchivo)
            await fs.promises.writeFile(this.archivo,JSON.stringify(arrayProducto.splice(arrayProducto.findIndex(data=>data.id===idProducto),1)))       
             
        }
        catch(err)
        {
            console.log(err)	
        }
    }


    //deleteAll(): void - Elimina todos los objetos presentes en el archivo.
    async deleteAll(){
        const fs = require('fs');            
        try{
            await fs.promises.writeFile(this.archivo,"[]")       
            
                }
        catch(err)
        {
            console.log(err)	
        }
    }

}

