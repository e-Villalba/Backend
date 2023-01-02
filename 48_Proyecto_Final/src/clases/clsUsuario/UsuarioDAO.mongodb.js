const CustomError = require("../CustomError.class")

const UsuariosModel = require('../../models/User.js'); 
const DAO =require("../DAO.class")

let instanceUsuario = null;
class UsuariosDAOMongoDB extends DAO{
    constructor(){
        super();
        this.colecction = UsuariosModel;
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
    async listar(username) {
        let docs = [];
        try {            
            docs = await this.colecction.findOne({username})     
            return docs;
        } catch (error) {
            const cuserr = new CustomError(500, 'Error al listar yser', error);
            throw cuserr;
        } 
    }
    async registrar(elemento) {
        try {            
            let doc = await this.colecction.create(elemento);
            return doc;
        } catch (error) {
            const cuserr = new CustomError(500, 'Error al guardar() Usuario', error);
            
        } 
    }
    static getInstanceUsuario() {
        if (!instanceUsuario) {
            instanceUsuario = new UsuariosDAOMongoDB();
        }
        return instanceUsuario;
      }
}


module.exports = UsuariosDAOMongoDB