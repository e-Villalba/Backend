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

   /* actualizar(elemento){
        let doc = null;
        
        try {
            const index = this.colecction.findIndex( producto => producto.title == elemento.title);

            if (index == -1) {
                doc = {code: 401, msg: "Producto no encontrado"};
            } else {
                this.colecction[index] = elemento;
                doc = this.colecction[index];
            }

            return doc;
        } catch (error) {
            const cuserr = new CustomError(500, 'Error al actualizar()', error);
            //logger.error(cuserr);
            throw cuserr;
        } finally {
            //logger.info(`Elemento modificado ${JSON.stringify(doc)}`);
        }
    }

    eliminar(title) {
        let doc = null;
        
        try {
            const index = this.colecction.findIndex( producto => producto.title == title);

            if (index == -1) {
                doc = {code: 401, msg: "Producto no encontrado"};
            } else {
                doc = this.colecction.splice(index, 1);
            }

            return doc;
        } catch (error) {
            const cuserr = new CustomError(500, 'Error al eliminar()', error);
            //logger.error(cuserr);
            throw cuserr;
        } finally {
            //logger.info(`Elemento eliminado ${JSON.stringify(doc)}`);
        }
    }

    validarDuplicidad(dni){
        try {
            let producto = this.colecction.find(producto => {
                return producto.title == title;
            });

            if (producto) {
                return true;   
            } else {
                return false;
            }
        } catch (error) {
            
        }
    }*/
    static getInstanceMensaje() {
        if (!instanceMensaje) {
            instanceMensaje = new MensajesDAOMem();
        }
        return instanceMensaje;
      }
      /*    listar(title) {
        let producto = null;
        
        try {
            producto = this.colecction.find(producto => {
                return producto.title == title;
            });
            return producto;
        } catch (error) {
            const cuserr = new CustomError(500, 'Error al listar(Producto)', error);
            //logger.error(cuserr);
            throw cuserr;
        }
    }*/

}

module.exports =  MensajesDAOMem;