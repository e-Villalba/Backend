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
            const cuserr = new CustomError(500, 'Error al listar()', error);
            throw cuserr;
        } 
    }

    async listarID(_id) {
        let docs = [];
        try {            
            docs = await this.colecction.findOne({_id})        
            return docs;
        } catch (error) {
            const cuserr = new CustomError(500, 'Error al listarID', error);
            throw cuserr;
        } 
    }

    async actualizar(prodActualizado) {
        
        /*try {            
            docs = await this.colecction.findOne({_id})        
            return docs;
        } catch (error) {
            const cuserr = new CustomError(500, 'Error al Guardar', error);
            throw cuserr;
        } */
        //console.log("ProductosDAO.mongodb prodActualizado",prodActualizado)
        const _id =  prodActualizado._id        
        try {            
            const prod = await this.colecction.findOne({_id}) 
            //const id=prod._id    
            prod.title=prodActualizado.title
            prod.price=prodActualizado.price
            prod.thumbnail=prodActualizado.thumbnail
            prod.save()       
            return prod;
        } catch (error) {
            const cuserr = new CustomError(500, 'Error al Actualizar', error);
            throw cuserr;
        } 

        /*this.colecction.findOne({ _id }, async (err, prod) => {
            if (err) {
              console.log("register FindOne Error")
              //loggerError.error(`Ruta '/carrito' - con metodo: ${method} - time: ${time} - error: ${err}`);
              const data = { mensajeResult: `Error de Actualización: ${err}` }    
              console.log(data)
              return data
              //res.render("carritoaddresult", { data });
            }
            if (prod) {
              //loggerConsola.info(`Ruta '/carrito' - con metodo: ${method} - time: ${time}`);
              const id=prod._id    
              prod.title=prodActualizado.title
              prod.price=prodActualizado.price
              prod.thumbnail=prodActualizado.thumbnail
              prod.save()
              const data = { mensajeResult: "Producto actualizado" }
              //res.render("carritoaddresult", { data });
              return data
            }
            if (!prod) {
              const data = {  mensajeResult:"Producto No Encontrado, no se pudo confirmar la Compra" }
              //res.render("carritoaddresult", { data });
              return data
            }
          });*/
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