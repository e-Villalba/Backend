const CustomError = require("../CustomError.class")
const DAO =require("../DAO.class")

let instanceMensaje = null;

class MensajesDAOMem extends DAO {
    constructor(){
        super();
        this.colecction = [];
    }
    
    listarAll() {
        let docs = [];
        try {
            docs = this.colecction;
            return docs;
        } catch (error) {
            const cuserr = new CustomError(500, 'Error al listarAll()', error);
            logger.error(cuserr);
            throw cuserr;
        } finally {
            //logger.info(`Elementos listados ${docs.length}`);
        }
    }

    guardar(elemento) {
        let doc = null;
        try {          
                doc = elemento;
                this.colecction.push(elemento);
                return doc;
        } catch (error) {
            const cuserr = new CustomError(500, 'Error al guardar()', error);
            throw cuserr;
        } finally {
            //logger.info(`Elemento guardado ${JSON.stringify(doc)}`);
        }
    }

    static getInstanceMensaje() {
        if (!instanceMensaje) {
            instanceMensaje = new MensajesDAOMem();
        }
        return instanceMensaje;
      }   
}

module.exports =  MensajesDAOMem;