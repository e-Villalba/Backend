const MensajeDTO = require("../clases/clsMensaje/MensajesDTO.class.js")

const config = require("../../conexiones/config.js")

const MensajesDAOMongoDB = require("../clases/clsMensaje/MensajesDAO.mongodb")
const MensajesDAOFile = require("../clases/clsMensaje/MensajesDAO.file")
const MensajesDAOMem = require("../clases/clsMensaje/MensajesDAO.mem")

let msjDAO = null;

const PERSISTENCIA= process.argv.slice(2).toString().trim()||"mongodb"
try{
switch (PERSISTENCIA)
{
    case 'mongodb':
        msjDAO = MensajesDAOMongoDB.getInstanceMensaje()
        break;
    case 'file':        
        msjDAO = MensajesDAOFile.getInstanceMensaje()
        break;
    case 'memoria':
        msjDAO = MensajesDAOMem.getInstanceMensaje()
        break;
    default:
        break;
}
}
catch(err){console.log ("Error Switch",err)}
const MensajeController = {
    async listarAll() {
        try {
            let docs = await msjDAO.listarAll();
            
            let msjDTOs = docs.map(o => {
                return new MensajeDTO(o.email, o.fecha, o.mensaje);
            })
            
            return msjDTOs;
        }
        catch (error) {
            console.log("error listarAll", error)
        }

    },    
    async listar(email) {
        try {
            let docs = await msjDAO.listar(email);
            
            let msjDTOs = docs.map(o => {
                return new MensajeDTO(o.email, o.fecha, o.mensaje);
            })            
            return msjDTOs;
        }
        catch (error) {
            console.log("error listarAll", error)
        }
    },

    async guardar(elem) {
        try{
            await msjDAO.guardar(elem);
            mensajeResult = "Mensaje Registrado Exitosamente"
            return mensajeResult
    }catch(error)
    {
        console.log("error persist.mensajes.guardar",error)
    }
        
    },
    async actualizar(title) {
        await msjDAO.actualizar(title);
    },
    async borrar(title) {
        await msjDAO.borrar(title);
    },
    async borrarAll() {
        await msjDAO.borrarAll();
    }
}

module.exports = MensajeController