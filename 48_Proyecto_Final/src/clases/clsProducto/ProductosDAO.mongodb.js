const CustomError = require("../CustomError.class")

const ProductosModel = require('../../../models/Products'); 
const DAO =require("../DAO.class")

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
            //console.log("listarAll",docs)
            return docs;
        } catch (error) {
            const cuserr = new CustomError(500, 'Error al listarAll()', error);
            throw cuserr;
        } 
    }
    async listar(title) {        
        let docs = [];
        let docreturn=[]
        try {            
            docs = await this.colecction.findOne({title})                 
            if(docs)
            {
            docreturn.push(docs)
            }
            return docreturn;
        } catch (error) {
            const cuserr = new CustomError(500, 'Error al listarTitle()', error);
            throw cuserr;
        } 
    }

    async listarcategory(category) {        
        let docs = [];
        let docreturn=[]
        try {            
            docs = await this.colecction.findOne({category})                 
            if(docs)
            {
            docreturn.push(docs)
            }
            return docreturn;
        } catch (error) {
            const cuserr = new CustomError(500, 'Error al listarcategory()', error);
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