const CustomError = require("../CustomError.class")

const CarritosModel = require('../../../models/Cart.js'); 
const DAO =require("../DAO.class")

let instanceCarrito = null;
class CarritosDAOMongoDB extends DAO{
    constructor(){
        super();
        this.colecction = CarritosModel;
      }
    
    async listarAll() {
        let docs = [];
        try {            
            docs = await this.colecction.find({})        
            //console.log("listarAll",docs)
            return docs;
        } catch (error) {
            const cuserr = new CustomError(500, 'Error al listarAll()', error);
            throw cuserr;
        } 
    }
    async listar(_id) {        
        let docs = [];
        let docreturn=[]
        try {            
            docs = await this.colecction.findOne({_id})                 
            /*if(docs)
            {
            docreturn.push(docs)
            }*/
            //console.log("docs",docs.products)
            return docs;
            
        } catch (error) {
            const cuserr = new CustomError(500, 'Error al listar Carrito _id()', error);
            throw cuserr;
        } 
    }

    async listarUser(username,estado) {              
        let docs = [];        
        try {            
            docs = await this.colecction.findOne({ username,estado })                 
            return docs;
        } catch (error) {
            const cuserr = new CustomError(500, 'Error al listar Carrito Usuario()', error);
            throw cuserr;
        } 
    }
    async guardar(elemento) {
        //console.log("Guardar del DAO.MONGODB")
        try {            
            let doc = await this.colecction.create(elemento);
            return doc;
        } catch (error) {
            const cuserr = new CustomError(500, 'Error al guardar()', error);
            
        } 
    }
    async actualizar(id,obj) {
        //console.log("Guardar del DAO.MONGODB ID",id)
        //console.log("Guardar del DAO.MONGODB OBJ",obj)
        
        try {            
            let doc =  await this.colecction.findOneAndUpdate( {_id: id},obj)
            return doc;
        } catch (error) {
            const cuserr = new CustomError(500, 'Error al guardar()', error);
            
        } 
    }

    async borrar(id) {        
        try {            
            let doc =  await this.colecction.deleteOne( {_id: id }) 
            return doc;
        } catch (error) {
            const cuserr = new CustomError(500, 'Error al ELIMINAR PRODUCTO()', error);
            
        } 
    }

    static getInstanceCarrito() {
        if (!instanceCarrito) {
            instanceCarrito = new CarritosDAOMongoDB();
        }
        return instanceCarrito;
      }
}


module.exports = CarritosDAOMongoDB