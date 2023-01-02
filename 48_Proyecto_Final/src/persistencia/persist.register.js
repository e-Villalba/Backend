const UsuarioDTO = require("../clases/clsUsuario/UsuarioDTO.class")
const config = require("../conexiones/config.js")
const bcrypt = require("bcrypt")
const UsuariosDAOMongoDB = require("../clases/clsUsuario/UsuarioDAO.mongodb")

let userDAO = null;

const PERSISTENCIA = process.argv.slice(3).toString().trim() || "mongodb"
try {
    switch (PERSISTENCIA) {
        case 'mongodb':
            userDAO = UsuariosDAOMongoDB.getInstanceUsuario()
            break;
        /* case 'file':
             prdDAO = ProductosDAOFile.getInstanceProducto()
             break;
         case 'memoria':
             prdDAO = ProductosDAOMem.getInstanceProducto()
             break;*/
        default:
            break;
    }
}
catch (err) { console.log("Error Switch", err) }
const UsuarioPersist = {
    async listar(username) {
        try {
            let doc = await userDAO.listar(username);
            let userDTO = new UsuarioDTO(doc.username, doc.email, doc.apenom,doc.foto);
            return userDTO;
        }
        catch (error) {
            console.log("error listar user", error)
        }

    },
    async registrar(obj) {
        const { username, password, email, apenom,foto } = obj;
        const view = "register-result"
        const Usuario = await userDAO.listar(username)
        let mensajeResult = ""
        if (Usuario) {
            mensajeResult = "Usuario ya registrado"
        }
        else {
            const hashedPassword = await bcrypt.hash(password, 8);
            const newUser = {
                username,
                password: hashedPassword,
                email,
                apenom,
                foto
            };            
            await userDAO.registrar(newUser);
            mensajeResult = "Usuario Registrado Exitosamente"
        }
        const objReturn = {
            view: view,
            mensajeResult: mensajeResult
        }
        return objReturn
    }
}

module.exports = UsuarioPersist
