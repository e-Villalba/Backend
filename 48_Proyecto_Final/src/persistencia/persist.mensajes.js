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
    /*async listar(fecha) {   
    let doc = await msjDAO.listar(fecha);
    return new MensajeDTO(doc.email, doc.fecha, doc.mensaje);
    },*/
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
    async guardar(elem) {
        try{
        //const { email, fecha, mensaje } = elem;    
        //const Msj = await msjDAO.listar( fecha );     
        //const view="producto-result"  
        //if (Msj)
        //{        
        //    mensajeResult= "Mensaje ya existente, no puede registrar un producto con el nombre de uno ya existente"        
        //}
        //else
        //{      
            await msjDAO.guardar(elem);
            mensajeResult = "Mensaje Registrado Exitosamente"
        //}
        /*const objReturn ={
        view: view,
        mensajeResult: mensajeResult    }*/
    //return objReturn
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