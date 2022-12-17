const ProductoDTO = require("../clases/clsProducto/ProductoDTO.class.js")
const config = require("../../conexiones/config.js")

const ProductosDAOMongoDB = require("../clases/clsProducto/ProductosDAO.mongodb")
const ProductosDAOFile = require("../clases/clsProducto/ProductosDAO.file")
const ProductosDAOMem = require("../clases/clsProducto/ProductosDAO.mem")

let prdDAO = null;

const PERSISTENCIA= process.argv.slice(2).toString().trim()||"mongodb"
try{
switch (PERSISTENCIA)
{
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
}
catch(err){console.log ("Error Switch",err)}
const ProductoController = {
    async listar(title) {
        try {
            let doc = await prdDAO.listar(title);            
            let prdDTOs = doc.map(o => {
                return new ProductoDTO(o.title, o.price,o.category, o.thumbnail);
            })
            return prdDTOs;
        }
        catch (error) {
            console.log("error listar Title", error)
        }
    
    },
    async listarcategory(category) {
        try {
            let doc = await prdDAO.listarcategory(category);            
            let prdDTOs = doc.map(o => {
                return new ProductoDTO(o.title, o.price,o.category, o.thumbnail);
            })
            return prdDTOs;
        }
        catch (error) {
            console.log("error listar Title", error)
        }
    
    },
    
    async listarAll() {
        try {
            let docs = await prdDAO.listarAll()
                ;
            let prdDTOs = docs.map(o => {
                return new ProductoDTO(o.title, o.price,o.category, o.thumbnail);
            })
            //console.log("listar All",prdDTOs)
            return prdDTOs;
        }
        catch (error) {
            console.log("error listarAll", error)
        }

    },
    async guardar(elem) {
        try{
        const { title, price, category,thumbnail } = elem;    
    
    
    const Prod = await prdDAO.listar( title );     
    const view="producto-result"  
    console.log("prod persist",Prod.length)
    if (Prod.length>0)
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