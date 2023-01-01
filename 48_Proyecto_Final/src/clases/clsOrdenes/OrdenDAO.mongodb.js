const CustomError = require("../CustomError.class")

const OrdenesModel = require('../../../models/Orders.js'); 
const DAO =require("../DAO.class")

let instanceOrden = null;
class OrdenesDAOMongoDB extends DAO{
    constructor(){
        super();
        this.colecction = OrdenesModel;
      }
    
    async listarAll() {
        let docs = [];
        try {            
            docs = await this.colecction.find({})        
            return docs;
        } catch (error) {
            const cuserr = new CustomError(500, 'Error al listarAll()', error);
            throw cuserr;
        } 
    }
    async cantidadOrdenes() {
        let docs = [];
        try {            
            docs = await this.colecction.estimatedDocumentCount()      
            //console.log("listarAll",docs)
            return docs;
        } catch (error) {
            const cuserr = new CustomError(500, 'Error al listarAll()', error);
            throw cuserr;
        } 
    }
    async listarUser(username) {                    
        let docs = [];        
        docs = await this.colecction.find({username})           
        return docs  
    }
    async crearOrden(elemento) {
        console.log("Guardar del DAO.MONGODB CREARORDEN",elemento)
        try {            
            let doc = await this.colecction.create(elemento);
            return doc;
        } catch (error) {
            const cuserr = new CustomError(500, 'Error al Crear Orden()', error);
            
        } 
    }

    async actualizar(id,obj) {
        try {            
            let doc =  await this.colecction.findOneAndUpdate( {_id: id.trim()},obj)            
            return doc;
        } catch (error) {
            const cuserr = new CustomError(500, 'Error al Confirmar Orden()', error);            
        } 
    }

    async borrar(id) {        
        try {                        
            let doc =  await this.colecction.deleteOne( {_id: id })             
            return doc;
        } catch (error) {
            const cuserr = new CustomError(500, 'Error al ELIMINAR Orden()', error);
            
        } 
    }

    static getInstanceOrden() {
        if (!instanceOrden) {
            instanceOrden = new OrdenesDAOMongoDB();
        }
        return instanceOrden;
      }
}


module.exports = OrdenesDAOMongoDB