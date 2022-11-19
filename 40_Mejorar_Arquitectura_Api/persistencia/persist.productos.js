const ProductoDTO = require("../clases/ProductoDTO.class.js")
const config = require("../conexiones/config.js")

const ProductosDAOMongoDB = require("../clases/ProductosDAO.mongodb")


let prdDAO = null;

switch (config.srv.persistencia) {
    case 'mongodb':
        //prdDAO = new ProductosDAOMongoDB();
        prdDAO = ProductosDAOMongoDB.getInstanceProducto()
        break;
    /*case 'file':
        prdDAO = new PersonasDAOFile();
        break;
    case 'memoria':
        prdDAO = new PersonasDAOMem();
        break;*/
    default:
        break;
}

const ProductoController = {
    async listar(title) {
        let doc = await prdDAO.listar(title);
        return new ProductoDTO(doc.title, doc.price, doc.thumbnail);
    },
    async listarAll() {
        try {
            let docs = await prdDAO.listarAll()
                ;
            let prdDTOs = docs.map(o => {
                return new ProductoDTO(o.title, o.price, o.thumbnail);
            })
            return prdDTOs;
        }
        catch (error) {
            console.log("error listarAll", error)
        }

    },
    async guardar(elem) {
        try{
        const { title, price, thumbnail } = elem;    
    
    
    const Prod = await prdDAO.listar( title ); 
    const view="producto-result"  
    if (Prod)
    {
        
        mensajeResult= "Producto ya registrado"        
    }
    else
    {      
      
       await prdDAO.guardar(elem);
       mensajeResult = "Producto Registrado Exitosamente"
    }
    const objReturn ={
      view: view,
      mensajeResult: mensajeResult
    }
    return objReturn
    }catch(error)
    {
        console.log("error persist.productos.guardar",error)
    }
        
    },
    async actualizar(title) {
        await prdDAO.actualizar(title);
    },
    async borrar(title) {
        await prdDAO.borrar(title);
    },
    async borrarAll() {
        await prdDAO.borrarAll();
    }
}

module.exports = ProductoController