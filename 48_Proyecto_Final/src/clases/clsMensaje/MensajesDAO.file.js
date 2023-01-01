/*========== Modulos globales para DAOs ==========*/
const CustomError = require("../CustomError.class")
const fs = require("fs")
const config = require("../../conexiones/config")
const DAO =require("../DAO.class")


let instanceMensaje = null;
class MensajesDAOFile extends DAO {
    constructor(ruta) {
        super();
        this.ruta = `${config.filedb.pathdb}/mensajes.json`;       
    }

    async listarAll() {
        try {            
            const objs = await fs.promises.readFile(this.ruta, 'utf-8')
            return JSON.parse(objs)
        } catch (error) {
            console.log("ruta error",this.ruta) 
            return []
        }
    }

    async guardar(obj) {
        const objs = await this.listarAll();
        const newObj = { ...obj}
        objs.push(newObj)
        try {
            await fs.promises.writeFile(this.ruta, JSON.stringify(objs, null, 2))
            return newObj
        } catch (error) {
            throw new Error(`Error al guardar: ${error}`)
        }
    }

    static getInstanceMensaje() {
        if (!instanceMensaje) {
            instanceMensaje = new MensajesDAOFile();
        }
        return instanceMensaje;
      }
}

module.exports = MensajesDAOFile;