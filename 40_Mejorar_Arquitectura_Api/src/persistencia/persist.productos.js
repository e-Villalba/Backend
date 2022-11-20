const ProductoDTO = require("../clases/clsProducto/ProductoDTO.class.js")
const config = require("../../conexiones/config.js")

const ProductosDAOMongoDB = require("../clases/clsProducto/ProductosDAO.mongodb")
const ProductosDAOFile = require("../clases/clsProducto/ProductosDAO.file")
const ProductosDAOMem = require("../clases/clsProducto/ProductosDAO.mem")

let prdDAO = null;

switch (config.srv.persistencia) {
    case 'mongodb':
        prdDAO = ProductosDAOMongoDB.getInstanceProducto()
        break;
    case 'file':
        prdDAO = ProductosDAOFile.getInstanceProducto()
        break;
    case 'memoria':
        prdDAO = ProductosDAOMem.getInstanceProducto()
        break;
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
        mensajeResult= "Producto ya existente, no puede registrar un producto con el nombre de uno ya existente"        
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