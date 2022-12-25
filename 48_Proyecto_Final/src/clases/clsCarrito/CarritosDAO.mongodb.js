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
    async crearCarrito(elemento) {
        //console.log("Guardar del DAO.MONGODB")
        try {            
            let doc = await this.colecction.create(elemento);
            return doc;
        } catch (error) {
            const cuserr = new CustomError(500, 'Error al guardar()', error);
            
        } 
    }

    async actualizarProductoCarrito(elemento) {
        console.log("Guardar del DAO.MONGODB",elemento)
        try {            
            //let doc = await this.colecction.save(elemento);
            console.log("dao mongo",elemento._id)
            //let doc = this.colecction.save(elemento)//elemento.save()          
            let doc =  await this.colecction.findOneAndUpdate( {_id: elemento._id},elemento)  
            return doc;
        } catch (error) {
            const cuserr = new CustomError(500, 'Error al guardar Carrito()', error);
            
        } 
    }

    async eliminarprodcarrito(idcart,idprod){


    }
    async agregarCarrito(elemento) {
        console.log("Guardar del DAO.MONGODB",elemento)
        try {            
            //let doc = await this.colecction.save(elemento);
            console.log("ANTES del create")
            let doc = await this.colecction.create(elemento);            
            console.log("DESPUES del create")
            return doc;
        } catch (error) {
            const cuserr = new CustomError(500, 'Error al guardar()', error);
            
        } 
    }

    async actualizar(id,obj) {
        //console.log("Guardar del DAO.MONGODB ID",id.trim())
        //console.log("Guardar del DAO.MONGODB OBJ",obj)
        
        try {            
            let doc =  await this.colecction.findOneAndUpdate( {_id: id.trim()},obj)
            console.log("Try doc",doc)
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