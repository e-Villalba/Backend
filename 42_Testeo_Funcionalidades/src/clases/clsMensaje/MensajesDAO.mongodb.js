const CustomError = require("../CustomError.class")

const MensajesModel = require('../../../models/Mensajes'); 
const DAO =require("../DAO.class")

let instanceMensaje = null;
class MensajesDAOMongoDB extends DAO{
    constructor(){
        super();
        this.colecction = MensajesModel;
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
   /* async listar(title) {
        let docs = [];
        try {            
            docs = await this.colecction.findOne({title})        
            return docs;
        } catch (error) {
            const cuserr = new CustomError(500, 'Error al listarAll()', error);
            throw cuserr;
        } 
    }*/
    async guardar(elemento) {
        //console.log("Guardar del DAO.MONGODB")
        try {            
            let doc = await this.colecction.create(elemento);
            return doc;
        } catch (error) {
            const cuserr = new CustomError(500, 'Error al guardar()', error);
            
        } 
    }
    static getInstanceMensaje() {
        if (!instanceMensaje) {
            instanceMensaje = new MensajesDAOMongoDB();
        }
        return instanceMensaje;
      }
}


module.exports = MensajesDAOMongoDB