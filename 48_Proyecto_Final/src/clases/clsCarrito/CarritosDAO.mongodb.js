const CustomError = require("../CustomError.class")

const CarritosModel = require('../../models/Cart.js'); 
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
    async crearCarrito(elemento) {        
        try {            
            let doc = await this.colecction.create(elemento);
            return doc;
        } catch (error) {
            const cuserr = new CustomError(500, 'Error al guardar()', error);
            
        } 
    }

    async actualizarProductoCarrito(elemento) {
        try {            
            let doc =  await this.colecction.findOneAndUpdate( {_id: elemento._id},elemento)  
            return doc;
        } catch (error) {
            const cuserr = new CustomError(500, 'Error al guardar Carrito()', error);
            
        } 
    }

    async eliminarprodcarrito(idcart,idprod){


    }
    async agregarCarrito(elemento) {
        try {            
            let doc = await this.colecction.create(elemento);            
            return doc;
        } catch (error) {
            const cuserr = new CustomError(500, 'Error al guardar()', error);
            
        } 
    }

    async actualizar(id,obj) {
        try {            
            let doc =  await this.colecction.findOneAndUpdate( {_id: id.trim()},obj)            
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