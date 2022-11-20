const CustomError = require("../clases/CustomError.class")

const ProductosModel = require('../models/Products'); 
const DAO =require("../clases/DAO.class")

let instanceProducto = null;
class ProductosDAOMongoDB extends DAO{
    constructor(){
        super();
        this.colecction = ProductosModel;
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
    async listar(title) {
        let docs = [];
        try {            
            docs = await this.colecction.findOne({title})        
            return docs;
        } catch (error) {
            const cuserr = new CustomError(500, 'Error al listarAll()', error);
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
    static getInstanceProducto() {
        if (!instanceProducto) {
            instanceProducto = new ProductosDAOMongoDB();
        }
        return instanceProducto;
      }
}


module.exports = ProductosDAOMongoDB